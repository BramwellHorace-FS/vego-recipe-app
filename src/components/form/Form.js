import React from 'react';
import Button from '../button/Button';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const StyledForm = styled.form`
  display: flex;
  border-radius: 5rem;
  outline: 0.1rem solid #eee;
  background: #fff;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  input {
    width: 100%;
    outline: none;
    border: 0;
    background: transparent;
    padding: 1rem 0.5rem;
    font-size: 1.4rem;
  }

  .search-icon {
    font-size: 1.5rem;
    color: #608677;
  }
`;

// Form component used for recipe search
function Form({ func, value, update }) {
  return (
    <StyledForm onSubmit={func}>
      <BsSearch className="search-icon" />
      <input type="search" name="search" id="search" placeholder="Search recipes" value={value} onChange={update}/>
    </StyledForm>
  );
}

export default Form;
