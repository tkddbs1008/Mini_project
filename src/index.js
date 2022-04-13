import React from 'react';
import './index.css';
import App from './shared/App'
import reportWebVitals from './reportWebVitals';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import store from "./redux/configureStore"
import CustomRouter from './pages/CustomRouter';
import { createBrowserHistory } from "history";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const history = createBrowserHistory();


root.render(
  <Provider store={store}>
    <CustomRouter history={history}>
     <App />
    </CustomRouter>
  </Provider>
  ,
);

export default history;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
