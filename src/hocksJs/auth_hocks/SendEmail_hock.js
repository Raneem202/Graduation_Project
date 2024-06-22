import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendCodeAction } from "../../redux/actions/auth_action";
import notify from "../notfiy";
const SendEmail = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const ChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const ClickSave = async () => {
    setLoading(true);
    await dispatch(
      sendCodeAction({
        email,
      })
    );
    setLoading(false);
  };

  const res = useSelector((item) => item.Auth.code);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("The code has been sent", "success");
        localStorage.setItem("user-email", email);
        setTimeout(() => {
          window.location.href = "/new-password";
        }, 3000);
      } else if (res && res.status === 400) {
        notify("This email is invalid", "error");
      }
    }
  }, [loading]);

  return [email, ChangeEmail, ClickSave];
};

export default SendEmail;
