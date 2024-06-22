import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Adminnavbar from "./Adminnavbar";
import EditPasswordHock from "../../hocksJs/auth_hocks/Edit_Password_Hock";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminPassword = () => {
  const [
    newPassword,
    confirmPassword,
    password,
    ChangeOldPassword,
    ChangeConfPass,
    ChangeNewPass,
    Cofirm,
    // Cancel,
  ] = EditPasswordHock();
  return (
    <div className=" mt-4 ms-4 editprofi overviewtog">
      <Adminnavbar></Adminnavbar>
      <h4 className="mt-5 mb-4">Change Password</h4>
      <Row>
        <Col xs="12" md="7">
          <div className="mb-3">
            <label className="lable">Old Password</label>
            <input
              className=" input-group-text w-100 text-start bg-white"
              type="password"
              value={password}
              onChange={ChangeOldPassword}
            ></input>
          </div>

          <div className="mb-3">
            <label className="lable">New Password</label>
            <input
              className=" input-group-text w-100 text-start bg-white"
              type="password"
              value={newPassword}
              onChange={ChangeNewPass}
            ></input>
          </div>

          <div className="mb-3">
            <label className="lable">Confirm New Password</label>
            <input
              className=" input-group-text w-100 text-start bg-white"
              type="password"
              value={confirmPassword}
              onChange={ChangeConfPass}
            ></input>
          </div>

          <div className="text-center">
            {/* <Button className="canclePassword me-2" onClick={Cancel}>
              Cancel
            </Button> */}
            <button
              className="savePassword col-md-2 p-2 w-25 rounded-3 fw-b text-light"
              onClick={Cofirm}
            >
              Save
            </button>
          </div>
        </Col>
      </Row>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AdminPassword;
