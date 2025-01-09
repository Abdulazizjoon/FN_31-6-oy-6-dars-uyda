import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Home() {
  return (
    <div>
      <Link to="/blogs" className="link">
        Blogs
      </Link>
    </div>
  );
}

export default Home;
