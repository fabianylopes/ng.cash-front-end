import { CreateUser } from "../utils/createData.js";
import { prisma } from "../config/db.js";

export async function create(createUser: CreateUser) {
    return prisma.user.create({
        data: createUser,
    });
}

export async function findByUsername(username: string) {
    return prisma.user.findUnique({
        where: {
            username,
        }
    });
}

export async function createSession(token: string, userId: number) {
    return prisma.session.create({
        data: { token, userId }
    });
}