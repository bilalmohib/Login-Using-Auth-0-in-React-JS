import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-x555ck33.au.auth0.com';
const clientId = '29UrUUee4PHK6H21Dhte69OOlLIpZb4u';

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={`http://localhost:3000/`}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);