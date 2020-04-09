import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components.jsx';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route path='/hats' component={ShopPage}/>
     </Switch>
    </div>
  );
}

export default App;
