import React, { useState, useEffect } from "react";
import "../../App.css";
import Adminnavbar from "./Adminnavbar";
import { Col, Row } from "react-bootstrap";
import img from "../../Components/images/photo_2024-03-21_21-37-11.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { UseGetDateToken } from "../../hocks/useGetData";

const AdminShowApartments = () => {
  const [appartments, setAppartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [search, setSearch] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  const getAppartments = async () => {
    setLoading(true);
    try {
      const res = await UseGetDateToken("/api/Owner/GetOwnerApartments", {
        params: {
          PageNumber: page,
          PageSize: pageSize,
          Search: search,
          OwnerId: JSON.parse(localStorage.getItem("data-user")).userId,
        },
      });
      console.log("Response:", res);
      setAppartments(res.data);
      setTotalPages(Math.ceil(res.data.length / pageSize));
    } catch (error) {
      console.error("Error fetching apartments:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getAppartments();
  }, [page, pageSize, search]);

  // Change page
  const paginate = (pageNumber) => setPage(pageNumber);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-4 ms-4">
      <Adminnavbar />
      <Row>
        <Col xs="12" md="7">
          <h2>Apartment</h2>
          <hr
            style={{
              border: "1px solid red",
              backgroundColor: "red",
              width: "50px",
              height: "2.5px",
              marginTop: "-5px",
            }}
          />
          {appartments.length === 0 ? (
            <div
              style={{
                fontWeight: "bold",
                fontSize: "20px",
                marginTop: "20px",
              }}
            >
              No apartments found
            </div>
          ) : (
            appartments.map((apartment) => console.log(apartment))
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination" style={{ marginLeft: "370px" }}>
              <button
                style={{
                  width: "40px",
                  border: "none",
                  borderRadius: "5px",
                  height: "45px",
                  marginBottom: "10px",
                  marginTop: "80px",
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
                    marginLeft: "7px",
                    height: "45px",
                    marginBottom: "200px",
                    marginTop: "80px",
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
                  marginLeft: "7px",
                  marginBottom: "10px",
                  marginTop: "80px",
                }}
                onClick={() => paginate(page + 1)}
                disabled={page === totalPages}
              >
                &gt;
              </button>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default AdminShowApartments;
