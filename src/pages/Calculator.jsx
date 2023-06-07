import React from 'react';
import Header from '../components/Header';
import CalculatorComponent from '../components/CalculatorComponent';

const Calculator = () => (
  <>
    <Header />
    <main>
      <h2>Let s do some math!</h2>
      <CalculatorComponent />
    </main>
  </>
);

export default Calculator;
