import { Request, Response } from "express";
import AuthenticationService from "../services/AuthenticationService";
// import AuthenticateUserUseCase from "../useCases/authenticateUser/AuthenticateUserUseCase";

export default class AuthenticationController {

    async authenticate(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const authenticationService = new AuthenticationService();
            const token = await authenticationService.authenticate({ email, password });
            return res.status(200).json(token);

        } catch (error: any) {
            return res.status(400).json(error.message);
        }
    }


    // async useRefreshToken(req: Request, res: Response) {
    //     try {
    //         const { refresh_token } = req.body;
    //         const authenticationService = new AuthenticationService();
    //         const tokens = await authenticationService.useRefreshToken(refresh_token);
    //         return res.json(tokens);
            
    //     } catch (error:any) {
    //         return res.status(500).json(
    //             error.message
    //         )
    //     }
    // }
}