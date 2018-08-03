import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Bundle from './Bundle'; // 按需加载配置
import Index from 'bundle-loader?lazy&name=index!@/containers/Index';
import Success from 'bundle-loader?lazy&name=success!@/containers/Success';

const Loading = function () {
  return <div>Loading...。。。</div>
};

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading/>
    }
  </Bundle>
);

const getRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={createComponent(Index)}/>
      <Route exact path="/index" component={createComponent(Index)}/>
      <Route exact path="/success" component={createComponent(Success)}/>
    </Switch>
  </Router>
);

export default getRouter;