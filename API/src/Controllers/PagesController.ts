import { Request, Response } from "express";
// import { ModuleService } from "../services/ModuleService";
import AuthenticationService from "../Services/AuthenticationService";
import { PayableService } from "../Services/PayableService";
import { PagesService } from "../Services/PageService";


export class PagesController {

    async resumePage(req: Request, res: Response): Promise<Response> {
        try {
            const pageService = new PagesService();
            const result = await pageService.ResumePage();
            return res.status(200).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }
}

