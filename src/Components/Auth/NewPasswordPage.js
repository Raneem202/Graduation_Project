import React from "react";
import img from "../../Components/images/Group11.png";
import { Button, Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewPasswordHock from "../../hocksJs/auth_hocks/New_Password_Hock";

const SelectNewPasswordPage = () => {
  const [newPassword, confirmPassword, ChangeConfPass, ChangeNewPass, Cofirm] =
    NewPasswordHock();
  return (
    <Container>
      <div className="parent-forgetpassword mt-5 mb-5">
        <h4 className="head-forgetpassword">Forget Password</h4>

        <div className=" text-center">
          <img src={img} alt="imge" className=" mb-5"></img>

          <input
            placeholder="New Password"
            type="password"
            className=" border-0 w-100 text-start p-2 inputs"
            value={newPassword}
            onChange={ChangeNewPass}
          ></input>
          <input
            placeholder="Confirm New Password"
            type="password"
            className="border-0 w-100 text-start p-2 inputs mt-4"
            value={confirmPassword}
            onChange={ChangeConfPass}
          ></input>

          <Button className="saveforget ms-0 me-0 w-100" onClick={Cofirm}>
            Confirm
          </Button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </Container>
  );
};

export default SelectNewPasswordPage;
