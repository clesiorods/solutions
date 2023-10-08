import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import AuthenticationService from "../services/AuthenticationService";


export class UserController {


    async findAll(req: Request, res: Response): Promise<Response> {
        const is_admin = await new AuthenticationService().isAdmin(`${req.headers.authorization}`);
        if (is_admin) {
            try {
                const userService = new UserService();
                const result = await userService.findAll();
                return res.status(200).json(result);

            } catch (error: any) {
                return res.status(400).json({
                    err: error.message
                })
            }
        } else {
            return res.status(400).json(`Você não tem permissão para acessar esta rota`)
        }
    }


    async create(req: Request, res: Response) {
        // const is_admin = await new AuthenticationService().isAdmin(`${req.headers.authorization}`);
        // if (is_admin) {
            try {
                const { email, name, password, is_admin } = req.body;
                const createUserUseCase = new UserService();
                const user = await createUserUseCase.create({ email, name, password, is_admin });

                return res.status(200).json(user);

            } catch (error: any) {
                return res.status(400).json(error.message)
            }
        // } else {
        //     return res.status(400).json(`Você não tem permissão para acessar esta rota`)
        // }
    }


    async findOne(req: Request, res: Response): Promise<Response> {
        // const is_admin = await new AuthenticationService().isAdmin(`${req.headers.authorization}`);
        // if (is_admin) {
            try {
                const userService = new UserService();
                const { id } = req.params;
                if (!id) {
                    throw new Error('Não foi possível realizar a busca. Dados incompletos');
                }
                const user = await userService.findOne(Number(id));
                return res.status(200).json(user);

            } catch (error: any) {
                return res.status(400).json({
                    err: error.message
                })
            }
        // } else {
        //     return res.status(400).json(`Você não tem permissão para acessar esta rota`)
        // }
    }


    // async update(req: Request, res: Response): Promise<Response> {
    //     const is_admin = await new AuthenticationService().isAdmin(`${req.headers.authorization}`);
    //     if (is_admin) {
    //         try {
    //             let { email, name, is_admin } = req.body;
    //             const { id } = req.params;
    //             if (!id) {
    //                 throw new Error('Não foi possível editar o usuário. Dados incompletos');
    //             }
    //             let user = {
    //                 email: email ? email.toString() : '',
    //                 name: name ? name.toString() : '',
    //                 is_admin: is_admin ? is_admin.toString() : '',
    //                 id: id ? id.toString() : '',
    //             };
    //             const userService = new UserService();
    //             const result = await userService.update(user);
    //             return res.status(200).json(result);

    //         } catch (error: any) {
    //             return res.status(400).json({
    //                 err: error.message
    //             })
    //         }
    //     } else {
    //         return res.status(400).json(`Você não tem permissão para acessar esta rota`)
    //     }
    // }



    // async updatePassword(req: Request, res: Response): Promise<Response> {
    //     // const is_admin = await new AuthenticationService().isAdmin(`${req.headers.authorization}`);
    //     // if (is_admin) {
    //     try {
    //         const { oldPassword, newPassword } = req.body;
    //         const { id } = req.params;
    //         if (!id || !oldPassword || !newPassword) {
    //             throw new Error('Não foi possível criar o usuário. Dados incompletos');
    //         }
    //         const userService = new UserService();
    //         const result = await userService.updatePassword(Number(id), oldPassword, newPassword);
    //         return res.status(200).json(result);

    //     } catch (error: any) {
    //         return res.status(400).json({
    //             err: error.message
    //         })
    //     }
    //     // } else {
    //     //     return res.status(400).json(`Você não tem permissão para acessar esta rota`)
    //     // }
    // }




    // async resetPassword(req: Request, res: Response): Promise<Response> {
    //     const is_admin = await new AuthenticationService().isAdmin(`${req.headers.authorization}`);
    //     if (is_admin) {
    //         try {
    //             const { id } = req.params;
    //             const userService = new UserService();
    //             const result = await userService.resetPassword(Number(id));
    //             return res.status(200).json(result);

    //         } catch (error: any) {
    //             return res.status(400).json({
    //                 err: error.message
    //             })
    //         }
    //     } else {
    //         return res.status(400).json(`Você não tem permissão para acessar esta rota`)
    //     }
    // }


    // async delete(req: Request, res: Response): Promise<Response> {
    //     const is_admin = await new AuthenticationService().isAdmin(`${req.headers.authorization}`);
    //     if (is_admin) {
    //         try {
    //             const { id } = req.params;
    //             if (!id) {
    //                 throw new Error('Não foi possível deletar o usuário. Dados incompletos');
    //             }
    //             const userService = new UserService();
    //             const result = await userService.delete(Number(id));
    //             return res.status(200).json(result);

    //         } catch (error: any) {
    //             return res.status(400).json({
    //                 err: error.message
    //             })
    //         }
    //     } else {
    //         return res.status(400).json(`Você não tem permissão para acessar esta rota`)
    //     }
    // }
}

