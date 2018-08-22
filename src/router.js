import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import StatePage from './components/State';
import PropsPage from './components/Props';
import defaultPropsPage from './components/defaultProps';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/state" exact component={StatePage} />
        <Route path="/props" exact component={PropsPage} />
        <Route path="/defaultProps" exact component={defaultPropsPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
