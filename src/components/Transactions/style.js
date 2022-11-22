import styled from 'styled-components';



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

export { 
  Title,
  Transaction, 
  Description,
  Date,
  Value,
}