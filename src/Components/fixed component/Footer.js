import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "../images/Group11.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Row
      style={{ background: "#2C2C2C", width: "100%" }}
      className="p-5 m-auto"
    >
      <Container className=" d-flex flex-wrap">
        <Col xs="12" sm="6" md="4" lg="3" className="p-0 mb-4">
          <img src={logo} alt="logo"></img>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="p-0 text-light mb-4">
          <h5 className="header-footer ">information</h5>
          <div>
            <p className="parent-footer">Main</p>
            <p className="parent-footer">Buy</p>
            <p className="parent-footer">Sell</p>
            <p className="parent-footer">Rent</p>
            <p className="parent-footer">Contacts</p>
          </div>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="p-0 text-light mb-4">
          <h5 className="header-footer">Contacts</h5>
          <div>
            <p className="parent-footer">
              <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> New
              Damietta, Egypt
            </p>
            <p className="parent-footer">
              <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> 01025416517
            </p>
            <p className="parent-footer">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{" "}
              stayuonline@gmail.com
            </p>
          </div>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" className="p-0 text-light mb-4">
          <h5 className="header-footer">Social Media</h5>
          <div className=" d-flex gap-4">
            <a href="">
              <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
            </a>
            <a href="">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
            <a href="">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a href="">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
          </div>
        </Col>
      </Container>
    </Row>
  );
};

export default Footer;
