import React from 'react'
import Blogs from './blogs';
import { Link } from "react-router-dom";
import './index.css'

function Home() {
  return (
    <div>
      <Link to="/Blogs" className="link">
        Blogs
      </Link>
    </div>
  );
}

export default Home