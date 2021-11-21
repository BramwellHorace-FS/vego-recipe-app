import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import Form from '../components/form/Form';
import Card from '../components/card/Card';
import styled from 'styled-components';
import Modal from '../components/modal/Modal';

const MainStyled = styled.main`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 3rem;
  overflow: hidden;
  margin-bottom: 5rem;
  height: 100%;
  min-height: 100vh;
  animation: fadeIn 1s ease-in forwards;
  

  .loading {
    margin-top: 3rem;
  }

  .recipes {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 3rem;
    margin-top: 4rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const StyledHeader = styled.header`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 1rem;
  margin-bottom: 2rem;
`;

// Search page component for the search page of the application
function Search() {
  // Api ID and key for requesting recipes from the api
  const APP_ID = 'e7d8c517';
  const APP_KEY = '8aa35c072a105b7ce520481ea77454d7';

  let location = useLocation();
  let searchQuery = '';

  // Location state is not empty set the search query to the location state
  if (location.state) {
    searchQuery = location.state.searchTerm;
  }

  const [search, setSearch] = useState('');
  const [query, setQuery] = useState(searchQuery);
  const [results, setResults] = useState('Search our collection of plant-based recipes.');

  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=vegetarian`;

  const { data: recipes, loading, error, setError } = useFetch(URL, query);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (recipes) {
      if (recipes.hits.length === 0) {
        setResults('No recipes found. Please try again.');
      } else {
        setResults(`Search results for ${query}`);
      }
    } else {
      setResults('Search our collection of plant-based recipes.');
    }
  }, [recipes]);

  // update search
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // update query
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="container-fluid">
      <StyledHeader>
        <h1>Explore Recipes</h1>
        <p>{results}</p>
      </StyledHeader>
      <Form func={getSearch} value={search} update={updateSearch} />
      <MainStyled>
        {loading && <p className="loading">Loading recipes...</p>}
        <div className="recipes">
          {recipes && recipes.hits.map((recipe, i) => (
              <Card
                title={recipe.recipe.label}
                image={recipe.recipe.image}
                type={recipe.recipe.mealType}
                time={recipe.recipe.totalTime}
                url={recipe.recipe.url}
                ingredients={recipe.recipe.ingredientLines}
                key={i}
              />
            ))}
        </div>
      </MainStyled>
      {error && (
        <Modal
          title="Something Went Wrong!"
          body="This could be a result of searching too quickly or no results were found.
          Please try again after 1 minute or try another search term."
          closeModal={setError}
        />
      )}
    </div>
  );
}

export default Search;
