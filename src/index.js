import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';

import { Provider } from 'react-redux';
import {store} from './redux/store';

import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <Suspense fallback={(<div>Loading</div>)}>
      <I18nextProvider i18n={i18n}> 
    <App />
    </I18nextProvider>
    </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
