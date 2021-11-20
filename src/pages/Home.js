import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useFetch } from '../hooks/useFetch';
import Hero from '../components/hero/Hero';
import Card from '../components/card/Card';
import Button from '../components/button/Button';
import styled from 'styled-components';
import Modal from '../components/modal/Modal';

const MainStyled = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  row-gap: 3rem;
  overflow: hidden;
  margin-bottom: 5rem;
  animation: fadeIn 1s ease-in forwards;

  button {
    margin: 0 auto;
  }

  .recipes {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    row-gap: 3rem;
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

// Homepage component for the application
function Home() {
  const [query, setQuery] = useState('popular');
  const [search, setSearch] = useState('');

  let history = useHistory();
  const APP_ID = 'e7d8c517';
  const APP_KEY = '8aa35c072a105b7ce520481ea77454d7';
  const URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=vegetarian`;

  const { data: recipes, loading, error, setError } = useFetch(URL, query);

  // update search
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // update query
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    history.push({
      pathname: '/search',
      state: {
        searchTerm: search,
      },
    });
  };


  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <Hero func={getSearch} value={search} update={updateSearch} />
        <MainStyled>
          {error && (
            <Modal
              title="Something Went Wrong!"
              body="This could be a result of searching too quickly or no results were found.
              Please try again after 1 minute or try another search term."
              closeModal={setError}
            />
          )}
          <h4>Most Popular Recipes</h4>
          {loading && <p>Loading recipes...</p>}
          <div className="recipes">
            {recipes &&
              recipes.hits.map((recipe, i) => (
                <Card key={i} image={recipe.recipe.image} title={recipe.recipe.label} time={recipe.recipe.totalTime} type={recipe.recipe.mealType} url={recipe.recipe.url} />
              ))}
          </div>
          <Button
          text="Explore more recipes"
          click={() => {
            history.push('/search');
          }}
        />
        </MainStyled>
      </div>
    </div>
  );
}

// Export the Home component
export default Home;
