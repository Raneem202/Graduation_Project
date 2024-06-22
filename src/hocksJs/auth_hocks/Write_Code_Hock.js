import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  WriteCodeAction,
  sendCodeAction,
} from "../../redux/actions/auth_action";
import notify from "../notfiy";
const WriteCodeHock = () => {
  const [code, setCode] = useState("");

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const ChangeCode = (e) => {
    setCode(e.target.value);
  };

  let userEmail = localStorage.getItem("user-email");
  //   console.log(userEmail);
  //   console.log(code);
  //   console.log(userEmail);
  const ClickSave = async () => {
    if (code === "") {
      notify("Write the code ", "error");
      return;
    }
    setLoading(true);
    await dispatch(
      WriteCodeAction({
        code,
        email: userEmail,
      })
    );
    setLoading(false);
  };

  const res = useSelector((item) => item.Auth.writecode);
  //   console.log(res);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("done , please wait", "success");

        setTimeout(() => {
          window.location.href = "/confirm-password";
        }, 3000);
      } else if (res && res.status === 400) {
        notify("The code is incorrect", "error");
      }
    }
  }, [loading]);

  return [code, ChangeCode, ClickSave];
};

export default WriteCodeHock;
