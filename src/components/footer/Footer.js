import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #E6E8DF;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  color: #666;
`;

// Footer component that displays the footer of the application
const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <p>Vego © 2021. All Rights Reserved.</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
