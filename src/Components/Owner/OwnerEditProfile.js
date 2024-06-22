import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import Adminnavbar from "../admin/Adminnavbar";
import EditProfileHock from "../../hocksJs/auth_hocks/Edit_Profile_Hock";
import { ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ProfilePicChanger from "../admin/changephoto";
const OwnerEdit = () => {
  const [
    username,
    phoneNumber,
    Changeusername,
    ChangephoneNumber,
    email,
    changeEmail,
    save,
  ] = EditProfileHock();

  return (
    <div className="mt-4 ms-4 editprofi overviewtog">
      <Adminnavbar />
      <div className="mt-4">
        <h4>
          Edit profile
          <div></div>
        </h4>
        <Row>
          <Col xs="12" md="7">
            <form>
              <div className="mb-3">
                <label className="lable">Username</label>
                <input
                  className="input-group-text w-100 text-start bg-white"
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={Changeusername}
                />
              </div>
              <div className="mb-3">
                <label className="lable">Email</label>
                <input
                  className="input-group-text w-100 text-start bg-white"
                  type="Email"
                  placeholder="admin@gmail.com"
                  name="Email"
                  value={email}
                  onChange={changeEmail}
                />
              </div>
              <div className="mb-3">
                <label className="lable">Phone Number</label>
                <input
                  className="input-group-text w-100 text-start bg-white"
                  type="text"
                  placeholder="phonenumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={ChangephoneNumber}
                />
                <div
                  style={{
                    width: "220px",
                    height: "35px",
                    border: "ipx solid black",
                    borderRadius: "14px",
                    backgroundColor: "#7A4CFC",
                    marginTop: "30px",
                    color: "black",
                  }}
                >
                  <Link to="/admin/change-password" className="btn">
                    <FontAwesomeIcon icon={faLongArrowAltRight} /> ChHANGE
                    PASSWORD
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  style={{
                    border: "1px solid #FE983A",
                    backgroundColor: "#F6F6F6",
                    color: "#FE983A",
                    borderRadius: "10px",
                    height: "40px",
                  }}
                  className=" col-md-3"
                  onClick={save}
                >
                  Save
                </Button>
              </div>
            </form>
          </Col>
          <Col xs="12" md="5" className="pop">
            <div style={{ marginLeft: "70px" }}>
              <ProfilePicChanger />
            </div>
          </Col>
        </Row>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default OwnerEdit;
