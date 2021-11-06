import React, { useState, useEffect } from 'react';
import Hero from '../components/hero/Hero';

// Homepage component for the application
function Home() {

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
  };

  //https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=vegetarian

  // function used to get recipes from the api
  const getRecipes = async () => {
    const response = await fetch(``);
    const data = await response.json();
    setRecipes(data.hits);
  };


  return (
    <div className="container-fluid">
      <Hero />
    </div>
  );
}

// Export the Home component
export default Home;
