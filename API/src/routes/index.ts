import { Router } from "express";
import AuthenticationController from "../Controllers/AuthenticationController";
import { UserController } from "../Controllers/UserController";
import { ensureAuthenticated } from "../Middlewares/ensureAuthenticated";
import { ensureAdmin } from "../Middlewares/ensureAdmin";
import { ModuleController } from "../Controllers/ModuleController";
import { ensureSuperAdmin } from "../Middlewares/ensureSuperAdmin";
import { PayableController } from "../Controllers/PayableController";
import { PagesController } from "../Controllers/PagesController";
import { StocksController } from "../Controllers/StocksController";

const router = Router();
const userController = new UserController();
const authenticationController = new AuthenticationController();
const moduleController = new ModuleController();
const payableController = new PayableController();
const pagesController = new PagesController();
const stocksController = new StocksController();

//////////////// RORAS DE TESTE DE AUTENTICAÇÃO //////////////////////
router.get('/', (req, res) => {
    return res.json({status:'200', message:'Está tudo certo!', version: '0.2.3'});
});


//////////////// RORAS DE TESTE DE AUTENTICAÇÃO //////////////////////
router.post('/user', userController.create);
router.post('/login', authenticationController.authenticate);
router.post('/refresh-token', authenticationController.useRefreshToken);
router.post('/verify-refresh-token', authenticationController.verifyRefreshToken);
// router.post('/refresh-token', authenticationController.useRefreshToken);


//////////////// RORAS DE USUÁRIO //////////////////////
router.get('/user', ensureAdmin, userController.findAll);
router.get('/user/:id', ensureAuthenticated, userController.findOne);
// router.put('/user/:id', ensureAuthenticated, userController.update);
// router.delete('/user/:id', ensureAuthenticated, userController.delete);
// router.put('/user/password/:id', ensureAuthenticated, userController.updatePassword);
// router.post('/user/password/:id', ensureAuthenticated, userController.resetPassword);
// router.post('/user', userController.create);


//////////////// RORAS DOS MÓDULOS //////////////////////
router.get('/module', ensureAuthenticated, moduleController.findAll);
router.post('/module', ensureSuperAdmin, moduleController.create);
router.put('/module/:id', ensureSuperAdmin, moduleController.update);


//////////////// RORAS DE CONTAS //////////////////////
router.post('/payable', ensureAuthenticated, payableController.create);
router.get('/payable', ensureAuthenticated, payableController.findAll);
router.get('/payable/:id', ensureAuthenticated, payableController.findOne);
// router.put('/module/:id', ensureAuthenticated, moduleController.update);


//////////////// RORAS DAS PÁGINAS //////////////////////
router.get('/page-resume/', ensureAuthenticated, pagesController.resumePage);


//////////////// RORAS DAS PÁGINAS //////////////////////
router.get('/stocks/:symbol', ensureAuthenticated, stocksController.findOne);
router.post('/stocks/:symbol', ensureAuthenticated, stocksController.add);
router.put('/stocks/:symbol', ensureAuthenticated, stocksController.update);


export default router