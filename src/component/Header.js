import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  let headerStyle = {
    backgroundColor:"rgb(239, 243, 7)"
  }
    return (
        <nav className="navbar navbar-expand-lg  " style = {headerStyle}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Collection of Small projects</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">COVID-19 Dasboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/githubusers">GithubUsers</Link>
              </li>
            
            </ul>
            
          </div>
        </div>
      </nav>
    )
}
