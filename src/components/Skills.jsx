import React from "react";
import "../App.css";
import { FiFigma } from "react-icons/fi";

export default function Skills() {
  return (
    <div>
      <section id="skills">
        <h2>Skills & Services</h2>

        <div className="cards-container">
          <div className="card card-design bg-blur1">
            <div className="front">
              <h1>UI/UX</h1>
            </div>

            <div className="back">
              <div className="figma">
                <h1>Figma</h1>
              </div>

              <div className="adobe">
                <h1>Adobe</h1>
              </div>

              <div className="ilustrator">
                <h1>Illustrator</h1>
              </div>
            </div>
          </div>
          <div className="card card-code  bg-blur2">
            <div className="front">
              <h1>Front-End Development</h1>
            </div>

            <div className="back">
              <div className="sass">
                <h1>SASS</h1>
              </div>

              <div className="js">
                <h1>JavaScript</h1>
              </div>

              <div className="react">
                <h1>React</h1>
              </div>
            </div>
          </div>

          <div className="card card-database  bg-blur3">
            <div className="front">
              <h1>Back-End Development</h1>
            </div>

            <div className="back">
              <div className="node">
                <h1>NodeJS</h1>
              </div>

              <div className="MySQL">
                <h1>SQL</h1>
              </div>

              <div className="MongoDB">
                <h1>MongoDB</h1>
              </div>
            </div>
          </div>

          <div className="card card-cloud  bg-blur4">
            <div className="front">
              <h1>Cloud Services</h1>
            </div>

            <div className="back">
              <div className="aws">
                <h1>AWS</h1>
              </div>

              <div className="azure">
                <h1>Azure</h1>
              </div>

              <div className="cloud">
                <h1>Other</h1>
              </div>
            </div>
          </div>

          <div className="card card-deploy  bg-blur5">
            <div className="front">
              <h1>Deployment & Maintenance</h1>
            </div>

            <div className="back">
              <div>
                <h1>AnyDesk</h1>
              </div>
              <div>
                <h1>Acronis</h1>
              </div>
              <div>
                <h1>Arcitura</h1>
              </div>
            </div>
          </div>

          <div className="card card-systems  bg-blur6">
            <div className="front">
              <h1>Systems Administration</h1>
            </div>

            <div className="back">
              <div>
                <h1>Windows</h1>
              </div>
              <div>
                <h1>MacOs</h1>
              </div>
              <div>
                <h1>Linux</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
