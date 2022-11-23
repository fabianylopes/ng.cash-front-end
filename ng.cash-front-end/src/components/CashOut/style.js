import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  height: 26px;
  background-color: #a77df7;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border: 1px solid #7431f4;
  cursor: pointer;

  :hover {
    background-color: #7431f4;
  }
`;
const Form = styled.form`
  width: 100%;
  padding-bottom: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 6px;
  padding: 5px;
  background-color: #fff;
  border: 1px solid #7431f4;

  ::placeholder {
    font-size: 14px;
    line-height: 40px;
    color: #7431f4;
  }
`;

export { Container, Button, Form, Input };
