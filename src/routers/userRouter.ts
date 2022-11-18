import { Router } from 'express';

import * as userController from "../controllers/userController.js"

const userRouter = Router();

userRouter.post('/sign-up', userController.SignUp)
userRouter.post('/sign-in', userController.SignIn)


export default userRouter;