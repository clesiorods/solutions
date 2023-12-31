import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";


export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({
            message: "Token is missing"
        })
    }

    const [, token] = authToken.split(" ");

    try {
        verify(token, `${process.env.TOKEN_KEY}`);
        const data = decode(token);
        if (!data) {
            return res.status(401).json({
                message: "Invalid token"
            })
        }
        const id = Number(data?.sub);
        if (!id) {
            return res.status(401).json({
                message: "Iser is missing"
            })
        }
        res.locals.id_user = id;

        return next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid token"
        })
    }

}