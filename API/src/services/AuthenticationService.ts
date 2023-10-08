import { compare } from "bcryptjs";
import dayjs from "dayjs";
import { decode, sign, verify } from "jsonwebtoken";
import { User } from "../entities/User";
import { PrismaClient } from "@prisma/client";

interface IRequest {
    email: string;
    password: string;
}


export default class AuthenticationService {

    prisma = new PrismaClient()

    async authenticate({ email, password }: IRequest) {

        const user = await this.prisma.user.findUniqueOrThrow({ where: { email: email } })
        if (!user) {
            throw new Error("Usuário ou senha incorreta");
        }
        const passwordMatch = await compare(password, user.password);
        // const passwordMatch = 1;

        if (!passwordMatch) {
            throw new Error("Usuário ou senha incorreta. Tente novamente");
        }
        const token = await this.newToken(Number(user.id));
        // const newRefreshToken = await this.newRefreshToken(user.id);

        return {
            token,
            user: {
                id: user.id, name: user.name, email: user.email, is_admin: user.is_admin
            }
        };
    }


    async newToken(id_user: number) {
        const token = sign({}, `${process.env.TOKEN_KEY}`, {
            subject: id_user.toString(),
            expiresIn: "24h",
        });
        return token;
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

    // async newRefreshToken(id_user: number) {
    //     const expiresIn = dayjs().add(7, "days").unix();
    //     const refreshTokenRepository = database.getRepository(RefreshToken);

    //     await refreshTokenRepository
    //         .createQueryBuilder()
    //         .delete()
    //         .where(`id_user = ${id_user}`)
    //         .execute()

    //     let newRefreshToken = refreshTokenRepository.create({
    //         id_user: id_user,
    //         expiresIn: expiresIn
    //     })
    //     await refreshTokenRepository.save(newRefreshToken)
    //     return newRefreshToken;
    // }


    // async useRefreshToken(id_refreshToken: string) {
    //     const refreshTokenRepository = database.getRepository(RefreshToken);
    //     const currentRefreshToken = await refreshTokenRepository.findOne({where: {id: id_refreshToken}})

    //     if((currentRefreshToken) && (currentRefreshToken.expiresIn > dayjs().unix())) {
    //         const newToken = await this.newToken(currentRefreshToken.id_user);
    //         const newRefreshToken = await this.newRefreshToken(currentRefreshToken.id_user);
    //         return ({token: newToken, refreshToken: newRefreshToken.id});
    //     } else {
    //         throw new Error("Invalid refresh token");
    //     }

    // }
}

