import { Request, Response } from "express";

import * as userService from "../services/userService.js"

export async function SignUp(req: Request, res: Response) {
    const userData = req.body;

    await userService.SignUp(userData);

    res.sendStatus(201);
}

export async function SignIn(req: Request, res: Response) {
    
}