import React from "react";
import { Link } from "react-router-dom";
import Wave from "../images/wave3.png";
import "../App.css";
import { ImLinkedin2, ImGithub, ImTwitter } from "react-icons/im";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
      <footer className="bg-blur">
        <div className="wave">
          <img src={Wave} alt="Wave" />
        </div>

        <h3>
          Samuel C. Glantz, 2022. <FaRegCopyright />
        </h3>
        <Link
          to="https://www.linkedin.com/in/samuel-c-glantz-463079230/"
          target="_blank"
        >
          <ImLinkedin2 />
        </Link>
        <Link to="https://github.com/samsnwn" target="_blank">
          <ImGithub />
        </Link>
        <Link to="https://twitter.com/?lang=en" target="_blank">
          <ImTwitter />
        </Link>
      </footer>
    </div>
  );
}
