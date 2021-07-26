import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Payment from '../pages/Payment';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/payment' component={Payment}></Route>
    </Switch>
  );
}

export default Main;