import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from './context/Context';
import { SpeechProvider } from '@speechly/react-client'

ReactDOM.render(
  <SpeechProvider appId='9771b7ab-228d-427a-9605-05f3815689b4' language='en-US'>
    <Provider>
        <App /> 
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

reportWebVitals();
