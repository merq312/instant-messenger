import React from 'react'
import ReactDOM from 'react-dom'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './App'
import { store } from './features/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-iukg50h5.us.auth0.com"
      clientId="JNiZqluYFD7grpEiAMRczMQRSIFG2yqk"
      audience="https://pacific-reef-85991.herokuapp.com/api"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
