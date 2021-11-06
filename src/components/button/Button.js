import React from 'react';

// buton component that renders a button with a text and an onClick function
const Button = ({ text, click }) => {
  return <button onClick={click}>{text}</button>;
};

export default Button;
