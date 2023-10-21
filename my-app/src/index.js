import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoriteContextProvider } from "./store/Favorite-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FavoriteContextProvider>
    <Router>
      <App />
    </Router>
  </FavoriteContextProvider>
);
