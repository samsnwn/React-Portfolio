import "./App.css";
import Wave from "./images/wave3.png";
import "./index.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
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

      <main>
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

        <section id="contact">
          <h2>Contact Me</h2>

          <div className="contact-container">
            <form
              action=""
              id="contactForm"
              name="contactForm"
              novalidate="novalidate"
            >
              <div className="form">
                <div className="input-container">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>

                <div className="input-container">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>

                <div className="input-container">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                  />
                </div>

                <div className="input-container">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="form-group">
                  <input type="submit" value="Send Message" />
                  <div className="submitting"></div>
                </div>
              </div>
            </form>

            <div className="contact-info">
              <div className="address">
                <div>
                  <span className="fa fa-map-marker"></span>
                  <span>Address:</span> C/ Somosierra, 18. 28224 Madrid, Spain
                </div>
              </div>

              <div className="phone">
                <div>
                  <span className="fa fa-phone"></span>
                  <span>Phone:</span>{" "}
                  <Link to="tel://1234567920">+ 1235 2355 98</Link>
                </div>
              </div>

              <div className="email">
                <div className="show">
                  <Link to="mailto: samuel.c.glantz@gmail.com">
                    <span className="fa fa-paper-plane"></span> Send me an
                    E-mail
                  </Link>
                </div>

                <div className="hide">
                  <p>
                    <span className="fa fa-paper-plane"></span>
                    <span> Email:</span>
                    <Link to="mailto: samuel.c.glantz@gmail.com">
                      {" "}
                      samuel.c.glantz@gmail.com
                    </Link>
                  </p>
                </div>
              </div>

              <div className="web">
                <div className="show">
                  <Link to="#">
                    <span className="fa fa-globe"></span> Visit my Website
                  </Link>
                </div>

                <div className="hide">
                  <p>
                    <span className="fa fa-globe"></span>
                    <span> Website:</span>{" "}
                    <Link to="#">www.samuelcglantz.com</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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

export default App;
