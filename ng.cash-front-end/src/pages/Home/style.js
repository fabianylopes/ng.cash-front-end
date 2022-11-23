import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
  img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }
`;

const Button = styled.button`
  width: 300px;
  height: 40px;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
  color: #000;
  font-size: 16px;
  font-weight: 700;
`;

export { Container, Button };
