import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  width: 326px;
  height: 100vh;
  border-radius: 5px;
  padding: 12px 12px 10px 12px; 
  background-color: #f0e9e9;   
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
`

const Description = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 6px;
`

const Date = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #868686;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 19px;
  color: #000000;
`

const Value = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({color}) => color === 'in' ? '#03AC00' : '#C70000'};
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;

  div {
    display: flex;
    justify-content: space-between;
  }
`

const Button = styled.button`
  width: 98px;
  height: 26px;
  background-color: #a77df7;
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    background-color: #7431f4;
  }
`
const Footer = styled.div`
  width: 100%;
  height: 110px;
  padding-bottom: 6px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  .button {
    width: 100%;
  }
`

export { 
  Header,
  Button,
  Container, 
  Transaction, 
  Description,
  Date,
  Title,
  Value,
  Footer
}