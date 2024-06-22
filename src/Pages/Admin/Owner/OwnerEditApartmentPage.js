import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OwnerSideBar from "../../../Components/Owner/OwnerSideBar";
import OwnerOverview from "../../../Components/Owner/OwnerOverView";
import OwnerUpdateApartment from "../../../Components/Owner/OwnerUpdateApartment";
const OwnerEditApartmentPage = () => {
  const [presstoggle, setPresstoggle] = useState(false);

  const toggle = () => {
    setPresstoggle(!presstoggle);
  };
  return (
    <Container>
      <Row className="py-2 mb-5">
        <Col
          xs="4"
          sm="4"
          md="3"
          className={presstoggle === true ? "activeSide" : "mt-4 listtoggle"}
        >
          <OwnerSideBar toggle={toggle}></OwnerSideBar>
        </Col>
        <Col xs="8" sm="8" md="9" className="overviewtog">
          <OwnerUpdateApartment></OwnerUpdateApartment>
        </Col>
      </Row>
    </Container>
  );
};

export default OwnerEditApartmentPage;
