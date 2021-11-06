import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';

import Header from './components/header/Header';

// main app component that renders the router and the routes
function App() {
  return <Router>
    <div className="container">
      {/* header component  */}
      <Header />
       {/* switch renders the first route that matches the path */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
      </Switch>
    </div>
  </Router>;
}

export default App;
