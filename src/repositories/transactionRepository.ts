import { prisma } from "../config/db.js";
import { CreateTransaction } from "../utils/createData.js";

export async function findBalance(id: number) {
  return prisma.account.findUnique({
    where: {
      id,
    }
  });
}

export async function create(createTransaction: CreateTransaction) {
  const { debitedAccountId, creditedAccountId, value } = createTransaction;

  return prisma.transaction.create({
    data: {
      debitedAccountId,
      creditedAccountId,
      value
    }
  })
}

export async function updateBalance(id:number, balance: number) {
  return prisma.account.update({
    where: {
      id,
    },
    data: {
      balance,
    }
  });
}