import * as transactionRepository from "../repositories/transactionRepository.js";
import { CreateTransaction } from "../utils/createData.js";

export async function cashOut(createTransaction: CreateTransaction) {
  const { debitedAccountId, creditedAccountId, value } = createTransaction;
  
  const balanceDebitedAccount = await transactionRepository.findBalance(debitedAccountId);
  const balanceCreditedAccount = await transactionRepository.findBalance(creditedAccountId);

  const currentBalanceDebitedAccount = balanceDebitedAccount.balance;
  const currentBalanceCreditedAccount = balanceCreditedAccount.balance;

  const newBalanceDebitedAccount = currentBalanceDebitedAccount - value;
  const newBalanceCreditedAccount = currentBalanceCreditedAccount + value;

  if(newBalanceDebitedAccount < 0) throw {type: "unauthorized", message: "Insufficient funds"}
  if(debitedAccountId === creditedAccountId) throw {type: "unauthorized", message: "You can't transfer for yourself"}

  await transactionRepository.create(createTransaction);

  await transactionRepository.updateBalance(debitedAccountId, newBalanceDebitedAccount);
  await transactionRepository.updateBalance(creditedAccountId, newBalanceCreditedAccount);
}