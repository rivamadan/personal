import React from 'react'
import { Link } from 'gatsby'
import './index.css'
import "normalize.css"

export default function Home() {
  return (
    <>
      <div className="cover-image"></div>
      <Link to="/resume">Go To Resume</Link>
    </>
  );
}
