import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg"; 
import Home from "./components/Home.jsx";
import Blogs from "./components/Blogs.jsx"; 
import Errorpage from "./components/Errorpage.jsx";
import Main from "./layouts/Main.jsx";
import Details from "./components/Details.jsx";

import { Routes, Route } from "react-router-dom";
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
