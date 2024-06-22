import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import image from "../images/photo_2024-03-21_21-37-11.jpg";
import imageTwo from "../images/Screenshot 2024-03-21 215400.jpg";

const ShowImages = ({ Images }) => {
  const ImageShow = Images[0];
  const [imageshow, setImageshow] = useState("");

  const ImageValue = (e) => {
    setImageshow(e.target.src);
  };

  // if (Images) {
  //   console.log(Images[0]);
  // }

  return (
    <Row>
      <Col sm="12" md="6">
        <div className="imageoneDetails">
          <img
            src={imageshow === "" ? ImageShow : imageshow}
            alt="Image Slide"
            className="imageSlide"
          ></img>
        </div>
      </Col>
      <Col sm="12" md="6" className="semiImage d-flex gap-2">
        {Images
          ? Images.map((item, index) => {
              return (
                <div className="imageShadow" key={index}>
                  <img
                    src={item}
                    alt="Image Slide"
                    className="imageSlide"
                    onClick={ImageValue}
                  ></img>
                  <div></div>
                </div>
              );
            })
          : null}
      </Col>
    </Row>
  );
};

export default ShowImages;
