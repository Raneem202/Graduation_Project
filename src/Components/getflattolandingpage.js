import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UseGetDateWithoutToken } from "../hocks/useGetData"; // corrected the typo in the import path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const UserShowFlat = () => {
  const [apartments, setApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await UseGetDateWithoutToken(
          "/api/Apartment/GetApartmentLandingPage",
          {
            params: {
              OwnerId: JSON.parse(localStorage.getItem("data-user")).userId,
              Search: search,
            },
          }
        );
        console.log("Response:", res);
        setApartments(res.data.data);
      } catch (error) {
        console.error("Error fetching apartments:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, [search]);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  if (!Array.isArray(apartments) || apartments.length === 0) {
    return <div className="text-center my-5">No apartments found.</div>;
  }

  return (
    <Container style={{ backgroundColor: "#D8D1D142" }}>
      <Row className="mt-5">
        <Col sm="12" md="8" className="mb-5">
          <div className="p-4">
            <h2
              style={{
                fontFamily: "Roboto",
                fontWeight: "600" ,
                color: "#054457" ,
                fontSize: "36px",
              }}
            >
              Best recommendation
            </h2>
            <p
              style={{
                fontFamily: "Roboto",
                fontWeight: "400",
                fontSize: "18px",
                color: "#73788C",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              Discover our exclusive selection of the finest one-of-a-kind
              luxury properties architectural masterpieces.
            </p>
          </div>
        </Col>
        <Col sm="12" md="4" className="mb-4" style={{marginTop:"90px"}}>
          <div
            className="text-center mt-4"
            style={{
              textAlign: "center",
              color: "black",
              backgroundColor: "white",
              width: "200px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              
            }}
          >
            <a href="/user/AllApartment" className="makeblack">
              View more
              <FontAwesomeIcon
                className="ml-3"
                style={{ marginLeft: "13px" }}
                icon={faLongArrowAltRight}
              />
            </a>
          </div>
        </Col>
        
        <Col sm="12">
          <Row >
            {apartments.map((apartment) => (
              <Col sm="12" mb="6"  key={apartment.id}
                style={{ width: "350px", marginLeft: "50px" , marginBottom:"20px"}}>
                <div
                  className=" p-3"
                  style={{
                    backgroundColor: "white",
                    boxShadow: "1px 1px 1px 2px #DEDCDA",
                    height: "100%",

                  }}
                >
                  <div className="text-center">
                    {apartment.image ? (
                      <img
                        src={apartment.image}
                        alt={apartment.name}
                        className="img-fluid mb-3"
                        style={{
                          width: "280px",
                          height: "200px",
                          boxShadow: "0px 4px 4px 0px #00000040",
                        }}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                    <h2 style={{ fontSize: "20px" }}>{apartment.name}</h2>
                    <p>{apartment.city ? apartment.city : "دمياط"}</p>
                    <p style={{ color: "#69B99D" }}>{apartment.price} EGP</p>
                    <button className="btn btn-outline-success w-100 mt-2">
                      Detail
                    </button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default UserShowFlat;
