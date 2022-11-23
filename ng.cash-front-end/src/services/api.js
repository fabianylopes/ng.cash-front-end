import axios from "axios";

const BASE_URL = "http://localhost:4000";

function getConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signIn(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);
  return promise;
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);
  return promise;
}

function getBalance(token) {
  const config = getConfig(token);
  const promise = axios.get(`${BASE_URL}/`, config);
  return promise;
}

function signOut(token) {
  const config = getConfig(token);
  const promise = axios.delete(`${BASE_URL}/sign-out`, config);
  return promise;
}

function cashOut(body, token) {
  const config = getConfig(token);
  const promise = axios.post(`${BASE_URL}/cash-out`, body, config);
  return promise;
}

function findAccountId(username) {
  const promise = axios.get(`${BASE_URL}/findAccountId`, username);
  return promise;
}

function getTransactions(token) {
  const config = getConfig(token);
  const promise = axios.get(`${BASE_URL}/transactions`, config);
  return promise;
}

const api = {
  signIn,
  signUp,
  getBalance,
  signOut,
  cashOut,
  findAccountId,
  getTransactions,
};

export default api;
