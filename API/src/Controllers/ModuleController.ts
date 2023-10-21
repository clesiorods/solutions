import { Request, Response } from "express";
import { ModuleService } from "../services/ModuleService";
import AuthenticationService from "../services/AuthenticationService";


export class ModuleController {


    async create(req: Request, res: Response): Promise<Response> {
        try {
            const moduleService = new ModuleService();

            req.body.created_by = res.locals.id_user;
            const body = req.body;
            const result = await moduleService.create(body);
            return res.status(200).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }



    async update(req: Request, res: Response): Promise<Response> {
        try {
            const moduleService = new ModuleService();
            req.body.updated_by = res.locals.id_user;
            const body = req.body;
            const id = Number(req.params.id);
            const result = await moduleService.update(body, id);
            return res.status(200).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }




    async findAll(req: Request, res: Response): Promise<Response> {
        try {
            const moduleService = new ModuleService();
            const result = await moduleService.findAll();
            return res.status(200).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }
}

