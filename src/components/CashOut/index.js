import { useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import api from '../../services/api';

import { Button, Form } from "./style";

export default function CashOut({ setCashOutBox }) {

  const { token } = useContext(UserContext);

  const [cashOutData, setCashOutData] = useState({});
  //const [creditedAccountId, setCreditedAccountId] = useState(null);

  
  function sendCashOut(e){
    e.preventDefault();

    //api.findAccountId(cashOutData.username).then((response) => setCreditedAccountId(response.data.accountId)).catch((error) => console.log(error))

    //const data = {...cashOutData, debitedAccountId: userData.accountId, creditedAccountId: creditedAccountId}
    
    api.cashOut(cashOutData, token).then(handleSuccess).catch((error) => console.log(error));
  }

  console.log(cashOutData)

  function handleSuccess(){
    setCashOutBox(false);
  }

  return (
    <>
      <Form onSubmit={sendCashOut}>
          <input
          type="text" 
          placeholder="receiver username"
          value={cashOutData.username || ''}
          onChange={e => setCashOutData({...cashOutData, username: e.target.value})}
          required
          >
          </input>
          <input
          type="number" 
          placeholder="value"
          value={cashOutData.value || ''}
          onChange={e => setCashOutData({...cashOutData, value: e.target.value})}
          required
          >
          </input>
          <Button type="submit">Send</Button>
      </Form>
    </>
  );
}
