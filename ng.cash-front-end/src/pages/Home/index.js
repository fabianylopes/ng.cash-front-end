import { useNavigate } from "react-router-dom";

import { Container, Button } from "./style";
import Logo from "../../assets/logo.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <img src={Logo} alt="logo" />
      <Button onClick={() => navigate("/sign-in")}>Sign In</Button>
      <Button onClick={() => navigate("/sign-up")}>Sign Up</Button>
    </Container>
  );
}
