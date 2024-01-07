import { Request, Response } from "express";
// import { ModuleService } from "../services/ModuleService";
import AuthenticationService from "../Services/AuthenticationService";
import { PayableService } from "../Services/PayableService";


export class PayableController {

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const payableService = new PayableService();
            req.body.created_by = res.locals.id_user;
            req.body.id_user = res.locals.id_user;
            const body = req.body;
            const result = await payableService.create(body);
            return res.status(200).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }



    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const payableService = new PayableService();
            const result = await payableService.findAll();
            return res.status(200).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }



    async findOne(req: Request, res: Response): Promise<Response> {
        try {
            const payableService = new PayableService();
            req.body.id_user = res.locals.id_user;
            const {id} = req.params;
            const result = await payableService.findOne(Number(id));
            return res.status(200).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }
}

