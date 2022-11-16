import { useNavigate } from "react-router-dom";

import { Container, Form, Input, Button, Link } from "./style";
import Logo from '../../assets/logo.jpg';

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={Logo} alt="logo"/>
      <Form>
        <Input 
        type="text" 
        placeholder="username"
        required
        >
        </Input>

        <Input 
        type="password" 
        placeholder="password"
        required
        >         
        </Input>

        <Button type="submit">Sign In</Button>
      </Form>

        <Link onClick={() => navigate('/sign-up')}>Not an User? Create account</Link>
    </Container>
  )
}
