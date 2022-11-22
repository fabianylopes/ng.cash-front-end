import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';

import UserContext from '../../contexts/UserContext';
import api from '../../services/api';
import { Box, Title, Header, Img} from "./style";
import Transactions from "../../components/Transactions";
import Out from "../../assets/out.png";

export default function Home() {
  const navigate = useNavigate();

  const { token, setToken, userData } = useContext(UserContext);
  const [balance, setBalance] = useState(0);


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
    <Box>
      <Header>
        <div>
          <Title>Olá, {userData.username}</Title>
          <Title>Seu saldo atual é de <span>R$ {balance.toFixed(2)}</span></Title>
        </div>
          <Img onClick={signOut}>
              <img src={Out} alt=""/>
          </Img>
      </Header>

      <Transactions/>
      
    </Box>
  );
}
