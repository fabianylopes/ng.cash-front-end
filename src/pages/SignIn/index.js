import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import { Container, Form, Input, Button, Link } from "./style";
import Logo from '../../assets/logo.jpg';
import api from "../../services/api";

export default function SignIn() {
  const navigate = useNavigate();

  const [signInData, setSignInData] = useState({});

  function handleSignIn(e){
    e.preventDefault();

    api.signIn(signInData).then(() => navigate('/')).catch(handleFailure)
  }

  function handleFailure(error){
    alert(`${error}!\nPreencha os campos corretamente!`);
    setSignInData({});
  }

  return (
    <Container>
      <img src={Logo} alt="logo"/>
      <Form onSubmit={handleSignIn}>
        <Input 
        type="text" 
        placeholder="username"
        value={signInData.username || ''}
        onChange={e => setSignInData({...signInData, username: e.target.value})}
        required
        >
        </Input>

        <Input 
        type="password" 
        placeholder="password"
        value={signInData.password || ''}
        onChange={e => setSignInData({...signInData, password: e.target.value})}
        required
        >         
        </Input>
        <Button type="submit">Sign In</Button>
      </Form>
      <Link onClick={() => navigate('/sign-up')}>Not an User? Create account</Link>
    </Container>
  );
}
