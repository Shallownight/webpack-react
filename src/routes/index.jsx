import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Biological from '../pages/biological';
import Human from '../pages/human';
import Dog from '../pages/dog';
import Cat from '../pages/cat';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/'} component={Biological} />
          <Route path={'/human'} component={Human} />
          <Route path={'/dog'} component={Dog} />
          <Route path={'/cat'} component={Cat} />
          <Redirect to="/" />
        </Switch>
      </Router>
    )
  }
}