import React from 'react';
import logo from './logo.svg';
import './App.css';

import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import {
  ApplicationInsights,
  ITelemetryItem,
} from '@microsoft/applicationinsights-web';
import { createBrowserHistory } from 'history';

function App() {
  const browserHistory = createBrowserHistory();

  const reactPlugin = new ReactPlugin();

  const appInsights = new ApplicationInsights({
    config: {
      connectionString: 'InstrumentationKey=example;IngestionEndpoint=example',
      extensions: [reactPlugin],
      enableAutoRouteTracking: true,
      extensionConfig: {
        [reactPlugin.identifier]: { history: browserHistory },
      },
    },
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
