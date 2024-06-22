import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../redux/actions/auth_action";
import notify from "../notfiy";

const Login_hock = () => {
  // use state for all variablies
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  console.log(password);

  //   usedispatch and useSelector
  const dispatch = useDispatch();
  const res = useSelector((item) => item.Auth.signin);

  //   onchange functions
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // validate on email
  function validateGmailEmail(email) {
    const re = /^[^\s@]+@gmail\.com$/;
    return re.test(email);
  }

  // Example usage
  const emailValidate = email;
  if (validateGmailEmail(email)) {
    console.log("Email contains @gmail.com");
  } else {
    console.log("Email does not contain @gmail.com");
  }

  //   validation
  const validation = () => {
    if (email === "") {
      notify("Email is empty", "error");
      return;
    }

    if (password === "") {
      notify("Password is empty", "error");
      return;
    }

    if (!validateGmailEmail(emailValidate)) {
      notify("This is not an email !!", "error");
      return;
    }
  };

  //   on submit
  const onClickBtn = async (e) => {
    e.preventDefault();
    validation();
    setLoading(true);
    setIsPress(true);
    const formdata = new FormData();
    formdata.append("Email", email);
    formdata.append("Password", password);
    await dispatch(LoginAction(formdata));
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.data) {
          if (res.data.message === "Operation Done Successfuly") {
            notify("done", "success");
            localStorage.setItem("token", res.data.data.token);
            localStorage.setItem("data-user", JSON.stringify(res.data.data));
            window.location.href = "/";
          } else if (res.data.message === "Name Or Password is invalid..!") {
            notify("Email Or Password is wrong, try again", "error");
            localStorage.removeItem("token");
            localStorage.removeItem("data-user");
          } else if (res.data.message === "Not Confirmed!") {
            notify(
              "Your email has not been confirmed , check messages",
              "error"
            );
          }
        }
      }

      setTimeout(() => {
        setIsPress(false);
      }, 1500);
    }
  }, [loading]);

  return [
    email,
    password,
    onChangeEmail,
    onChangePassword,
    onClickBtn,
    loading,
    isPress,
  ];
};

export default Login_hock;
