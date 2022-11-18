import { Router } from 'express';

import * as userController from "../controllers/userController.js";
import validateSchemaMiddleware from "../middlewares/schemaMiddleware.js";
import userSchema from "../schemas/ userSchema.js";

const userRouter = Router();

userRouter.post('/sign-up', validateSchemaMiddleware(userSchema), userController.SignUp);
userRouter.post('/sign-in', userController.SignIn);

export default userRouter;