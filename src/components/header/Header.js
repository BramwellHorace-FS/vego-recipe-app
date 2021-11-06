import React from 'react';
import styled from 'styled-components';
import OffCanvas from '../offcanvas/OffCanvas';

// Styles for the header component
const StyledHeader = styled.header`
  .container-fluid {
    height: 6.5rem;
    background-color: #fff;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
`;

// Header component that renders the header of the app and the navigation links
const Header = () => {
  return (
    <StyledHeader>
      <div className="container-fluid">
        {/* application logo */}
        <a href="/" className="logo">
          <h1>Vego</h1>
        </a>
        {/* navigation links & offcanvas menu */}
        <OffCanvas />
      </div>
    </StyledHeader>
  );
};

export default Header;
