import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// styled-components
const ButtonStyled = styled.button`
  width: 25%;
  height: 100px;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: ${(props) => {
    if (props.variant === 'orange') {
      return '#FF8C00';
    }
    return '#d3d3d3';
  }};
  color: '#000000';
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${(props) => {
    if (props.variant === 'orange') {
      return '#FFA500';
    }
    return '#a9a9a9';
  }};
  
  }`;

// Calculator Button Reusable Styled Component
const ButtonCalculator = ({ name, variant }) => (
  <ButtonStyled variant={variant}>
    {name}
  </ButtonStyled>
);

ButtonCalculator.defaultProps = {
  variant: 'grey',
};

ButtonCalculator.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default ButtonCalculator;
