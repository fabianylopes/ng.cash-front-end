/* import { useState, useContext, useEffect } from 'react';
import UserContext from '../../contexts/UserContext';
import api from '../../services/api'; */

import { Teste, Container, Transaction, Description, Balance, H2, Total, Date, Title, Value } from './style';

export default function Transactions() {

  //const { token, userData } = useContext(UserContext);
 /*  const [transactions, setTransactions] = useState([])

  useEffect(() => getTransactions(), []); // eslint-disable-line react-hooks/exhaustive-deps

  function getTransactions(){
    const body = userData.accountId;

    api.getTransactions(body, token).then((response) => setTransactions(response.data)).catch((error) => console.log(error));
  } */

 

  return (
    <Container>
      <Teste>
      <Transaction>
        <Description>
            <Date>date</Date>
            <Title>description</Title>
        </Description>
        <Value>value</Value>
      </Transaction>  
      </Teste>
      <Balance>
          <H2>SALDO</H2>
          <Total>balance</Total>
      </Balance>
    </Container>
  );
}
