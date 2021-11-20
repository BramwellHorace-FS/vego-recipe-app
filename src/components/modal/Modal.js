import styled from 'styled-components';
import { useState } from 'react';
import Button from '../button/Button';

const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;


  &.hidden {
    display: none;
  }

  div {
    width: 35rem;
    height: auto;
    background-color: #fff;
    border-radius: 0.5rem;
    padding: 1.8rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 1rem;
    align-items: center;
    position: relative;
  }

  .closeBtn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
  }

  .okBtn {
    width: 5.5rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    background-color: #00a8ff;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    outline: none;
    border: none;

    &:hover {
      background-color: #0097e6;
    }
  }

`;


export default function Modal({closeModal, title, body}) {


  return (
    <StyledModal >
      <div className="modal">
        <button className="closeBtn" onClick={() => {closeModal(null)}}>X</button>
        <h2>{title}</h2>
        <p>{body}</p>
        <Button text="Ok" click={() => {closeModal(null)}} />
      </div>
    </StyledModal>
  );
}
