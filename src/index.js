import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/Nav/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

//new root with react 18.
const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement)

root.render(
  <BrowserRouter>
    <NavBar/>
    <App/>
  </BrowserRouter>
  )


// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
