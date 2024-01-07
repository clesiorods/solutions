import { Request, Response } from "express";
import { ModuleService } from "../Services/ModuleService";
import { StocksService } from "../Services/StocksService";


export class StocksController {


    async findOne(req: Request, res: Response): Promise<Response> {
        try {
            const stocksService = new StocksService();

            req.body.created_by = res.locals.id_user;
            const {symbol} = req.params;
            const result = await stocksService.findOne(symbol);
            return res.status(200).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }


    async add(req: Request, res: Response): Promise<Response> {
        try {
            const stocksService = new StocksService();

            req.body.created_by = res.locals.id_user;
            const {symbol} = req.params;
            const result = await stocksService.add(symbol);
            return res.status(200).json(result);

        } catch (error: any) {
            return res.status(400).json({
                err: error.message
            })
        }
    }
}

