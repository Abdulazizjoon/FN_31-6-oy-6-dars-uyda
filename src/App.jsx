import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Errorpage from "./components/Errorpage";
import Main from "./layouts/Main";
import Details from "./components/Details";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <Home />
            </Main>
          }
        />
        <Route
          path="/blogs"
          element={
            <Main>
              <Blogs />
            </Main>
          }
        />
        <Route
          path="/details/:id"
          element={
            <Main>
              <Details />
            </Main>
          }
        />
        <Route
          path="*"
          element={
            <Main>
              <Errorpage />
            </Main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
