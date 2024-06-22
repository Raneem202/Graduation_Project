import React from "react";
import Adminnavbar from "../admin/Adminnavbar";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import img from "../images/user login.png";
import GetUserRequst from "../../hocksJs/Owner/get-user-requst";
import acceptRefuse from "../../hocksJs/Owner/accept_refuse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const OwnerUserRequest = () => {
  const [res, numbers] = GetUserRequst();
  const [accept, Refuse] = acceptRefuse();
  console.log(res);
  return (
    <div className="mt-4 ms-4 requsetttoverviewtog">
      <Adminnavbar></Adminnavbar>

      <Row className="mt-5 p-2 gap-5 justify-content-center">
        <Col
          xs="12"
          md="3"
          className="bg-white text-center rounded-2 cout-users"
        >
          <p className="mt-4">Total Users</p>
          <h4 className="mb-4">
            {numbers && numbers.data && numbers.data.data
              ? numbers.data.data.ownStudents
              : null}
          </h4>
        </Col>
        <Col
          xs="12"
          md="3"
          className="bg-white text-center rounded-2 cout-users"
        >
          <p className="mt-4">Monthly Users</p>
          <h4 className="mb-4">
            {numbers && numbers.data && numbers.data.data
              ? numbers.data.data.ownStudents
              : null}
          </h4>
        </Col>
        <Col
          xs="12"
          md="3"
          className="bg-white text-center rounded-2 cout-users "
        >
          <p className="mt-4 lastchild">Requested Users</p>
          <h4 className="mb-4">
            {numbers && numbers.data && numbers.data.data
              ? numbers.data.data.requestedStudents
              : null}
          </h4>
        </Col>
      </Row>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              Name <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </th>
            <th scope="col">
              Phone <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </th>
            <th scope="col">
              Apartment Name{" "}
              <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </th>
            <th scope="col">
              Action <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
            </th>
          </tr>
        </thead>
        <tbody>
          {res && res.data && res.data.date
            ? res.data.date.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">
                      <img
                        src={
                          item.studentImageURL === null
                            ? img
                            : item.studentImageURL
                        }
                        width={"30px"}
                        height={"30px"}
                      ></img>
                      <span className="d-inline-block ms-2">
                        {item.studentName}
                      </span>
                    </th>
                    <td>{item.studentPhone}</td>
                    <td>{item.apartmentName}</td>
                    <td>
                      <Button
                        className=" border-0 me-3 rounded-4 accept"
                        onClick={() => accept(item.id)}
                      >
                        Accept
                      </Button>
                      <Button
                        className="bg-danger border-0 rounded-4 text-dark"
                        onClick={() => Refuse(item.id)}
                      >
                        Refuse
                      </Button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default OwnerUserRequest;
