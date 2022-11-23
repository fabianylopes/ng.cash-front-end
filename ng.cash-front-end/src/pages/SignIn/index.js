import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, Input, Button, Link } from "./style";
import Logo from "../../assets/logo.jpg";
import api from "../../services/api";
import UserContext from "../../contexts/UserContext";

export default function SignIn() {
  const navigate = useNavigate();

  const { token, setToken, setUserData } = useContext(UserContext);
  const [signInData, setSignInData] = useState({});

  useEffect(() => {
    if (token) {
      navigate("/main");
    }
  }, [token]); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSignIn(e) {
    e.preventDefault();

    api.signIn(signInData).then(handleSuccess).catch(handleFailure);
  }

  function handleSuccess(response) {
    setUserData(response.data);
    setToken(response.data.token);

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("userData", JSON.stringify(response.data));

    navigate("/main");
  }

  function handleFailure(error) {
    alert(`${error}!\nPreencha os campos corretamente!`);
    setSignInData({});
  }

  return (
    <Container>
      <img src={Logo} alt="logo" />
      <Form onSubmit={handleSignIn}>
        <Input
          type="text"
          placeholder="username"
          value={signInData.username || ""}
          onChange={(e) =>
            setSignInData({ ...signInData, username: e.target.value })
          }
          required
        ></Input>

        <Input
          type="password"
          placeholder="password"
          value={signInData.password || ""}
          onChange={(e) =>
            setSignInData({ ...signInData, password: e.target.value })
          }
          required
        ></Input>
        <Button type="submit">Sign In</Button>
      </Form>
      <Link onClick={() => navigate("/sign-up")}>
        Not an User? Create account
      </Link>
    </Container>
  );
}
