import { Request, Response } from "express";

import * as transactionService from "../services/transactionService.js";
import * as transactionRepository from "../repositories/transactionRepository.js";

export async function findBalance(req: Request, res: Response) {
  const userData = res.locals.userToken;

  const balance = await transactionRepository.findBalance(userData.accountId);

  return res.status(200).send(balance);
}

export async function create(req: Request, res: Response) {
  const body = req.body;

  await transactionService.cashOut(body);

  return res.sendStatus(201);
}

export async function getTransactions(req: Request, res: Response) {
  const { accountId } = req.body;

  const transactios = []

  const debitedTransactions = await transactionRepository.getCashOutTransactions(accountId);
  const creditedTransactions = await transactionRepository.getCashInTransactions(accountId);

  return res.status(200).send([...transactios, debitedTransactions, creditedTransactions]);
}