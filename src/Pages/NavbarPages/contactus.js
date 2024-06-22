import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img from "../../Components/images/_con.jpeg";
import img1 from "../../Components/images/contmessage.png";
const ContactUs = () => {
  return (
    <Container>
      <Row className=" mt-4">
        <Col sm="12">
          <div className="parentContact">
            <img src={img}></img>
            <div className="background"></div>
            <div className="contactus-text ">
              <h4 className="titleCont">Better Call Home</h4>
              <p>
                If you need an expert advice over one of our property or a
                question of any kind about us consultants will contact you
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mt-5 mb-5">
        <h4 className="contactAdd">Contact Us</h4>
        <Col sm="12" md="4" style={{ height: "350px" }}>
          <input
            type="text"
            placeholder="Name"
            className="w-100 bg-body-secondary p-2 border-0 mb-2"
          ></input>
          <input
            type="phone"
            placeholder="Phone Number"
            className="w-100 bg-body-secondary p-2 border-0 mb-2"
          ></input>
          <input
            type="email"
            placeholder="E-mail"
            className="w-100 bg-body-secondary p-2 border-0 mb-2"
          ></input>
          <input
            type="text"
            placeholder="Interested In"
            className="w-100 bg-body-secondary
            p-2 border-0 mb-2"
          ></input>
          <textarea
            type="text"
            placeholder="Message"
            className="w-100 bg-body-secondary p-2 border-0 mb-2"
            style={{ height: "150px" }}
          ></textarea>
        </Col>
        <Col sm="12" md="8" style={{ height: "350px" }}>
          <img
            src={img1}
            className=""
            style={{ height: "100%", width: "100%" }}
          ></img>
        </Col>
      </Row>

      <button className="sendMessage">Send Message</button>
    </Container>
  );
};

export default ContactUs;
