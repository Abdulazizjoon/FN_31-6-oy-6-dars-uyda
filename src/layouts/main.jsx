import React from "react";
import './index.css'

function main({ children }) {
  return (
    <div>
      <header className="header">
        <div className="header-container container">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <div className="right">
            <h2>Home</h2>
            <h2>Blogs</h2>
            <h2>Details</h2>
          </div>
        </div>
      </header>
      {children}
      <footer className="footer">
        <div className="footer-container container">
          <div className="footer-flex">
            <h3>Home</h3>
            <h3>Blogs</h3>
            <h3>Details</h3>
          </div>
          <div className="tiziq"></div>
          <div className="copright">{new Date().getFullYear()} Abdulaziz</div>
        </div>
      </footer>
    </div>
  );
}

export default main;
