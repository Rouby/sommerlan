import 'antd/dist/antd.css';
import LogRocket from 'logrocket';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { JssProvider } from 'react-jss';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { App } from './App';
import { PushNotifications } from './PushNotifications';

if (process.env.REACT_APP_LOGROCKET_ID) {
  LogRocket.init(process.env.REACT_APP_LOGROCKET_ID);
}

ReactDOM.render(
  <RecoilRoot>
    <PushNotifications />
    <JssProvider id={{ minify: process.env.NODE_ENV === 'production' }}>
      <Router>
        <App />
      </Router>
    </JssProvider>
  </RecoilRoot>,
  document.getElementById('root'),
);

// serviceWorker.unregister();
window.addEventListener('load', () => {
  navigator.serviceWorker.register('sw-push.js');
});

// navigator.serviceWorker.getRegistrations().then(function (registrations) {
//   console.log(registrations);
//   for (let registration of registrations) {
//     registration.unregister().then(console.log);
//   }
// });
