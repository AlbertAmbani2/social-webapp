// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { AppProvider } from './context/AppContext';
import { BrowserRouter as Router} from 'react-router-dom';  
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 

//Router ensures the URL matches the UI

ReactDOM.render(
   <AppProvider>
  <Router>
    <App />
  </Router>
    </AppProvider> ,
  document.getElementById('root')
);

// If you want to measure performance in your app, uncomment the following line.
// Learn more: https://bit.ly/CRA-vitals
