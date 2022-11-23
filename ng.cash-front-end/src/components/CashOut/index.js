import { useState, useContext } from "react";

import UserContext from "../../contexts/UserContext";
import api from "../../services/api";
import { Container, Button, Form, Input } from "./style";

export default function CashOut({ setCashOutBox }) {
  const { token } = useContext(UserContext);

  const [cashOutData, setCashOutData] = useState({});

  function sendCashOut(e) {
    e.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    const confirmTransaction = confirm(
      "Deseja realmente fazer essa transferência?"
    );

    if (confirmTransaction) {
      api
        .cashOut(cashOutData, token)
        .then(handleSuccess)
        .catch((error) => console.log(error));
    }
  }

  function handleSuccess() {
    alert("Transferência realizada com sucesso!");
    setCashOutBox(false);
    window.location.reload();
  }

  return (
    <Container>
      <Form onSubmit={sendCashOut}>
        <Input
          type="text"
          placeholder="username do recebedor"
          value={cashOutData.username || ""}
          onChange={(e) =>
            setCashOutData({ ...cashOutData, username: e.target.value })
          }
          required
        ></Input>
        <Input
          type="text"
          placeholder="valor: 0,00"
          value={cashOutData.value || ""}
          onChange={(e) =>
            setCashOutData({ ...cashOutData, value: e.target.value })
          }
          required
        ></Input>
        <Button type="submit">Enviar</Button>
      </Form>
      <Button onClick={() => setCashOutBox(false)} type="submit">
        Voltar
      </Button>
    </Container>
  );
}
