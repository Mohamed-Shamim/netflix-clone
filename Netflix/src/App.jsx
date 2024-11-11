import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";

const App = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/player/:id" element={<Player />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
