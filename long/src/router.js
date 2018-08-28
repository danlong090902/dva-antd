import React from 'react';
import {Route, Switch, routerRedux} from 'dva/router';
import App from './routes/App';

import dynamic from 'dva/dynamic'

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {
  const Chart = dynamic({
    app,
    component: () => import('./routes/Charts')
  });
  const Form = dynamic({
    app,
    component: () => import('./routes/MyForm')
  });
  const Map = dynamic({
    app,
    component: () => import('./routes/Amap')
  });
  const Car = dynamic({
    app,
    component: () => import('./routes/Carousel')
  });
  const More2 = dynamic({
    app,
    component: () => import('./routes/MoreMenu2')
  });
  const More1 = dynamic({
    app,
    component: () => import('./routes/MoreMenu1')
  });
  const Time = dynamic({
    app,
    component: () => import('./routes/Time')
  });
  const Rate = dynamic({
    app,
    component: () => import('./routes/more/Rate')
  });
  const Slider = dynamic({
    app,
    component: () => import('./routes/more/Slider')
  });
  const LongTransfer = dynamic({
    app,
    component: () => import('./routes/more/Transfer')
  });
  const Upload = dynamic({
    app,
    component: () => import('./routes/more/Upload')
  });
  const Card = dynamic({
    app,
    component: () => import('./routes/more/Card')
  });
  const Collapse = dynamic({
    app,
    component: () => import('./routes/more/Collapse')
  });
  const Tabs = dynamic({
    app,
    component: () => import('./routes/more/Tabs')
  });
  const TimeLine = dynamic({
    app,
    component: () => import('./routes/more/TimeLine')
  });
  const Tree = dynamic({
    app,
    component: () => import('./routes/Tree')
  });
  const Drawer = dynamic({
    app,
    component: () => import('./routes/more/Drawer')
  });
  const Modal = dynamic({
    app,
    component: () => import('./routes/more/Modal')
  });
  const Hook = dynamic({
    app,
    component: () => import('./routes/Hook')
  });
  const BizCharts = dynamic({
    app,
    component: () => import('./routes/BizCharts')
  });
  return (
    <ConnectedRouter history={history}>
      <App>
      <Switch>
        <Route path="/" exact component={Chart} />
        <Route path="/form" exact component={Form} />
        <Route path="/chart" exact component={Chart} />
        <Route path="/car" exact component={Car} />
        <Route path="/map" exact component={Map} />
        <Route path="/hook" exact component={Hook} />
        <Route path="/time" exact component={Time} />
        <Route path="/more1" exact component={More1} />
        <Route path="/more2" exact component={More2} />
        <Route path="/rate" exact component={Rate} />
        <Route path="/slider" exact component={Slider} />
        <Route path="/transfers" exact component={LongTransfer} />
        <Route path="/upload" exact component={Upload} />
        <Route path="/card" exact component={Card} />
        <Route path="/collapse" exact component={Collapse} />
        <Route path="/tabs" exact component={Tabs} />
        <Route path="/timeLine" exact component={TimeLine} />
        <Route path="/tree" exact component={Tree} />
        <Route path="/drawer" exact component={Drawer} />
        <Route path="/modal" exact component={Modal} />
        <Route path="/bizChart" exact component={BizCharts} />
      </Switch>
      </App>
    </ConnectedRouter>
  )
}

export default RouterConfig



