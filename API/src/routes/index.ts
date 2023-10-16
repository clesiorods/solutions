import { Router } from "express";
import AuthenticationController from "../Controllers/AuthenticationController";
import { UserController } from "../Controllers/UserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const router = Router();
const userController = new UserController();
const authenticationController = new AuthenticationController();


//////////////// RORAS DE TESTE DE AUTENTICAÇÃO //////////////////////
router.post('/user', userController.create);
router.post('/login', authenticationController.authenticate);
// router.post('/refresh-token', authenticationController.useRefreshToken);


//////////////// RORAS DE USUÁRIO //////////////////////
router.get('/user', ensureAdmin, userController.findAll);
router.get('/user/:id', ensureAuthenticated, userController.findOne);
// router.put('/user/:id', ensureAuthenticated, userController.update);
// router.delete('/user/:id', ensureAuthenticated, userController.delete);
// router.put('/user/password/:id', ensureAuthenticated, userController.updatePassword);
// router.post('/user/password/:id', ensureAuthenticated, userController.resetPassword);
// router.post('/user', userController.create);


export default router