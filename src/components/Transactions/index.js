import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import api from '../../services/api';
import CashOut from '../CashOut';

import { Button, Header, Container, Transaction, Description, Date, Title, Value, Footer } from './style';

export default function Transactions() {

  const { token } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const [defaultTansactions, setDefaultTransactios] = useState(true);
  const [cashOutBox, setCashOutBox] = useState(false);


  useEffect(() => getTransactions(), []); // eslint-disable-line react-hooks/exhaustive-deps

  function getTransactions(){

    api.getTransactions(token).then(handleSuccess).catch((error) => console.log(error));
  }

  function handleSuccess(response){
    setTransactions(response.data);

  }

  return (
    <Container>
      <Header>
        <Title>Minhas Transações</Title>
        <div>
          <Button>Todas</Button>
          <Button onClick={() => ShowFilteredTransactions("out")}>Recebidas</Button>       
          <Button onClick={() => setDefaultTransactios(!defaultTansactions)}>Realizadas</Button>
        </div>
        {defaultTansactions ? <ShowDefaultTransactions/> : <ShowFilteredTransactions/>}       
      </Header>

      <Footer>       
        {cashOutBox ? 
        <CashOut setCashOutBox={setCashOutBox}/> : 
        <Button className='button' onClick={() => setCashOutBox(!cashOutBox)}>Fazer Transferência</Button>
        }
      </Footer>

    </Container>
  );
  
  function ShowDefaultTransactions(){
    return (
      <>
      {transactions.map((t, i) => {     
        return (
          <Transaction key={i}>
            <Description>
              <Date>{`${t.createdAt.slice(8, 10)}/${t.createdAt.slice(5, 7)}`}</Date>
            </Description>
            <Value color={t.type}>R$ {t.value.toFixed(2)}</Value>
          </Transaction> 
          
          )
        })}
      </>
    )
  }

  function ShowFilteredTransactions(type){
    const filtered = transactions.filter(obj => obj.type === type)
    return (
      <>
        {filtered.map((t, i) => {     
          return (
            <Transaction key={i}>
            <Description>
            <Date>{`${t.createdAt.slice(8, 10)}/${t.createdAt.slice(5, 7)}`}</Date>
            <Title>{t.type}</Title>
            </Description>
            <Value color={t.type}>R$ {t.value.toFixed(2)}</Value>
            </Transaction> 
            
            )
        })}
      </>
    )
  }

}