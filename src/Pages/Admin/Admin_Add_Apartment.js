import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Adminsidebar from "../../Components/admin/Adminsidebar";
import AdminAddApartment from "../../Components/admin/AdminAddApartment";
import OwnerSideBar from "../../Components/Owner/OwnerSideBar";
const AdminAddApartmentPage = () => {
  return (
    <Container>
      <Row className="py-2">
        <Col xs="4" sm="4" md="3" className=" mt-4">
          <OwnerSideBar></OwnerSideBar>
        </Col>
        <Col xs="8" sm="8" md="9">
          <AdminAddApartment></AdminAddApartment>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddApartmentPage;
