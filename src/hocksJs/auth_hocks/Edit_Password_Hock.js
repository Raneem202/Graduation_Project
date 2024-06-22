import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditPasswordAction,
  NewPasswordAction,
} from "../../redux/actions/auth_action";
import notify from "../notfiy";

const EditPasswordHock = () => {
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const ChangeOldPassword = (e) => {
    setPassword(e.target.value);
  };

  const ChangeNewPass = (e) => {
    setNewPassword(e.target.value);
  };
  const ChangeConfPass = (e) => {
    setConfirmPassword(e.target.value);
  };

  //   email from localstorage
  let email = "";
  if (JSON.parse(localStorage.getItem("data-user")) != null) {
    email = JSON.parse(localStorage.getItem("data-user")).email;
  }

  const Cofirm = async (e) => {
    if (newPassword === "" || confirmPassword === "" || password === "") {
      notify("Write all passwords", "error");
      return;
    } else if (newPassword != confirmPassword) {
      notify("Password does not match", "warn");
      return;
    }
    setLoading(true);
    await dispatch(
      EditPasswordAction({
        email: email,
        password,
        newPassword,
        confirmPassword,
      })
    );

    setLoading(false);
  };

  const Cancel = () => {
    setPassword("");
    setConfirmPassword("");
    setNewPassword("");
  };

  const res = useSelector((item) => item.Auth.editpassword);
  console.log(res);
  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("Your password has been update", "success");
        setPassword("");
        setConfirmPassword("");
        setNewPassword("");

        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      } else if (
        res &&
        res.data &&
        res.data.message ===
          " 'Passwords must have at least one non alphanumeric character.', "
      ) {
        notify(
          "Passwords must have at least one non alphanumeric character.",
          "error"
        );
      } else if (res && res.data && res.data.message === "invalid password") {
        notify("The old Password is invalid", "error");
      }
    }
  }, [loading]);
  return [
    newPassword,
    confirmPassword,
    password,
    ChangeOldPassword,
    ChangeConfPass,
    ChangeNewPass,
    Cofirm,
    Cancel,
  ];
};

export default EditPasswordHock;
