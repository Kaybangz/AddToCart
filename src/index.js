import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <Router>
      <ToastContainer/>
      <App />
    </Router>,
  document.getElementById("root")
);
