import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link to="/home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/register" className="nav-link">Register</Link>
          </li>
          <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
          </li>
          <li className="nav-item">
          <Link to="/biodata" className="nav-link">Biodata</Link>
          </li>
          <li className="nav-item">
          <Link to="/gallery" className="nav-link">Gallery</Link>
          </li>
          </ul>
          </div>
          </div>
          </nav>
    )
}
