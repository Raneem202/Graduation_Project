import React from "react";
import Adminnavbar from "./Adminnavbar";
import img from "../images/user login.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import GetUserDetailsHock from "../../hocksJs/Owner/get-user-details-hock";
import male from "../images/male.png";
import female from "../images/female.png";
import { Form } from "react-bootstrap";

const AdminUserDetails = () => {
  const { id } = useParams();

  const [
    loading,
    name,
    email,
    phone,
    type,
    College,
    University,
    role,
    view,
    apartments,
    Image,
  ] = GetUserDetailsHock(id);

  return (
    <div className=" mt-4 ms-4 overviewtog">
      <Adminnavbar></Adminnavbar>

      <div>
        <h4 className="notification-header mt-4 mb-4">
          User profile
          <div></div>
        </h4>
        {/* popupp */}
        <div className="ms-5 ">
          {/* container data */}
          <div className="gap-2 header-details pb-4">
            <img
              src={Image != null ? Image : img}
              alt="img"
              width={"15%"}
            ></img>
            <div className=" d-inline">
              <p className="lable ms-0">{name}</p>
              <p className="profile-list ms-0">{role}!</p>
            </div>
          </div>

          {/* inputs */}
          <div>
            <input
              className="input-group-text text-start
             mt-5 col-md-7 col-sm-12"
              type="text"
              value={name}
            ></input>
            <input
              className="input-group-text text-start
             mt-5 col-md-7 col-sm-12"
              type="text"
              value={email}
            ></input>
            <input
              className="input-group-text text-start
             mt-5 col-md-7 col-sm-12"
              type="text"
              value={phone}
            ></input>

            <div className=" d-flex col-md-7 col-sm-12 justify-content-around  mt-5">
              <div className="d-flex align-items-center gap-3">
                <label for="male">
                  <img src={male}></img>
                </label>
                <Form.Check
                  type="radio"
                  aria-label="radio 1"
                  checked={type === "Male"}
                  id="male"
                />
              </div>
              <div className="d-flex align-items-center gap-3">
                <label for="female">
                  <img src={female}></img>
                </label>
                <Form.Check
                  type="radio"
                  aria-label="radio 1"
                  checked={type === "Female"}
                  id="female"
                />
              </div>
            </div>

            {role != "Owner" ? (
              <input
                className="input-group-text text-start
             mt-5 col-md-7 col-sm-12"
                type="text"
                value={College != null ? College : "No College"}
              ></input>
            ) : null}
            {role != "Owner" ? (
              <input
                className="input-group-text text-start
             mt-5 col-md-7 col-sm-12"
                type="text"
                value={University != null ? University : "No University"}
              ></input>
            ) : null}

            <div className="d-flex justify-content-around col-md-7 col-sm-12">
              <div className=" mt-4">
                <h4 className="lable m-0">
                  Views <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                  <div className="views mt-2">
                    <div className=" text-center">
                      <p className="btr fw-bold m-0">{view}</p>
                      <p className="textbtr">Followers</p>
                    </div>
                  </div>
                </h4>
              </div>

              {role === "Owner" ? (
                <div className="mt-4">
                  <h4 className="lable m-0">
                    Apartments{" "}
                    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                    <div className="views mt-2">
                      <div className=" text-center">
                        <p className="btr fw-bold m-0">{apartments}</p>
                        <p className="textbtr">Followers</p>
                      </div>
                    </div>
                  </h4>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUserDetails;
