import React, { useState, useEffect } from "react";
import "../../../App.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faDollarSign,
  faLocationArrow,
  faMapMarkerAlt,
  faUsers,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { UseGetDateToken } from "../../../hocks/useGetData";
import img from "../../../Components/images/photo_2024-03-21_21-37-11.jpg";
import Adminnavbar from "../../../Components/admin/Adminnavbar";
import { Link } from "react-router-dom";
import Sidebar from "../user/Filter";

const UserShowApartments = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");

  const getAppartments = async () => {
    setLoading(true);
    try {
      const res = await UseGetDateToken("/api/User/GetApartmentsMain", {
        params: {
          PageNumber: page,
          PageSize: pageSize,
          Search: search,
          OwnerId: JSON.parse(localStorage.getItem("data-user")).userId,
        },
      });
      console.log("Response:", res);
      setApartments(res.data.date);
      setTotalPages(Math.ceil(res.data.totalCount / pageSize));
    } catch (error) {
      console.error("Error fetching apartments:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAppartments();
  }, [page, pageSize, search]);

  const paginate = (pageNumber) => {
    setPage(pageNumber);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!Array.isArray(apartments) || apartments.length === 0) {
    return (
      <div className="line-space text-center my-5">No apartments found.</div>
    );
  }

  // console.log(apartments);
  return (
    <div>
        <Row>
        {/* */}
        <Row className="mt-3">
          <Col sm="12" md="9" className="offset-md-1">
            <Adminnavbar />
          </Col>
          <Col sm="12" md="1" style={{
              marginTop:"13px"
            }}>
                <Sidebar />
                </Col>
        
        {/* ////////////////////////////////// */}
        
        <Col md="10" sm="12" >
          <div
          className="container-fluid offset-md-1"
              style={{
                display: "flex",
                flexWrap: "wrap",
                
                // marginTop: "-590px",
              }}
            >
              {apartments.map((apartment, index) => (
                <div
                  key={apartment.id}
                  className="apartment-card"
                  style={{
                    width: "372px",
                    borderRadius: "15px",
                    textAlign: "right",
                    backgroundColor: "white",
                    margin: "auto",
                    marginTop:"40px"
                  }}
                >
                  {apartment.imageURL ? (
                    <Link
                      to={`/user/apartment-details/${apartment.apartmentID}`}
                    >
                      <img
                        src={apartment.imageURL}
                        alt={apartment.name}
                        style={{
                          width: "100%",
                          height: "174px",
                          borderRadius: "15px",
                          objectFit: "cover",
                        }}
                      />
                    </Link>
                  ) : (
                    <img
                      src={img}
                      style={{
                        width: "100%",
                        height: "174px",
                        borderRadius: "15px",
                        objectFit: "cover",
                      }}
                      alt="Default Apartment Image"
                    />
                  )}

                  <div className="apartment-details">
                    <h2 style={{ fontSize: "20px", marginTop: "5px" }}>
                      <span style={{ marginRight: "10px" }}>
                        {apartment.name}
                      </span>
                      <FontAwesomeIcon icon={faHome} />
                    </h2>
                    <p style={{ color: "#69B99D" }}>
                      <span style={{ marginRight: "10px" }}>
                        {apartment.salary} EGP{" "}
                      </span>
                      <FontAwesomeIcon
                        style={{ fontSize: "20px" }}
                        icon={faDollarSign}
                      />
                    </p>
                    <p style={{ marginTop: "-9px" }}>
                      {" "}
                      {apartment.description}
                    </p>
                    <p style={{ marginTop: "-9px" }}>
                      {" "}
                      <span style={{ marginRight: "10px" }}>
                        {apartment.city ? apartment.city : "دمياط"}
                      </span>
                      <FontAwesomeIcon
                        style={{ fontSize: "20px" }}
                        icon={faLocationArrow}
                      />
                    </p>
                    <p style={{ marginTop: "-9px" }}>
                      <span style={{ marginRight: "10px" }}>
                        {" "}
                        {apartment.address}
                      </span>
                      <FontAwesomeIcon
                        style={{ fontSize: "20px" }}
                        icon={faMapMarkerAlt}
                      />
                    </p>
                    <p style={{ marginTop: "-9px" }}>
                      <span style={{ marginRight: "10px" }}>(4/0) </span>
                      <FontAwesomeIcon
                        style={{ fontSize: "20px" }}
                        icon={faUsers}
                      />
                    </p>
                  </div>
                </div>
              ))}
          </div>
          </Col>
            {totalPages > 1 && (
              <div
                style={{ display:"flex" ,justifyContent:"center" , marginBottom:"10px" , marginTop:"10px"}}
              >
                <button
                  style={{
                    width: "40px",
                    border: "none",
                    borderRadius: "5px",
                    height: "45px",
                    // margin: "auto",
                  }}
                  onClick={() => paginate(page - 1)}
                  disabled={page === 1}
                >
                  &lt;
                </button>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    style={{
                      width: "40px",
                      borderRadius: "5px",
                      height: "45px",
                      marginleft: "3px",
                      marginRight: "3px",
                      color: page === index + 1 ? "blue" : "black",
                      border: page === index + 1 ? "1px solid blue" : "none",
                    }}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  style={{
                    width: "40px",
                    border: "none",
                    borderRadius: "5px",
                    height: "45px",
                    // margin: "auto",
                  }}
                  onClick={() => paginate(page + 1)}
                  disabled={page === totalPages}
                >
                  &gt;
                </button>
            </div>
            )}
          </Row>
        </Row>
      
    </div>
  );
};

export default UserShowApartments;
