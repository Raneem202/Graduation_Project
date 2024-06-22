import React, { useState } from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  Navbar,
} from "react-bootstrap";
import ImageNav from "../images/Rectangle 32.png";
import userLogin from "../images/user login.png";
const dataUser = JSON.parse(localStorage.getItem("data-user")) || {};
const userId = dataUser.userId;
const NavbarComponent = () => {
  const userInformation = JSON.parse(localStorage.getItem("data-user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("data-user");
  };

  const [img, setImage] = useState(
    localStorage.getItem(`profilePic_${userId}`) || userLogin
  );

  let roleState = "";
  if (localStorage.getItem("data-user") != null) {
    roleState = JSON.parse(localStorage.getItem("data-user")).role;
  }

  console.log(roleState);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img src={ImageNav} alt="Logo"></img>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 gap-5 listsss" navbarScroll>
            <div className="d-flex w-100 justify-content-center gap-5">
              <Nav.Link href="#home">MAIN</Nav.Link>
              {/* <Nav.Link href="#features">BUY</Nav.Link> */}
              {/* <Nav.Link href="#pricing">SELL</Nav.Link> */}
              {/* <Nav.Link href="#pricing">RENT</Nav.Link> */}
              <Nav.Link href="/user/about">ABOUT US</Nav.Link>
              <Nav.Link href="/contactus">CONTACT US</Nav.Link>
            </div>
            {userInformation ? (
              <div className=" d-flex  align-items-center ">
                <img
                  src={img}
                  alt="user-login"
                  style={{
                    width: "30px ",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                ></img>
                <DropdownButton
                  id="dropdown-basic-button"
                  title={userInformation.userName}
                  className="m-auto ghg"
                >
                  {roleState === "Admin" ? (
                    <Dropdown.Item
                      href="/admin/dashboard"
                      className="text-dark"
                    >
                      Dashboard
                    </Dropdown.Item>
                  ) : roleState === "Owner" ? (
                    <Dropdown.Item
                      href="/owner/dashboard"
                      className="text-dark"
                    >
                      Dashboard
                    </Dropdown.Item>
                  ) : (
                    <div>
                      <Dropdown.Item
                        href="/user/notification"
                        className="text-dark"
                      >
                        Notification
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        href="/user/editprofile"
                        className="text-dark"
                      >
                        Edit profile
                      </Dropdown.Item>
                    </div>
                  )}
                  <Dropdown.Divider />
                  <Dropdown.Item
                    href="/"
                    className="text-dark"
                    onClick={logout}
                  >
                    LOGOUT
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            ) : (
              <Nav.Link href="/login" className="w-25  signin">
                SIGN IN
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
