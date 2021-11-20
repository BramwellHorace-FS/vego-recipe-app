import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Search from './pages/Search';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// main app component that renders the router and the routes
function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="container">
          {/* header component  */}
          <Header />
          {/* switch renders the first route that matches the path */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
