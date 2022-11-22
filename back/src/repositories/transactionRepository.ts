import { prisma } from "../config/db.js";

export async function findBalance(id: number) {
  return prisma.account.findUnique({
    where: {
      id,
    }
  });
}

export async function create(debitedAccountId: number, creditedAccountId: number, value: number) {
  return prisma.transaction.create({
    data: {
      debitedAccountId,
      creditedAccountId,
      value
    }
  });
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

export async function getTransactions(accountId: number) {
  return prisma.transaction.findMany({
    where: {
      OR: [
        {
          debitedAccountId: {
            equals: accountId,
          },
        },
        {
          creditedAccountId: {
            equals: accountId,
          },
        },
      ],
    },
  });
}

export async function getCashOutTransactions(debitedAccountId: number) {
  return prisma.transaction.findMany({
    where: {
      debitedAccountId,
    }
  });
}

export async function getCashInTransactions(creditedAccountId: number) {
  return prisma.transaction.findMany({
    where: {
      creditedAccountId,
    }
  });
}