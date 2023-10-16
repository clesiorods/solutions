import { compare, hash } from "bcryptjs";
import { User } from "../entities/User";
import dayjs from "dayjs";
import e from "express";
import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { CreateUserProps, createUserSchema } from "../schemas/user.schemas";


// import { createUserSchema } from '../'

interface IUser {
    email: string;
    name: string;
    password: string;
    is_admin: string;
}

interface IEditUser {
    id: string;
    email: string;
    name: string;
    is_admin: number;
}


export class UserService {


    prisma = new PrismaClient()


    async findAll() {
        const users = await this.prisma.user.findMany({ select: { id: true, name: true, email: true, is_admin: true } });
        return users;
    }


    async findOne(id: number) {
        const user = await this.prisma.user.findUniqueOrThrow(
            {
                select: { id: true, name: true, email: true, is_admin: true },
                where: {
                    id: id
                }
            })
        return user
    }


    async create(props: CreateUserProps) {

        const data = createUserSchema.parse(props);
        if (data.password !== data.passwordConfirmation ) {
            throw new Error('Não foi realizar esta operação. As senhas não coicidem.');
        }
        const userExist = await this.prisma.user.findUnique({ where: { email: data.email } });
        if (userExist) {
            throw new Error('Não foi realizar esta operação. Usuário já cadastrado.');
        }

        const passwordHash = await hash(data.password, 8);

        let newUser = await this.prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: passwordHash,
                // is_admin: data.is_admin ? Number(data.is_admin) : 0,
            }
        });

        return newUser;
    }


    // async update(user_data: IEditUser) {
    //     if (!user_data.id) {
    //         throw new Error('Não foi possível criar um usuário');
    //     }

    //     let user = await this.prisma.user.findUnique({ where: { id: Number(user_data.id) } });
    //     if (user) {
    //         user.name = user_data.name ? user_data.name : user.name;
    //         user.email = user_data.email ? user_data.email : user.email;
    //         user.is_admin = user_data.is_admin ? Number(user_data.is_admin) : user.is_admin;
    //         user = await prisma.save(user);
    //     } else {
    //         throw new Error('Não foi possível localizar o usuário');
    //     }
    //     return user;
    // }


    // async delete(id: number) {

    //     const user = prisma.update({ id: id }, { deleted_at: new Date });
    //     return user;
    // }



    // async updatePassword(id: number, oldPassword: string, newPassword: string) {
    //     if (!oldPassword || !newPassword || !id) {
    //         throw new Error('Não foi possível criar um usuário');
    //     }
    //     let user = await this.prisma.user.findUnique({ where: { id: Number(id) } });
    //     if (user) {
    //         const passwordMatch = await compare(oldPassword, user.password);
    //         // const passwordMatch = 1;
    //         if (!passwordMatch) {
    //             throw new Error("Senha incorreta. Tente novamente");
    //         }
    //         const passwordHash = await hash(newPassword, 8);
    //         user.password = passwordHash;
    //         user = await prisma.save(user);
    //     } else {
    //         throw new Error('Não foi possível localizar o usuário');
    //     }
    //     return user;
    // }



    // async resetPassword(id: number) {
    //     if (!id) {
    //         throw new Error('Não foi possível criar um usuário');
    //     }
    //     let user = await this.prisma.user.findUnique({ where: { id: Number(id) } });
    //     if (user) {
    //         const newPassword = `${this.generateRandomString()}`.trim();
    //         const passwordHash = await hash(newPassword, 8);
    //         user.password = passwordHash;
    //         user = await prisma.save(user);
    //         return { password: newPassword };
    //     } else {
    //         throw new Error('Não foi possível localizar o usuário');
    //     }
    // }



    // generateRandomString() {
    //     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    //     let result1 = ' ';
    //     const charactersLength = characters.length;
    //     for (let i = 0; i <= 10; i++) {
    //         result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
    //     }
    //     return result1;
    // }
}