import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'styles/theme.scss';
import App from './containers/App';

const MOUNT_NODE = document.getElementById('app');

const render = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    MOUNT_NODE
  );
};

render();
