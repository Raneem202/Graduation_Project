import React from "react";
import img from "../../Components/images/Group11.png";
import { Button, Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WriteCodeHock from "../../hocksJs/auth_hocks/Write_Code_Hock";
import "../../style.css";
const NewPassword = () => {
  const [code, ChangeCode, ClickSave] = WriteCodeHock();
  return (
    <Container>
      <div className="parent-forgetpassword mt-5 mb-5">
        <h4 className="head-forgetpassword">Forget Password</h4>

        <div className=" text-center">
          <img src={img} alt="imge" className=" mb-5"></img>

          <input
            placeholder="Please enter the 6-digit code"
            type="text"
            className="border-0 w-100 text-start p-2 inputs"
            value={code}
            onChange={ChangeCode}
          ></input>

          <Button className="saveforget ms-0 me-0 w-100" onClick={ClickSave}>
            send
          </Button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </Container>
  );
};

export default NewPassword;
