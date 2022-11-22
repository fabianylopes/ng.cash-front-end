import { Account, Session, Transaction, User } from "@prisma/client";

export type CreateUser = Omit<User, "id">
export type CreateSession = Omit<Session, "id">
export type CreateAccount = Omit<Account, "id">
export type CreateTransaction = Omit<Transaction, "id">