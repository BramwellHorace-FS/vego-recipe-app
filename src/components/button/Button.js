import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button `
  background: #698578;
  padding: 1rem 3rem;
  font-size: 1.4rem;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #5f6d5f;
  }

`;

// buton component that renders a button with a text and an onClick function
const Button = ({ text, click }) => {
  return <StyledButton onClick={click}>{text}</StyledButton>;
};

export default Button;
