import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProviderStates } from './globalStates/GlobalStates';


ReactDOM.render(
  <React.StrictMode>
    <ProviderStates>

      <App />
    </ProviderStates>
  </React.StrictMode>,
  document.getElementById('root')
);


