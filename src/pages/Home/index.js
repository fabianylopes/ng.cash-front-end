import { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";

import UserContext from '../../contexts/UserContext';
import api from '../../services/api';
import { H1, Box, Title, Top, Img, Button, Header, Container, Footer} from "./style";
import Out from "../../assets/out.png";
import Transactions from "../../components/Transactions";
import CashOut from "../../components/CashOut";

export default function Home() {
  const navigate = useNavigate();

  const { token, setToken, userData } = useContext(UserContext);

  const [balance, setBalance] = useState(0);
  const [cashOutBox, setCashOutBox] = useState(false);
  const [showTransactions, setShowTransactions] = useState("default");

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
      <Top>
        <div>
          <H1>Olá, {userData.username}</H1>
          <H1>Seu saldo atual é de <span>R$ {balance.toFixed(2)}</span></H1>
        </div>
          <Img onClick={signOut}>
              <img src={Out} alt=""/>
          </Img>
      </Top>

      <Container>
      <Header>
        <Title>Minhas Transações</Title>
        <div>
          <Button onClick={() => setShowTransactions("default")}>Todas</Button>
          <Button onClick={() => setShowTransactions("ins")}>Recebidas</Button>       
          <Button onClick={() => setShowTransactions("outs")}>Realizadas</Button>
        </div>

        <Transactions showTransactions={showTransactions}/>

      </Header>

      <Footer>       
        {cashOutBox ? 
        <CashOut setCashOutBox={setCashOutBox}/> : 
        <Button className='button' onClick={() => setCashOutBox(!cashOutBox)}>Fazer Transferência</Button>
        }
      </Footer>

    </Container>
      
    </Box>
  );
}
