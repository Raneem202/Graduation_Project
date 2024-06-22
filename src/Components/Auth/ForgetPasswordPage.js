import img from "../../Components/images/Group11.png";
import { Button, Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SendEmail from "../../hocksJs/auth_hocks/SendEmail_hock";
import "../../style.css";

const ForgetPasswordPage = () => {
  const [email, ChangeEmail, ClickSave] = SendEmail();
  return (
    <Container>
      <div className="parent-forgetpassword mt-5 mb-5 rounded-4">
        <h4 className="head-forgetpassword">Forget Password</h4>

        <div className="items-forget text-center">
          <img src={img} alt="imge" className=" mb-5"></img>

          <input
            placeholder="Email Address"
            type="email"
            className=" border-0 w-100 text-start p-2 inputs"
            value={email}
            onChange={ChangeEmail}
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

export default ForgetPasswordPage;
