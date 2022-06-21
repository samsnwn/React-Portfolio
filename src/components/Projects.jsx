import React from "react";
import { Link } from "react-router-dom";
import Wave from "../images/wave3.png";
import "../App.css";

export default function Projects() {
  return (
    <div>
      <section id="projects">
        <div className="wave">
          <img src={Wave} className="one" alt="Wave" />
        </div>

        <h2>My Projects</h2>

        <div className="project-cards first">
          <div className="text">
            <h3>Devjobs web app</h3>
            <p>A jobs board that pulls data from a local JSON file.</p>
            <Link
              to="https://www.frontendmentor.io/challenges/art-gallery-website-yVdrZlxyA"
              target="_blank"
            >
              VIEW PROJECT
            </Link>
          </div>

          <div className="img">
            <img
              src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/lowozx0v3khn1hyggkqy.jpg"
              alt="Art gallery website"
            />
          </div>
        </div>

        <div className="project-cards second">
          <div className="img">
            <img
              src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/ax9kvjgksws1lz8vrlim.jpg"
              alt="Audiophile e-commerce website"
            />
          </div>

          <div className="text">
            <h3>Audiophile e-commerce website</h3>
            <p>
              This huge e-commerce website provides an incredible test for
              front-end skills.
            </p>
            <Link
              to="https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx"
              target="_blank"
            >
              VIEW PROJECT
            </Link>
          </div>
        </div>

        <div className="project-cards third">
          <div className="text">
            <h3>Pod request access landing page</h3>
            <p>
              Early access landing page that includes custom form validation.
            </p>
            <Link
              to="https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG"
              target="_blank"
            >
              VIEW PROJECT
            </Link>
          </div>

          <div className="img">
            <img
              src="https://res.cloudinary.com/dz209s6jk/image/upload/q_auto:good,w_900/Challenges/a2ue7iqgzn2ammqfndig.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="wave">
          <img src={Wave} className="two" alt="Wave" />
        </div>
      </section>
    </div>
  );
}
