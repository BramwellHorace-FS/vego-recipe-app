import React from 'react';
import styled from 'styled-components';
import { AiOutlineClockCircle } from 'react-icons/ai';

const CardStyled = styled.article`
  max-width: 320px;
  padding: 1rem 1rem 2rem;
  background: #f7fcfd;
  border-radius: 0.5rem;
  overflow: auto;
  align-self: stretch;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 1%);
  cursor: pointer;

  &:hover {
    animation: scaleUp 0.5s linear forwards;
    h2 {
      color: #000;
    }
  }

  header {
    margin: 1rem 0;

    h2 {
      font-size: 1.5rem;
      line-height: 2rem;
      color: #616362;
    }

    .meta {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 0.5rem;
      margin-bottom: 1rem;
    }

    span {
      background: #608677;
      color: #fff;
      padding: 0.5rem 0.75rem;
      border-radius: 1rem;
      font-size: 0.75rem;
      font-weight: 600;
      display: inline-block;
      margin-right: 0.5rem;
    }

    .time {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      column-gap: 0.3rem;
    }
  }

  img {
    border-radius: 0.3rem;
    width: 100%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleUp {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-0.5rem);
    }
  }
`;

// Card component - represents a single recipe card
const Card = ({ image, title, time, type, url }) => {
  return (
    <CardStyled
      onClick={() => {
        window.open(url, '_blank');
      }}
    >
      <img src={image} alt={title} />
      <header>
        <div className="meta">
          <span>{type}</span>
          <p className="time">
            <AiOutlineClockCircle className="time-icon" />
            {time} mins
          </p>
        </div>
        <h2>{title}</h2>
      </header>
    </CardStyled>
  );
};

export default Card;
