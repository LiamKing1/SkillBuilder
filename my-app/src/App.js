import { Routes, Route } from "react-router-dom";
import React from "react";

import AllMeetups from "./pages/AllMeetups";
import FavoriteMeetups from "./pages/FavoriteMeetups";
import NewMeetups from "./pages/NewMeetups";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/"
        element={<AllMeetups />}
        >
        </Route>

        <Route exact path="/fav-meets"
        element={<FavoriteMeetups />}
        >
        </Route>

        <Route exact path="/new-meets"
        element={<NewMeetups />}
        >
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
