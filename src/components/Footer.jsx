import React from "react";
import { Link } from "react-router-dom";
import Wave from '../images/wave3.png'
import "../App.css";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="wave">
          <img src={Wave} alt="Wave" />
        </div>

        <h3>
          Samuel C. Glantz, 2022. <i className="far fa-copyright"></i>
        </h3>
        <Link
          to="https://www.linkedin.com/in/samuel-c-glantz-463079230/"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </Link>
        <Link to="https://github.com/samsnwn" target="_blank">
          <i className="fab fa-github"></i>
        </Link>
        <Link to="https://twitter.com/?lang=en" target="_blank">
          <i className="fab fa-twitter"></i>
        </Link>
      </footer>
    </div>
  );
}
