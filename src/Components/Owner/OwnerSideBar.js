import React, { useState } from "react";
import "../../style.css";
import { Link } from "react-router-dom";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
const OwnerSideBar = ({ toggle }) => {
  return (
    <Row className="p-2 bg-white rounded-3" style={{ position: "relative" }}>
      <div className="listdashboard" onClick={toggle}>
        {" "}
        <FontAwesomeIcon
          icon={faListUl}
          style={{ height: "30px" }}
        ></FontAwesomeIcon>{" "}
      </div>

      <p className="profile-menu my-4">MENU</p>
      <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#7A4CFC" }}
        ></div>
        <Link to="/owner/dashboard" className="profile-list">
          <div>dashboard</div>
        </Link>
      </div>

      <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#FF5A5A" }}
        ></div>
        <Link to="/owner/notification" className="profile-list">
          <div>Notification</div>
        </Link>
      </div>

      <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#82DD7A" }}
        ></div>
        <Link to="/owner/add-apartment" className="profile-list">
          <div>Flat</div>
        </Link>
      </div>

      <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#89AFFC" }}
        ></div>
        <Link to="/owner/change-password" className="profile-list">
          <div>Password</div>
        </Link>
      </div>

      <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#B5E369" }}
        ></div>
        <Link to="/owner/user" className="profile-list">
          <div>User</div>
        </Link>
      </div>

      <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#FE983A" }}
        ></div>
        <Link to="/owner/Edit-profile" className="profile-list">
          <div>Edit Profile</div>
        </Link>
      </div>

      {/* <div className=" d-flex align-items-center gap-2  mb-3">
        <div
          className="dashboard-icons"
          style={{ backgroundColor: "#5ED29B" }}
        ></div>
        <div className="profile-list">Chat with Users</div>
      </div> */}

      <h3 className="pointer loginfont">LOGOUT</h3>
    </Row>
  );
};

export default OwnerSideBar;
