import { Request, Response } from "express";
import AuthenticationService from "../services/AuthenticationService";
// import AuthenticateUserUseCase from "../useCases/authenticateUser/AuthenticateUserUseCase";

export default class AuthenticationController {

    async authenticate(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const authenticationService = new AuthenticationService();
            const resp = await authenticationService.authenticate({ email, password });
            if(resp.token) {
                return res.status(200).json(resp);
            } else {
                return res.status(401).json(resp);
            }
        } catch (error: any) {
            return res.status(400).json(error.message);
        }
    }


    async useRefreshToken(req: Request, res: Response) {
        try {
            const { refresh_token } = req.body;
            const authenticationService = new AuthenticationService();
            const resp = await authenticationService.useRefreshToken(refresh_token);
            if(resp.token) {
                return res.status(200).json(resp);
            } else {
                return res.status(401).json(resp);
            }
            
        } catch (error:any) {
            return res.status(401).json(
                error.message
            )
        }
    }
}