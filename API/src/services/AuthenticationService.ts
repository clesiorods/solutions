import { compare } from "bcryptjs";
import dayjs from "dayjs";
import { decode, sign, verify } from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        email: string;
        id: number;
        name: string | null;
        photo_url: string;
        is_admin: number;
    }
    token: string;
    refreshToken: string;
}


export default class AuthenticationService {


    prisma = new PrismaClient()


    async authenticate({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.prisma.user.findUniqueOrThrow({ where: { email: email } })
        if (!user) {
            throw new Error("Usuário ou senha incorreta");
        }
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Usuário ou senha incorreta. Tente novamente");
        }
        const token = await this.newToken(Number(user.id));
        const refreshToken = await this.newRefreshToken(Number(user.id));
        return {
            user: {
                id: user.id, name: user.name, email: user.email, photo_url: user.photo_url, is_admin: user.is_admin
            },
            token,
            refreshToken
        };
    }


    async useRefreshToken(id_refreshToken: string): Promise<IResponse> {
        const usersRepository = this.prisma.user;
        const refreshRepository = this.prisma.refreshToken;
        const currentRefreshToken = await refreshRepository.findUniqueOrThrow({ where: { id: id_refreshToken } })

        if ((currentRefreshToken) && (currentRefreshToken.expiresIn > dayjs().unix())) {
            const newToken = await this.newToken(currentRefreshToken.id_user);
            const newRefreshToken = await this.newRefreshToken(currentRefreshToken.id_user);
            const user = await usersRepository.findUniqueOrThrow(
                {
                    where: {
                        id: currentRefreshToken.id_user,
                        deleted_at: null
                    },
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        photo_url: true,
                        is_admin: true,
                    }
                });
            if (!user) {
                throw new Error("Usuário não cadastrado");
            }

            return ({ user, token: newToken, refreshToken: newRefreshToken });
        } else {
            throw new Error("Invalid refresh token");
        }

    }


    async isAdmin(authorization: string) {
        if (!authorization) {
            return false;
        }
        const [, token] = authorization.split(" ");
        const data = decode(token);
        if (!data) {
            return false;
        }
        const id = Number(data?.sub);
        if (!id) {
            return false;
        }
        const user = await this.prisma.user.findUniqueOrThrow({ where: { id } })
        if (user.is_admin) {
            return true;
        } else {
            return false
        }
    }


    async getUserId(req: any) {
        const authorization = req.headers.authorization;
        if (!authorization) {
            return -1;
        }
        const [, token] = authorization.split(" ");
        const data = decode(token);
        if (!data) {
            return -1;
        }
        const id = Number(data?.sub);
        if (!id) {
            return -1;
        } else {
            return id
        }
    }


    async newToken(id_user: number) {
        const token = sign({}, `${process.env.TOKEN_KEY}`, {
            subject: id_user.toString(),
            expiresIn: "30s",
        });
        return token;
    }


    async newRefreshToken(id_user: number) {
        const expiresIn = dayjs().add(1, "minute").unix();
        const refreshTable = this.prisma.refreshToken;
        await refreshTable.deleteMany({ where: { id_user: id_user } });

        let newRefreshToken = await refreshTable.create({
            data: {
                id_user: id_user,
                expiresIn: expiresIn
            }
        });
        return newRefreshToken.id;
    }

}

