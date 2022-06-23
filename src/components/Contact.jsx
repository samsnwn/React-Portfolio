import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ConfirmMessage from "./ConfirmMessage";

export default function Contact(props) {
  const [userInputName, setUserInputName] = useState("");
  const [userInputSubject, setUserInputSubject] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      userInputName.trim().length === 0 ||
      userInputSubject.trim().length === 0 
    ) {
      return;
    }

    props.onShowMessage(userInputName, userInputSubject);
    
    setShowMessage(true);
  };

  const nameChangeHandler = (e) => {
    setUserInputName(e.target.value);
  };

  const subjectChangeHandler = (e) => {
    setUserInputSubject(e.target.value);
  };

  return (
    <div>
      <section id="contact">
        <h2 style={{ display: showMessage ? "none" : "block" }}>Contact Me</h2>
        {showMessage ? (
          <ConfirmMessage userInputData={props.userData} showMessage={setShowMessage} />
        ) : (
          <div className="contact-container">
            {" "}
            <form
              action=""
              id="contactForm"
              name="contactForm"
              onSubmit={submitHandler}
            >
              <div className="form">
                <div className="input-container">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={userInputName}
                    onChange={nameChangeHandler}
                  />
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
                    value={userInputSubject}
                    onChange={subjectChangeHandler}
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

                <div className="form-group btn-gradients">
                  <input type="submit" value="Send Message" className="btn-gradient"/>
                  <div className="submitting btn-gradient"></div>
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
        )}
      </section>
    </div>
  );
}
