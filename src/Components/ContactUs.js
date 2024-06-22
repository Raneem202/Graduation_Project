import React, { useState } from "react";
import "../App.css";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phonenum, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [interstedin, setInterstedin] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("PHone Number:", phonenum);
    console.log("Email:", email);
    console.log("InterstedIn:", interstedin);
    console.log("Message:", message);
    setName("");
    setNumber("");
    setEmail("");
    setInterstedin("");
    setMessage("");
  };

  return (
    <div>
      <div className="contactus">Contact Us</div>
      <div className="formimg">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              value={name}
              placeholder="    Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              className="input"
              type="number"
              value={phonenum}
              placeholder="    PHone Number"
              onChange={(e) => setNumber(e.target.value)}
            />
            <br />
            <input
              className="input"
              type="email"
              value={email}
              placeholder="    E-Mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              className="input"
              type="text"
              value={interstedin}
              placeholder="    Interseted In"
              onChange={(e) => setInterstedin(e.target.value)}
            />
            <br />
            <textarea
              className="textarea"
              value={message}
              placeholder="  Messege"
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <button className="sendmail" type="submit">
              <span className="sendword"> Send Email</span>
              <div className="arrowsection3">
                <div className="arrowabove3"></div>
                <div className="arrow3">
                  <div className="eleve3"></div>
                  <div className="arrowhead3"></div>
                </div>
              </div>
            </button>
          </form>
        </div>
        <div>
          <img className="contactimg" src="../Front/image 12.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
