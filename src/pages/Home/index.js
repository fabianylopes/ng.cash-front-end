import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';

import UserContext from '../../contexts/UserContext';
import api from '../../services/api';
import { Header, Balance, Button} from "./style";
import Transactions from "../../components/Transactions";
import CashOut from "../../components/CashOut";

export default function Home() {
  const navigate = useNavigate();

  const { token, setToken, userData } = useContext(UserContext);
  const [balance, setBalance] = useState(0);
  const [cashOutBox, setCashOutBox] = useState(false);

  useEffect(() => getBalance(), []); // eslint-disable-line react-hooks/exhaustive-deps

  function getBalance(){
    api.getBalance(token).then((response) => setBalance(response.data.balance)).catch((error) => console.log(error));
  }

  function signOut(){
    api.signOut(token).then(handleSuccess).catch((error) => console.log(error));
  }

  function handleSuccess(){
    localStorage.removeItem('token');
    setToken(null);
    navigate('/sign-in');
  }

  return (
    <>
      <Header>
        <p>{userData.username}'s Balance: R$ {balance.toFixed(2)}</p>
        <Button onClick={signOut}>Sign Out</Button>
        <Button onClick={() => setCashOutBox(!cashOutBox)}>Cash Out</Button>
        {cashOutBox && <CashOut setCashOutBox={setCashOutBox}/>}
      </Header>
      <Balance>

      </Balance>
      <Transactions/>
    </>
  );
}
