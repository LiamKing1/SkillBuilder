import { Routes, Route } from "react-router-dom";
import React from "react";

import AllMeetups from "./pages/AllMeetups";
import FavoriteMeetups from "./pages/FavoriteMeetups";
import NewMeetups from "./pages/NewMeetups";
import MainNavigate from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigate />
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
    </div>
  );
}

export default App;
