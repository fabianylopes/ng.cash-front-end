import joi from "joi";
import { CreateUser } from "../utils/createData.js";

const userSchema = joi.object<CreateUser>({
    username: joi.string().required(),
    password: joi.string().required()
});

export default userSchema;