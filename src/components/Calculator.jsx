import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonCalculator from './utilities/ButtonCalculator';
import calculate from './logic/calculate';

// styled-component
const CalculatorStyled = styled.div`
  margin: 0 auto;
  padding-top: 150px;
  width: 50%;
  height: 100vh;
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

const Calculator = () => {
  const [obj, setObj] = useState('');
  let result = obj.total || obj.next || '0';

  const handleClick = (e) => {
    const { name } = e.target;
    result = setObj(calculate(obj, name));
  };

  return (
    <CalculatorStyled>
      <p>{result}</p>
      <ButtonCalculator className="ac" name="AC" onClick={handleClick} />
      <ButtonCalculator className="plusMinus" name="+/-" onClick={handleClick} />
      <ButtonCalculator className="percent" name="%" onClick={handleClick} />
      <ButtonCalculator className="divide" name="÷" variant="orange" onClick={handleClick} />
      <ButtonCalculator className="seven" name="7" onClick={handleClick} />
      <ButtonCalculator className="eight" name="8" onClick={handleClick} />
      <ButtonCalculator className="nine" name="9" onClick={handleClick} />
      <ButtonCalculator className="multiply" name="x" variant="orange" onClick={handleClick} />
      <ButtonCalculator className="four" name="4" onClick={handleClick} />
      <ButtonCalculator className="five" name="5" onClick={handleClick} />
      <ButtonCalculator className="six" name="6" onClick={handleClick} />
      <ButtonCalculator className="minus" name="-" variant="orange" onClick={handleClick} />
      <ButtonCalculator className="one" name="1" onClick={handleClick} />
      <ButtonCalculator className="two" name="2" onClick={handleClick} />
      <ButtonCalculator className="three" name="3" onClick={handleClick} />
      <ButtonCalculator className="plus" name="+" variant="orange" onClick={handleClick} />
      <ButtonCalculator style={{ width: '50%' }} className="zero" name="0" onClick={handleClick} />
      <ButtonCalculator className="dot" name="." onClick={handleClick} />
      <ButtonCalculator className="equal" name="=" variant="orange" onClick={handleClick} />
    </CalculatorStyled>
  );
};

export default Calculator;
