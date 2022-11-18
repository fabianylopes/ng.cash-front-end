import { Router } from "express";

import * as userController from "../controllers/userController.js";
import validateSchemaMiddleware from "../middlewares/schemaMiddleware.js";
import { signInSchema, signUpSchema } from "../schemas/ userSchema.js";

const userRouter = Router();

userRouter.post('/sign-up', validateSchemaMiddleware(signUpSchema), userController.SignUp);
userRouter.post('/sign-in', validateSchemaMiddleware(signInSchema), userController.SignIn);

export default userRouter;