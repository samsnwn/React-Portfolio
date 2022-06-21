import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Contact() {
  return (
    <div>
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
                  <span className="fa fa-paper-plane"></span> Send me an E-mail
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
    </div>
  );
}
