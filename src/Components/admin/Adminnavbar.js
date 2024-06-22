import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row } from "react-bootstrap";
import pic from "../../Components/images/Rectangle 32.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faCircleUser,
  faMessage,
} from "@fortawesome/free-regular-svg-icons";
const Adminnavbar = () => {
  return (
    <Row className=" justify-content-between p-3 rounded-3 bg-white">
      <Col
        className=" d-flex align-items-center gap-2  mb-2 mt-2"
        xs="12"
        sm="5"
      >
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        <input
          type="text"
          className=" input-group-text w-100 text-start"
          placeholder="Search Keywords, flats"
        ></input>
      </Col>
      <Col
        className="svgs d-flex align-items-center gap-2 justify-content-around mb-2 mt-2"
        xs="12"
        sm="4"
      >
        <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
        <FontAwesomeIcon icon={faCircleUser}></FontAwesomeIcon>
      </Col>
    </Row>
  );
};

export default Adminnavbar;
