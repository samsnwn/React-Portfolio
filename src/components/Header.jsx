import React from "react";
import Wave from '../images/wave3.png'
import "../App.css";

export default function Header() {
  return (
    <div>
      <header className="bg-blur">
        <nav>
          <h2 className="text-gradient">Samuel C. Glantz</h2>
          <ul>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="wavy ">
          <div className="heading">
            <h1 className="text-gradient">CRAFTING THE DIGITAL WORLD</h1>
            <h3 className="text-glow ">Web Development and Design</h3>
          </div>
          <div className="wave">
            <img src={Wave} alt="Wave" />
          </div>
        </div>

        <div className="btn">
          <a href="#">Go to top</a>
        </div>
      </header>
    </div>
  );
}
