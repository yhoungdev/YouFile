import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react';

ReactDOM.render(

  <React.StrictMode>
    
      <Auth0Provider
      domain="dev-t796fd3h.us.auth0.com"
      clientId="8cPbx9NlC18sg0h6jDcSlTMH5D9QyCg2"
      redirectUri={window.location.origin}
      >
    <App />

    </Auth0Provider>
    
  </React.StrictMode>
 ,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
reportWebVitals();
