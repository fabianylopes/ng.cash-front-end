import { Router } from "express";

import * as transactionController from "../controllers/transactionController.js"
import { validateTokenMiddleware } from "../middlewares/tokenMiddleware.js";

const transactionRouter = Router();

transactionRouter.get('/', validateTokenMiddleware, transactionController.findBalance);
transactionRouter.post('/cash-out', transactionController.create);

export default transactionRouter;
