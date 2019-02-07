import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import MainLayoutRoute from '~/src/router/wrappers/MainLayoutRoute';

// Routes
import Home from '~/src/pages/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <MainLayoutRoute path="/" exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
