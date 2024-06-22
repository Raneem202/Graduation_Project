import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Adminsidebar from "../../Components/admin/Adminsidebar";
import Adminuser from "../../Components/admin/Adminuser";

const AdminUser = () => {
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
          <Adminsidebar toggle={toggle}></Adminsidebar>
        </Col>
        <Col xs="8" sm="8" md="9" className="overviewtog">
          <Adminuser></Adminuser>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminUser;
