import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`

const Title = styled.h1`
  color: #fff;
  font-weight: 400;
  font-size: 18px;

  span {
    font-weight: 700;
  }
`
const Img = styled.div`
  img {
    cursor: pointer;
  }
`
const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 6px;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`



export 
{ 
  Box,
  Img,
  Title,
  Header,
  Button,
}
