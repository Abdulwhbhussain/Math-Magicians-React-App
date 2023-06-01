import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// styled-component
const QuoteStyled = styled.div`
  align-self: center;
  margin: 0 auto;
  border: 3px solid #000000;
  color: #000000;
  background-color: #d3d3d3;
  margin-bottom: 70px;
  padding: 20px 40px;
  q {
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;
  }
  p {
    font-size: 2rem;
    font-weight: bold;
    display: inline;
    font-style: italic;
  }
  `;

const myApiKey = 'umHsc3loJXt4ggSO6OUuyw==DE7W4zEefoMOX30P';
const url = 'https://api.api-ninjas.com/v1/quotes?category=computers';

const Quote = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    // Get Api Quote Response with myApiKey
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': myApiKey,
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json()).then((data) => {
      setQuote(data[0]);
    });
  }, [setQuote]);

  return (
    <QuoteStyled>
      <q>{quote.quote}</q>
      <p>  -  </p>
      <p>{quote.author}</p>
    </QuoteStyled>
  );
};

export default Quote;
