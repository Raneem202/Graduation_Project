import React from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import img from "../images/VECTOR.jpg";
import logo from "../images/Group11.png";
import "../../style.css";
import { Link } from "react-router-dom";
import google from "../images/google.png";
import facebook from "../images/facebook1.png";
import Login_hock from "../../hocksJs/auth_hocks/login_hock";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onClickBtn,
    loading,
    isPress,
  ] = Login_hock();

  console.log(email);
  return (
    <div className="" style={{ height: "120vh" }}>
      <Row className="m-0 ">
        <Col
          xs="8"
          md="6"
          className=" bg-white formLogin mx-auto mt-5 shadow border border-2"
        >
          <div className=" text-center px-5 pt-5">
            <div className=" text-center login-header p-2 line-space ">
              LOGIN
            </div>
            <div>
              <img src={logo} alt="logo" className="my-5"></img>
            </div>

            <div>
              <Form>
                <Form.Group className="mb-5" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    className="p-2 inputs"
                    placeholder="Email Address"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    className="p-2 inputs"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                  />
                </Form.Group>
                <Link to="/forgetpassword">
                  <p className="colortext missed">Forget Password</p>
                </Link>

                <Button
                  variant="primary"
                  className="loginbtn colorbtns border-0 w-100 fw-bold "
                  onClick={onClickBtn}
                >
                  LOGIN
                </Button>

                {/* <div className="afterbtn d-flex justify-content-between p-3 flex-wrap"> */}
                <p className="coloring fonted missed mt-4">
                  Don't have an account?
                  <Link to="/register">
                    <span className="colortext"> REGESTER</span>
                  </Link>
                </p>

                {/* </div> */}

                {/* <div className="signwith d-flex justify-content-between flex-wrap mt-4">
                  <div className="col-sm-12 col-md-5 col-12 p-1 gap-2">
                    <img
                      src={google}
                      alt="google"
                      style={{ width: "50px" }}
                    ></img>
                    <p className="m-0">sign with Google</p>
                  </div>

                  <div className=" col-sm-12 col-md-5  col-12 gap-2 p-1">
                    <img
                      src={facebook}
                      alt="facebook"
                      style={{ width: "50px" }}
                    ></img>
                    <p className="m-0">sign with facebook</p>
                  </div>
                </div> */}
              </Form>
            </div>
          </div>
          {/* <Link to="/admin/dashboard" className=" text-danger">
            <p>Admin</p>
          </Link> */}
        </Col>
        <Col xs="4" md="6" className="m-0 p-0 imageLogin">
          <img src={img} className="background-Image" alt="logo"></img>
        </Col>
      </Row>
      {isPress ? (
        loading ? (
          <div className="loadingtrue">
            <Spinner animation="border" />
          </div>
        ) : null
      ) : null}
      <ToastContainer />
    </div>
  );
};

export default Login;
