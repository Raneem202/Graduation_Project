import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NewPasswordAction } from "../../redux/actions/auth_action";
import notify from "../notfiy";

const NewPasswordHock = () => {
  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const ChangeNewPass = (e) => {
    setNewPassword(e.target.value);
  };
  const ChangeConfPass = (e) => {
    setConfirmPassword(e.target.value);
  };

  const Cofirm = async (e) => {
    if (newPassword === "" || confirmPassword === "") {
      notify("Write a new password", "warn");
      return;
    } else if (newPassword != confirmPassword) {
      notify("Password does not match", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      NewPasswordAction({
        email: localStorage.getItem("user-email"),
        newPassword,
        confirmPassword,
      })
    );

    setLoading(false);
  };

  const res = useSelector((item) => item.Auth.newpasswords);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("Your password has been changed, please wait", "success");

        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      } else if (res && res.status === 400) {
        notify("The code is incorrect", "error");
      }
    }
  }, [loading]);
  return [newPassword, confirmPassword, ChangeConfPass, ChangeNewPass, Cofirm];
};

export default NewPasswordHock;
