import styled from 'styled-components';

const Container = styled.div`
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    width: 326px;
    height: 446px;
    border-radius: 5px;
    padding: 23px 12px 10px 12px; 
    background-color: #fff;   
    color: #868686;
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

const Balance = styled.div`
    display: flex;
    justify-content: space-between;
`

const H2 = styled.h2`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000;
`

const Total = styled.h3`
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: ${({color}) => color >= 0 ? '#03AC00' : '#C70000'};
`

const Date = styled.h2`
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
`

const Title = styled.h2`
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`

const Value = styled.h2`
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({color}) => color === 'entry' ? '#03AC00' : '#C70000'};
`

const Teste = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 6px;
`

export { 
    Teste,
    Container, 
    Transaction, 
    Description,
    Balance,
    H2,
    Total,
    Date,
    Title,
    Value,
}