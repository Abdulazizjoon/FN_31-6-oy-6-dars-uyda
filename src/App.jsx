import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./components/home";
import Blogs from "./components/blogs";
import Details from "./components/details";
import Errorpage from "./components/errorpage";
import Main from "./layouts/main";
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
