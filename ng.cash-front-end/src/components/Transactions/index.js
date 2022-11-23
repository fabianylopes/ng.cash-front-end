import { useState, useContext, useEffect } from "react";

import UserContext from "../../contexts/UserContext";
import api from "../../services/api";
import { Transaction, Description, Date, Title, Value } from "./style";

export default function Transactions({ showTransactions }) {
  const { token } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => getTransactions(), []); // eslint-disable-line react-hooks/exhaustive-deps

  function getTransactions() {
    api
      .getTransactions(token)
      .then(handleSuccess)
      .catch((error) => console.log(error));
  }

  function handleSuccess(response) {
    setTransactions(response.data);
  }

  if (transactions.length === 0) {
    return <Title>Você ainda não tem nenhuma transação.</Title>;
  }

  if (showTransactions === "default") {
    return (
      <>
        {transactions.map((t, i) => {
          return (
            <Transaction key={i}>
              <Description>
                <Date>{`${t.createdAt.slice(8, 10)}/${t.createdAt.slice(
                  5,
                  7
                )}`}</Date>
              </Description>
              <Value color={t.type}>R$ {t.value.toFixed(2)}</Value>
            </Transaction>
          );
        })}
      </>
    );
  } else {
    return <FilteredTransactions type={showTransactions} />;
  }

  function FilteredTransactions({ type }) {
    const filtered = transactions.filter((obj) => obj.type === type);
    return (
      <>
        {filtered.map((t, i) => {
          return (
            <Transaction key={i}>
              <Description>
                <Date>{`${t.createdAt.slice(8, 10)}/${t.createdAt.slice(
                  5,
                  7
                )}`}</Date>
              </Description>
              <Value color={t.type}>R$ {t.value.toFixed(2)}</Value>
            </Transaction>
          );
        })}
      </>
    );
  }
}
