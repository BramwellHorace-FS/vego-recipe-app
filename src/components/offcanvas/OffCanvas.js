import React, { useState } from 'react';
import Navigation from '../navigation/Navigation';
import styled from 'styled-components';

const StyledHamburger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  z-index: 20;


  div {
    width: 2rem;
    height: 0.25rem;
    border-radius: 0.3rem;
    background: #000;
    transition: all 0.3s linear;
    transform-origin: 1px;


    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
      transform: ${({ isOpen }) => (isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 576px) {
    display: none;
  }
`;

// Offcanvas component for displaying a side menu on mobile devices
const OffCanvas = () => {
  // state used to toggle the side menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger icon to toggle the side menu */}
      <StyledHamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </StyledHamburger>

      {/* navigation component to display in side menu */}
      <Navigation open={isOpen} />
    </>
  );
};

export default OffCanvas;
