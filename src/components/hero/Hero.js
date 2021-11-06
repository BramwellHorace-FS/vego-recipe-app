import React from 'react';
import styled from 'styled-components';
import image from '../../images/plate.png';
import Form from '../form/Form';
import Button from '../button/Button';

// Styles for the Hero component
const StyledHero = styled.div`
  animation: fadeIn 0.3s ease-in;
  overflow: hidden;

  .search {
    background: #e6e8de;
    width: 100%;
    border-radius: 1rem;
    padding: 2rem;
    overflow: hidden;
    position: relative;

    img {
        width: 100%;
    }

    .intro {
      display: flex;
      flex-flow: column nowrap;
      row-gap: 2rem;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 576px) {
    .search {
      padding: 1rem;
    }
  } 

  @media (min-width: 768px) {
    .search {
      padding: 3rem 5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: row wrap;
      column-gap: 5rem;  
      
      .intro {
          flex: 6;
      }
      .image {
        flex: 6;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
`;

// Hero component - represents the hero section of the app (the first section)
const Hero = ({}) => {
  return (
    <StyledHero className="container-fluid">
      <div className="search">
        <div className="intro">
          <h2>Quick, Easy & Delicious Plant-based Recipes</h2>
          <p>Exlpore our collection of plant-based recipes to compliment your healthy lifestyle.</p>
          <Form />
        </div>
        <div className="image">
          <img src={image} alt="plate" />
        </div>
      </div>
    </StyledHero>
  );
};

// Exports the Hero component
export default Hero;
