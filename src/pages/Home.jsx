import React from 'react';
// import styled from 'styled-components';
import Header from '../components/Header';

// Header with Links to Home, Calculator and Quote
const Home = () => {
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
        <h2>Welcome to our page!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Esse maiores possimus, sed doloribus facere nobis
          assumenda facilis voluptas obcaecati odit id vero
          aut illum omnis iste eos quo tenetur.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          A corporis ipsam consectetur! Molestias assumenda
          vero unde labore eius tenetur ad earum, laudantium
          fugit facere facilis voluptate dolor possimus
          dicta soluta reprehenderit totam repellat amet et?
        </p>
      </main>
    </>
  );
};

export default Home;
