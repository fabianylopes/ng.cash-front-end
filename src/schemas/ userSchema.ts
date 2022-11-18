import joi from "joi";
import { CreateUser } from "../utils/createData.js";

const userSchema = joi.object<CreateUser>({
    username: joi.string().min(3).required(),
    password: joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/).required()
});

export default userSchema;