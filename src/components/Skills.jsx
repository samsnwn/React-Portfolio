import React from 'react'
import "../App.css";

export default function Skills() {
  return (
    <div>
        <section id="skills">
          <h2>Skills & Services</h2>

          <div className="cards-container">
            <div className="card card-design">
              <div className="front">
                <i className="far fa-object-group"></i>
                <h4>UI/UX</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nihil voluptatibus, deserunt perferendis sunt esse deleniti?
                </p>
              </div>

              <div className="back">
                <div className="figma">
                  <i className="fab fa-figma"></i>
                  <p>Figma</p>
                </div>

                <div className="adobe">
                  <i className="fas fa-atom"></i>
                  <p>Adobe</p>
                </div>

                <div className="ilustrator">
                  <i className="fas fa-bezier-curve"></i>
                  <p>Illustrator</p>
                </div>
              </div>
            </div>
            <div className="card card-code">
              <div className="front">
                <i className="fas fa-code"></i>
                <h4>Front-End Development</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nihil voluptatibus, deserunt perferendis sunt esse deleniti?
                </p>
              </div>

              <div className="back">
                <div className="sass">
                  <i className="fab fa-sass"></i>
                  <p>SASS</p>
                </div>

                <div className="js">
                  <i className="fab fa-js-square"></i>
                  <p>JavaScript</p>
                </div>

                <div className="react">
                  <i className="fab fa-react"></i>
                  <p>React</p>
                </div>
              </div>
            </div>

            <div className="card card-database">
              <div className="front">
                <i className="fas fa-database"></i>
                <h4>Back-End Development</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nihil voluptatibus, deserunt perferendis sunt esse deleniti?
                </p>
              </div>

              <div className="back">
                <div className="node">
                  <i className="fab fa-node"></i>
                  <p>NodeJS</p>
                </div>

                <div className="MySQL">
                  <i className="fab fa-usps"></i>
                  <p>SQL</p>
                </div>

                <div className="MongoDB">
                  <i className="fab fa-uncharted"></i>
                  <p>MongoDB</p>
                </div>
              </div>
            </div>

            <div className="card card-cloud">
              <div className="front">
                <i className="fab fa-cloudversify"></i>
                <h4>Cloud Services</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nihil voluptatibus, deserunt perferendis sunt esse deleniti?
                </p>
              </div>

              <div className="back">
                <div className="aws">
                  <i className="fab fa-aws"></i>
                  <p>AWS</p>
                </div>

                <div className="azure">
                  <i className="fas fa-file-signature"></i>
                  <p>Azure</p>
                </div>

                <div className="cloud">
                  <i className="fas fa-cloud-download-alt"></i>
                  <p>Other</p>
                </div>
              </div>
            </div>

            <div className="card card-deploy">
              <div className="front">
                <i className="fas fa-cogs"></i>
                <h4>Deployment & Maintenance</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nihil voluptatibus, deserunt perferendis sunt esse deleniti?
                </p>
              </div>

              <div className="back">
                <div>
                  <i className="fab fa-deploydog"></i>
                  <p>AnyDesk</p>
                </div>
                <div>
                  <i className="fab fa-ioxhost"></i>
                  <p>Acronis</p>
                </div>
                <div>
                  <i className="fas fa-fire-alt"></i>
                  <p>Arcitura</p>
                </div>
              </div>
            </div>

            <div className="card card-systems">
              <div className="front">
                <i className="fab fa-ubuntu"></i>
                <h4>Systems Administration</h4>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nihil voluptatibus, deserunt perferendis sunt esse deleniti?
                </p>
              </div>

              <div className="back">
                <div>
                  <i className="fab fa-windows"></i>
                  <p>Windows</p>
                </div>
                <div>
                  <i className="fab fa-apple"></i>
                  <p>MacOs</p>
                </div>
                <div>
                  <i className="fab fa-linux"></i>
                  <p>Linux</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
