import React from "react";
import { Col, Row } from "react-bootstrap";
import pic from "../images/Rectangle 32.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import "../../style.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import Adminnavbar from "../admin/Adminnavbar";
const OwnerOverview = () => {
  let userData = "";
  if (JSON.parse(localStorage.getItem("data-user")) != null) {
    userData = JSON.parse(localStorage.getItem("data-user"));
  }

  return (
    <div className="mt-4 ms-4 overviewtog">
      <Adminnavbar></Adminnavbar>
      <div className="overview mt-4">
        Overview
        <div></div>
      </div>

      <Row className=" justify-content-between pt-4 pb-4">
        <Col className="p-4 mb-4 rounded-3 bg-white" xs="12">
          <div className="btr mb-3">Better Call Home</div>
          <p className="titlebtr mb-4">
            Better Call Home
            <div className="mt-2"></div>
          </p>

          <p className="textbtr mb-5">
            Our Housing system is very easy to understand in a way that makes us
            use a very simple authentication progress yet so effective and
            understandable, we always aim to protect our users and always
            provide them with the best of our efforts looking always to satisfy
            our users with our most devoted work to be able to offer the best
            services ever to you.
          </p>
          <div>
            <p className="textbtr">
              . Better Call Home is trying to provide the best services which
              can benefit our users as always, if you’re looking for appropriate
              renting systems with the suitable place, apartment, availability,
              roommates and price.
            </p>

            <p className="textbtr">
              . This user dashboard tells us a lot about your preferences and
              always keeps you updated with the latest new about the housing
              systems we’re running to provide you with the best services we’re
              gladly here to offer.
            </p>
          </div>
          <Row className="mt-5">
            <Col xs="12" sm="6" md="6" lg="4" className="mb-3">
              <div
                style={{ backgroundColor: "#7A4CFC", color: "#FFFFFF" }}
                className="box"
              >
                <h2 className="countnum">65</h2>
                <p>Application sent</p>
              </div>
            </Col>
            <Col xs="12" sm="6" md="6" lg="4" className=" mb-2">
              <div
                style={{ backgroundColor: "#FFFFFF", color: "#575757" }}
                className="box"
              >
                <h2 className="countnum">10</h2>
                <p>Matching requirements</p>
              </div>
            </Col>
            <Col xs="12" sm="6" md="6" lg="4">
              <div
                style={{ backgroundColor: "#FFFFFF", color: "#575757" }}
                className="box"
              >
                <h2 className="countnum">62</h2>
                <p>Profile Visited</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm="12" className="bg-white rounded-2 p-5">
          <Line
            data={{
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              datasets: [
                {
                  label: "Total Users",
                  data: [42, 58, 76, 23, 89, 15, 94, 60, 33, 47, 71, 28],
                  backgroundColor: "white",
                  borderColor: "#7a4cfc",
                  borderJoinStyle: "miter",
                },
              ],
            }}
            options={{
              elements: {
                line: {
                  tension: 0.5,
                },
              },
              scales: {
                x: {
                  grid: {
                    display: false,
                  },
                },
                y: {
                  display: false,
                  beginAtZero: true,
                },
              },
            }}
          ></Line>
        </Col>
      </Row>
    </div>
  );
};

export default OwnerOverview;
