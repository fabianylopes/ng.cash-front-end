import { Session, User } from "@prisma/client";

export type CreateUser = Omit<User, "id">
export type CreateSession = Omit<Session, "id">