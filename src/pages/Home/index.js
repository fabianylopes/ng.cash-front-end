import { useState, useEffect, useContext } from 'react';

import UserContext from '../../contexts/UserContext';
import api from '../../services/api';
import { Header, Balance } from "./style";

export default function Home() {
  const { token } = useContext(UserContext);

  const [balance, setBalance] = useState({});

  useEffect(() => getBalance(), []); // eslint-disable-line react-hooks/exhaustive-deps

  function getBalance(){
    api.getBalance(token).then((response) => setBalance(response.data)).catch((error) => console.log(error));
  }

  return (
    <>
      <Header>
        <p>Balance: R$ {balance.balance}</p>
      </Header>
      <Balance>

      </Balance>
    </>
  );
}
