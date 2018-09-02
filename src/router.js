import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import JSXExample from './components/JSXExample';
import RenderExample from './components/RenderExample';
import StatePage from './components/StatePage';
import PropsSingle from './components/PropsSingle';
import PropsMultipleParameters from './components/PropsMultipleParameters';
import PropsDeconstruction from './components/PropsDeconstruction';
import DefaultProps from './components/DefaultProps';
import PropsPage from './components/PropTypes'
import LifeCycle from './components/LifeCycle'
import ComponentDemo from './components/ComponentDemo'
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/jsx" exact component={JSXExample} />
        <Route path="/render" exact component={RenderExample} />
        <Route path="/state" exact component={StatePage} />
        <Route path="/propsSingle" exact component={PropsSingle} />
        <Route path="/propsMultipleParameters" exact component={PropsMultipleParameters} />
        <Route path="/propsDeconstruction" exact component={PropsDeconstruction} />
        <Route path="/defaultProps" exact component={DefaultProps} />
        <Route path="/propTypes" exact component={PropsPage} />
        <Route path="/lifeCycle" exact component={LifeCycle} />
        <Route path="/componentDemo" exact component={ComponentDemo} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
