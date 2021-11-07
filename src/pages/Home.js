import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Hero from '../components/hero/Hero';
import Card from '../components/card/Card';
import Button from '../components/button/Button';
import styled from 'styled-components';

const MainStyled = styled.main`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;
  overflow: hidden;
  margin-bottom: 5rem;
  animation: fadeIn 1s ease-in forwards;

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
  let history = useHistory();

  // state for recipes
  const [recipes, setRecipes] = useState([]);

  // state for gathering search input
  const [search, setSearch] = useState('');

  // state for gathering the search results
  const [query, setQuery] = useState('');

  // Api ID and key for requesting recipes from the api
  const APP_ID = 'e7d8c517';
  const APP_KEY = '8aa35c072a105b7ce520481ea77454d7';

  // function to get recipes from the api when the search button is clicked
  useEffect(() => {
    getRecipes();
  }, [query]);

  // function used to get search inputs from the user on change
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  // function used to set the search query to the search input
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

  // function used to get recipes from the api
  const getRecipes = async () => {
    try {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=vegetarian`);
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid">
      <Hero func={getSearch} value={search} update={updateSearch} />
      <MainStyled>
        <h4>Recipes of The Day</h4>
        <div className="recipes">
          {recipes.slice(0,8).map((recipe, i) => (
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
        <Button
          text="Explore more recipes"
          click={() => {
            history.push('/search');
          }}
        />
      </MainStyled>
    </div>
  );
}

// Export the Home component
export default Home;
