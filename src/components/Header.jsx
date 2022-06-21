import React from "react";
import { Link } from "react-router-dom";
import Wave from '../images/wave3.png'
import "../App.css";

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <h2>Samuel C. Glantz</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="wavy">
          <div className="heading">
            <h1>CRAFTING THE DIGITAL WORLD</h1>
            <h3>Web Development and Design</h3>
            <button className="button">Know More!</button>
          </div>
          <div className="wave">
            <img src={Wave} alt="Wave" />
          </div>
        </div>

        <div className="btn">
          <Link to="/">Go to top</Link>
        </div>
      </header>
    </div>
  );
}
