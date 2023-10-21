import { PrismaClient } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";


export async function ensureSuperAdmin(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization;
    if (!authToken) {
        return res.status(401).json({
            message: "Token is missing"
        })
    }

    const [, token] = authToken.split(" ");

    try {
        verify(token, `${process.env.TOKEN_KEY}`);

        // VERIFICANDO SE ESTE É UM USUÁRIO ADMINISTRADOR
        const prisma = new PrismaClient();
        const data = decode(token);
        if (!data) {
            return res.status(401).json({
                message: "Invalid token"
            })
        }
        const id = Number(data?.sub);
        if (!id) {
            return res.status(401).json({
                message: "Invalid token"
            })
        }
        const user = await prisma.user.findUniqueOrThrow({ where: { id } })
        if (user.is_super_admin) {
            res.locals.id_user = id;
            return next();
        } else {
            return res.status(401).json({
                message: "You are not super admin"
            })
        }
        

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }

}