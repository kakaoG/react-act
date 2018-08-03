import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from '@/redux/store';
import getRouter from '@/router/index';

import '@/assets/lib/reset.less';

renderWithHotReload(getRouter());


if (module.hot) {
  module.hot.accept('./router/index', () => {
    const RootElement = require('./router/index').default;
    renderWithHotReload(RootElement());
  });
}

function renderWithHotReload(RootElement) {
  ReactDom.render(
    <AppContainer>
      <Provider store={store}>
        {RootElement}
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}