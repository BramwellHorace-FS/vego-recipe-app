import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styles for the navigation component
const StyledNavigation = styled.nav`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 1rem;
  background: #eee;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 15rem;
  padding: 3.5rem 2rem;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  z-index: 1;

  a {
    font-size: 1.4rem;
  }
  
  @media (min-width: 576px) {
    flex-flow: row nowrap;
    align-items: center;
    column-gap: 2rem;
    position: initial;
    top: initial;
    right: initial;
    width: initial;
    background: transparent;
    padding: 0;
    transform: initial;
    height: initial;
    z-index: initial;
  }
`;

//  Navigation component that renders the navigation links for the application
const Navigation = ({open}) => {
  return (
    <StyledNavigation open={open}>
      {/* Navigation links */}
      <Link to="/">Home</Link>
      <Link to="/search">Explore Recipes</Link>
    </StyledNavigation>
  );
};

// Navigation component export
export default Navigation;
