import React from "react";
import "../../App.css";
import img from "../../Components/images/photo_2024-06-21_23-37-50.jpg";
import img1 from "../../Components/images/1996f6471638ae7cc917110f05470551.png";
import img2 from "../../Components/images/80cbe4fdb55341eafcc8f6768afe17f5.jpeg";
import img3 from "../../Components/images/87464cd1ca92726082bffab4236cc106.jpeg";
import img4 from "../../Components/images/photo_2024-04-20_04-17-42.jpg";
import img5 from "../../Components/images/photo_2024-04-20_04-28-14.jpg";
import img6 from "../../Components/images/photo_2024-04-20_04-32-08.jpg";
import img0 from "../../Components/images/pic.jpeg";
import { Container, Row, Col } from "react-bootstrap";
const AboutPage = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <Container>
        <div>
          <Row style={{ margin: "0" }}>
            <Row className="mt-0 mb-4">
              <Col sm="12" md="3" className="m-0 mt-5">
                <div className="firstsection col-md-11 mt-5">
                    <div  className="firstsectionword offset-md-2 mt-5"style={{ margin: "auto" }}>
                      <div className="mainHead mt-5">Better Call</div>
                      <div className="mainHeadContain">Home</div>
                    </div>
                  </div>
              </Col>
              <Col sm="12" md="7">
                <div className="camp">
                  <div className="containerr">
                    <img className="md-5 offset-md-4" src={img0} alt="img1" />
                    <div className="text-overlay offset-md-3">
                      <h1 className="text-center ll ">About Us</h1>
                      <p className="opp">
                        Better Call home is a real estate agency that helps you
                        find homes easily with your specific characteristics nd
                        requirements, Better Call Home helps you find estates
                        either for buying, selling and renting
                      </p>
                      <button className="soo">See More</button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            {/*/////////////////////////////////////////////////////////////*/}
            <Row
              className="mt-5 mb-0 "
              style={{ backgroundColor: "#D8D1D142" }}
            >
              <Col sm="12" md="5">
                <div className="logo offset-md-4">
                  <img src={img1} alt="Logo" />
                </div>
              </Col>
              <Col sm="12" md="6">
                <div className="content3 offset-md-3">
                  <h1>Better Call Home</h1>
                  <p style={{ marginTop: "25px", color: "#848383" }}>
                    It started out as a graduation project in our senior year{" "}
                    <br /> studying in New Damietta Faculty of Computers and{" "}
                    <br />
                    Artificial Intelligence. Everything starts with a dream{" "}
                    <br /> and this is ours at the moment.
                  </p>
                </div>
                {/* </div> */}
              </Col>
            </Row>
            {/* ///////////////////////////////////////////////////////////// */}
            <Row className="mb-5 offset-md-1">
              <Col sm="12" md="2" className="mb-5 offset-md-4">
                <div className="cuis">
                  <h1
                    style={{
                      marginBottom: "30px",
                      fontFamily: "Source Serif Pro",
                    }}
                  >
                    Founders
                  </h1>
                </div>
              </Col>
              <Row>
                <Col sm="12" md="4">
                  <img
                    style={{
                      width: "246px",
                      height: "299px",
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                    src={img}
                    alt="Image1"
                  />
                  <div
                    style={{
                      width: "250px",
                      height: "65px",
                      backgroundColor: "#F6F6F6",
                      textAlign: "center",
                      marginTop: "50px",
                    }}>
                    
                    <h5>Ahmed Samy</h5>
                    <p>Backend Developer</p>
                  </div>
                </Col>
                <Col sm="12" md="4">
                  <img
                    style={{
                      width:"240px",
                      height:"299px",
                      boxShadow:"0px 4px 4px 0px #00000040",
                    }}
                    src={img2}
                    alt="Image1"
                  />
                  <div
                    style={{
                      width: "250px",
                      height: "65px",
                      backgroundColor: "#F6F6F6",
                      textAlign: "center",
                      marginTop: "50px",
                    }}
                  >
                    <h5>Ramez Mousa</h5>
                    <p>UI/UX developer</p>
                  </div>
                </Col>
                <Col sm="12" md="3">
                  <img
                    style={{
                      width: "246px",
                      height: "299px",
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                    src={img3}
                    alt="Image1"
                  />
                  <div
                    style={{
                      width: "250px",
                      height: "65px",
                      backgroundColor: "#F6F6F6",
                      textAlign: "center",
                      marginTop: "50px",
                    }}
                  >
                    <h5>Mohamed Zidan</h5>
                    <p>Frontend Developer</p>
                  </div>
                </Col>
              </Row>
              <Row sm="12" md="12" className="mt-5">
                <Col sm="12" md="4">
                  <img
                    style={{
                      width: "246px",
                      height: "299px",
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                    src={img4}
                    alt="Image1"
                  />
                  <div
                    style={{
                      width: "250px",
                      height: "65px",
                      backgroundColor: "#F6F6F6",
                      textAlign: "center",
                      marginTop: "50px",
                    }}
                  >
                    <h5>Raneem Magdy</h5>
                    <p>Frontend Developer</p>
                  </div>
                </Col>
                <Col sm="12" md="4">
                  <img
                    style={{
                      width: "246px",
                      height: "299px",
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                    src={img5}
                    alt="Image1"
                  />
                  <div
                    style={{
                      width: "250px",
                      height: "65px",
                      backgroundColor: "#F6F6F6",
                      textAlign: "center",
                      marginTop: "50px",
                    }}
                  >
                    <h5>Sama Osama</h5>
                    <p>Frontend Developer</p>
                  </div>
                </Col>
                <Col sm="12" md="3">
                  <img
                    style={{
                      width: "246px",
                      height: "299px",
                      boxShadow: "0px 4px 4px 0px #00000040",
                    }}
                    src={img6}
                    alt="Image1"
                  />
                  <div
                    style={{
                      width: "250px",
                      height: "65px",
                      backgroundColor: "#F6F6F6",
                      textAlign: "center",
                      marginTop: "50px",
                    }}
                  >
                    <h5>Mai Amer</h5>
                    <p>System Analysis</p>
                  </div>
                </Col>
              </Row>
            </Row>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default AboutPage;
