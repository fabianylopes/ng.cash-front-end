import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import { Container, Form, Input, Button, Link } from "./style";
import Logo from '../../assets/logo.jpg'; 
import api from "../../services/api";

export default function SignUp() {
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({});

  function handleSignUp(e){
    e.preventDefault();

    api.signUp(signUpData).then(() => navigate('/sign-in')).catch(handleFailure);
  }

  function handleFailure(error){
    alert(`${error}!\nPreencha os campos corretamente!`);
    setSignUpData({});
  }

  return (
    <Container>
      <img src={Logo} alt="logo"/>
      <Form onSubmit={handleSignUp}>
        <Input 
        type="text" 
        placeholder="username"
        value={signUpData.username || ''}
        onChange={e => setSignUpData({...signUpData, username: e.target.value})}
        required
        >
        </Input>

        <Input 
        type="password" 
        placeholder="password"
        value={signUpData.password || ''}
        onChange={e => setSignUpData({...signUpData, password: e.target.value})}
        required
        >         
        </Input>
        <Button type="submit">Sign Up</Button>
      </Form>
      <Link onClick={() => navigate('/sign-in')}>Already User? Sign In</Link>
    </Container>
  )
}
