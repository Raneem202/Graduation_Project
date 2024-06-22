import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import UserShowFlat from "./getflattolandingpage";
import img1 from "../Components/images/contmessage.png";
import imga from "../Components/images/pic.jpeg";
import img from "./images/io.jpeg";
import { Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Container style={{ padding: "0" }}>
        <Row className="mt-0 mb-0" style={{ margin: "0" }}>
          <Col sm="0" md="2" className="m-0 mt-5">
            <div className="mainSection pt-5 offset-md- " >
              <div className="mainSection">
                <div className="firstsection col-md-11 mt-5">
                  <div
                    className="firstsectionword offset-md-2 mt-5"
                    style={{ margin: "auto", height: "500px" }}
                  >
                    <div className="mainHead mt-5">Better Call</div>
                    <div className="mainHeadContain">Home</div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm="2" md="7">
            <img
              className="offset-md-5
"
              style={{ height: "100%", width: "100%" }}
              src={img}
              alt="img1"
            />
          </Col>
        </Row>

        {/* ////////////////////////////////////////////////////////////////////////// */}
        <Row className="mt-5 mb-4" style={{ backgroundColor: "#D8D1D142" }}>
          <Col>
            <img
              className="aboutimg offset-md-6"
              src="./Front/Rectangle 9.png"
              alt="img2"
            />
          </Col>
          <Col>
            <div className="about offset-md-">About</div>
            <div className="aboutword col-md-7">
              Better Call home is a real estate agency that helps you find homes
              easily with your specific characteristics and requirements, also
              it helps you sell your home it helps you find the proper buyer, it
              helps you buy or rent your dream home with the outstanding help of
              our team as it’s the most professional in the business.
            </div>

            <div className="viewMoreSection3 mb-4 ">
              <div className="wordsection mt-2">
                <div className="word offset-md- ">
                  <a href="/user/about" className="makeblack offset-md-">
                    {" "}
                    Read more{" "}
                    <FontAwesomeIcon
                      className="arrowicon mt-3   offset-md-"
                      icon={faLongArrowAltRight}
                    />{" "}
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* ////////////////////////////////////////////////////////////////// */}
        <Row className="mt-5 mb-">
          <div className="sectiontherd col-md-12"></div>
          <div className="titleofsec3 ">Main Focus/Mission Statement</div>
          <Col sm="12" md="6" className="mt-5">
            <div className="col-12 col-md-8 d-flex align-items-center justify-content-center text-center ">
              <div className="number-container">
                <div className="num1">1</div>
              </div>
              <div className="text-container">
                Sell Smarter with Better Call Home, Sell your home smarter with
                more data and insight with our free home value report.
              </div>
            </div>
          </Col>
          <Col sm="12" md="6" className="mt-5" style={{ height: "350px" }}>
            <div className="col-12 col-md-8 d-flex align-items-center justify-content-center text-center numb">
              <div className="number-container">
                <div className="num1">2</div>
              </div>
              <div className="text-container">
                Comparable Sales, See what other homes are being sold/rented for
                in and around your neighborhood as it helps you find the perfect
                price.{" "}
              </div>
            </div>
          </Col>
        </Row>
        {/* //////////////////////////////////////////////////////////*/}
        <Row>
          <UserShowFlat />
        </Row>
        {/* ///////////////////////////////////////////////////////// */}
        <div style={{ marginTop: "100px" }}>
          <Row className="mt-5 mb-5">
            <h4 className="contactus">Contact Us</h4>
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
        </div>
        {/*  */}
      </Container>
    </div>
  );
};

export default HomePage;
