import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  padding: 0 2rem;
  height: 4rem;
  h1 {
    font-size: 1.5rem;
  }
  nav {
    ul {
      display: flex;
      list-style: none;
      li {
        margin-left: 1rem;
        a {
          color: #fff;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

// Header with Links to Home, Calculator and Quote
const Header = () => (
  <>
    <HeaderStyled>
      <h1>Math Magicians</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/quote">Quote</Link></li>
        </ul>
      </nav>
    </HeaderStyled>
  </>
);

export default Header;
