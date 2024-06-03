import React from "react";
import ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./Layout/Layout";
import { store } from "./redux/app/store";
import './index.css';

const app = document.getElementById("root");
const root = ReactDOMClient.createRoot(app);



root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </Provider>
);
