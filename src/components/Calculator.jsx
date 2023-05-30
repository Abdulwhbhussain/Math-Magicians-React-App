import React from 'react';
import styled from 'styled-components';
import ButtonCalculator from './utilities/ButtonCalculator';
// import InputCalculator from './utilities/InputCalculator';

// styled-component
const CalculatorStyled = styled.div`
  width: 100%;
  height: 500px;
  p {
    height: 100px;
    font-size: 3rem;
    font-weight: bold;
    background-color: #A9A9A9;
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  
`;

const Calculator = () => (
  <CalculatorStyled>
    <p>0</p>
    <ButtonCalculator className="ac" name="AC" />
    <ButtonCalculator className="plusMinus" name="+/-" />
    <ButtonCalculator className="percent" name="%" />
    <ButtonCalculator className="divide" name="/" variant="orange" />
    <ButtonCalculator className="seven" name="7" />
    <ButtonCalculator className="eight" name="8" />
    <ButtonCalculator className="nine" name="9" />
    <ButtonCalculator className="multiply" name="*" variant="orange" />
    <ButtonCalculator className="four" name="4" />
    <ButtonCalculator className="five" name="5" />
    <ButtonCalculator className="six" name="6" />
    <ButtonCalculator className="minus" name="-" variant="orange" />
    <ButtonCalculator className="one" name="1" />
    <ButtonCalculator className="two" name="2" />
    <ButtonCalculator className="three" name="3" />
    <ButtonCalculator className="plus" name="+" variant="orange" />
    <ButtonCalculator className="zero" name="0" />
    <ButtonCalculator className="dot" name="." />
    <ButtonCalculator className="equal" name="=" variant="orange" />
  </CalculatorStyled>
);

export default Calculator;
