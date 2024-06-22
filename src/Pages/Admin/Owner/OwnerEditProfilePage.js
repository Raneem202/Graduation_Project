import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OwnerSideBar from "../../../Components/Owner/OwnerSideBar";
import OwnerEdit from "../../../Components/Owner/OwnerEditProfile";
const OwnerEditProfilePage = () => {
  const [presstoggle, setPresstoggle] = useState(false);
  console.log(presstoggle);

  const toggle = () => {
    setPresstoggle(!presstoggle);
  };
  return (
    <Container>
      <Row className="py-2">
        <Col
          xs="4"
          sm="4"
          md="3"
          className={presstoggle === true ? "activeSide" : "mt-4 listtoggle"}
        >
          <OwnerSideBar toggle={toggle}></OwnerSideBar>
        </Col>
        <Col xs="8" sm="8" md="9" className="overviewtog">
          <OwnerEdit></OwnerEdit>
        </Col>
      </Row>
    </Container>
  );
};

export default OwnerEditProfilePage;
