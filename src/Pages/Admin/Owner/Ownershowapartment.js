import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Adminsidebar from "../../../Components/Owner/OwnerSideBar";
import OwnerAddApartment from "../../../Components/Owner/OwnerShowApartment";
import OwnerSideBar from "../../../Components/Owner/OwnerSideBar";

const GetAppartmentsOwner = () => {
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
          <OwnerAddApartment></OwnerAddApartment>
        </Col>
      </Row>
    </Container>
  );
};

export default GetAppartmentsOwner;
