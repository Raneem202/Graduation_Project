import React from "react";
import img from "../../Components/images/Group11.png";
import { Button, Container } from "react-bootstrap";

const AdminChangePassword = () => {
  return (
    <Container>
      <div className="parent-forgetpassword mt-5">
        <h4>Forget Password</h4>

        <div className=" text-center">
          <img src={img} alt="imge" className=" mb-5"></img>

          <input
            placeholder="New Password"
            type="Password"
            className=" input-group-text border-0 w-100 text-start p-2"
          ></input>

          <input
            placeholder="Confirm New Password"
            type="Password"
            className=" input-group-text border-0 w-100 text-start p-2"
          ></input>

          <Button className="saveforget">Confirm</Button>
        </div>
      </div>
    </Container>
  );
};

export default AdminChangePassword;
