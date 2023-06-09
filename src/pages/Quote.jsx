import React from 'react';
import Header from '../components/Header';
import QuoteComponent from '../components/QuoteComponent';

const Quote = () => {
  const styleQuote = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100px',
  };

  return (
    <>
      <Header />
      <main style={styleQuote}><QuoteComponent /></main>
    </>
  );
};

export default Quote;
