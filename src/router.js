import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import StatePage from './components/statePage';
import PropsSingle from './components/propsSingle';
import PropsMultipleParameters from './components/propsMultipleParameters';
import PropsDeconstruction from './components/propsDeconstruction';
import defaultPropsPage from './components/defaultProps';
import propTypes from './components/propTypes'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/state" exact component={StatePage} />
        <Route path="/propsSingle" exact component={PropsSingle} />
        <Route path="/propsMultipleParameters" exact component={PropsMultipleParameters} />
        <Route path="/propsDeconstruction" exact component={PropsDeconstruction} />
        <Route path="/defaultProps" exact component={defaultPropsPage} />
        <Route path="/propTypes" exact component={propTypes} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
