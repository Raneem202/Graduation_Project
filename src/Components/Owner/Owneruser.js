import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Adminnavbar from "../admin/Adminnavbar";
import defaultPhoto from "../../Components/images/photo_2024-03-03_14-38-27.jpg";
import { Link } from "react-router-dom";
// import GetUserRequst from "../../hocksJs/Owner/get-user-requst";
import { Col, Row } from "react-bootstrap";

const Adminuser = () => {
  const [users, setUsers] = useState([]);
  const [apartments, setApartments] = useState([]);
  const [error, setError] = useState(null);
  const [ownStudents, setownStudents] = useState(0);
  const [requestedStudents, setrequestedStudents] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);
  // const [res, numbers] = GetUserRequst();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const ownerId = JSON.parse(localStorage.getItem("data-user")).userId;

    // Fetch users
    axios
      .get(
        `http://bettercallhomeapii.somee.com/api/Owner/GetOwnerStudents?OwnerID=${ownerId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data)
        if (response.data && response.data.date) {
          setUsers(response.data.date);
          setError(null);
        } else {
          setError("Unexpected response format for users.");
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError("Error fetching users. Please try again later.");
      });

    // Fetch apartments
    axios
      .get(
        `http://bettercallhomeapii.somee.com/api/Owner/GetUsersCountForOwner?OwnerID=${ownerId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Response from GetUsersNumbers:", response.data);
        if (response.data && response.data.data) {
          const { requestedStudents, ownStudents } = response.data.data;
          setrequestedStudents(requestedStudents || 0);
          setownStudents(ownStudents || 0);
          setError(null);
        } else {
          setError("Unexpected response format for user numbers.");
        }
      })
      .catch((error) => {
        console.error("Error fetching apartments:", error);
        setError("Error fetching apartments. Please try again later.");
      });
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleDelete = (userId) => {
    const token = localStorage.getItem("token");
    const userToDelete = users.find((user) => user.userId === userId);
    if (!userToDelete) {
      console.log("User not found");
      return;
    }

    axios
      .delete(
        `http://bettercallhomeapii.somee.com/api/Admin/DeleteUser?UserId=${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("User deleted successfully");
        console.log(response);
        setUsers(users.filter((user) => user.userId !== userId));
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          console.log("User not found");
        } else {
          console.error("Error deleting user:", error);
        }
      });
    console.log(userToDelete);
  };

  return (
    <div className="mt-4 ms-4 requsetttoverviewtog">
      <Adminnavbar />
      <Row className="mt-5 p-2 gap-5 justify-content-center">
        <Col
          xs="12"
          md="3"
          className="bg-white text-center rounded-2 cout-users"
        >
          <p className="mt-4">Total Users</p>
          <h4 className="mb-4">{ownStudents}</h4>
        </Col>
        <Col
          xs="12"
          md="3"
          className="text-center rounded-2 cout-users"
          style={{ backgroundColor: "#5B6AD0", color: "white" }}
        >
          <p className="mt-4 " style={{ color: "white" }}>
            Monthly Users
          </p>
          <h4 className="mb-4">{ownStudents}</h4>
        </Col>
        <Col
          xs="12"
          md="3"
          className="bg-white text-center rounded-2 cout-users"
        >
          <Link to="/owner/user-request">
            <p className="mt-4">Requested Users</p>
            <h4 className="mb-4" style={{ color: "black" }}>
              {requestedStudents}
            </h4>
          </Link>
        </Col>
        <table className="table table-striped">
          <thead style={{ color: "#B1B1B1", backgroundColor: "white" }}>
            <tr>
              <th scope="col">
                Name <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
              </th>
              <th scope="col">
                Phone <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
              </th>
              <th scope="col">
                Flat Name <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
              </th>
              <th scope="col">
                Action <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
              </th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {currentUsers.map((user, index) => (
              <tr key={user.userId}>
                <th>
                  <div style={{width:"120px"}}>
                  <img
                    src={user.imageUrl ? user.imageUrl : defaultPhoto}
                    alt="User"
                    style={{
                      display: "inline",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                    }}
                  />
                  <span >
                    {typeof user.name === "object"
                      ? user.name.someProperty
                      : user.name}
                  </span>
                </div></th>
                <td>{user.phone}</td>
                <td>{user.apartmentName}</td>
                <td>
                  <button
                    style={{
                      width:"80px",
                      height: "35px",
                      marginTop:"8px",
                      color: "red",
                      background: "white",
                      border: "1px solid red",
                      borderRadius: "4px",
                    }}
                    onClick={() => handleDelete(user.userId)}
                  >
                    <FontAwesomeIcon icon={faTrashAlt} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination */}
        <div className="pagination">
          <button
            style={{
              width: "40px",
              border: "none",
              borderRadius: "5px",
              height: "45px",
              margin: "auto",
            }}
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          {Array.from({ length: Math.ceil(users.length / usersPerPage) }).map(
            (_, index) => (
              <button
                key={index}
                style={{
                  width: "40px",
                  borderRadius: "5px",
                  height: "45px",
                  marginBottom: "200px",
                  margin: "auto",
                  color: currentPage === index + 1 ? "blue" : "black",
                  border: currentPage === index + 1 ? "1px solid blue" : "none",
                }}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
          <button
            style={{
              width: "40px",
              border: "none",
              borderRadius: "5px",
              height: "45px",
              marginBottom: "10px",
              margin: "auto",
            }}
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(users.length / usersPerPage)}
          >
            &gt;
          </button>
        </div>
        {/* //{" "} */}
      </Row>
    </div>
  );
};

export default Adminuser;
