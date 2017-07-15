import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'mobx-react';
import classStore from './stores/classStore';
import { useStrict } from 'mobx';
useStrict(true);
ReactDOM.render(
  <Provider classStore={classStore}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
