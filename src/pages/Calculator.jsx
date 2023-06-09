import React from 'react';
import Header from '../components/Header';
import CalculatorComponent from '../components/CalculatorComponent';

const Calculator = () => {
  const styleContent = {
    marginTop: '100px',
    display: 'flex',
    flexDirection: 'column',
    padding: '0 50px',
  };

  return (
    <>
      <Header />
      <main style={styleContent}>
        <h2>Let s do some math!</h2>
        <CalculatorComponent />
      </main>
    </>
  );
};

export default Calculator;
