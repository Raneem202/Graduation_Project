import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegesterAction } from "../../redux/actions/auth_action";
import notify from "../notfiy";

const Regester_hock = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [isPress, setIsPress] = useState(false);
  const [userType, setUserType] = useState("");

  const [loading, setLoading] = useState(true);

  const res = useSelector((item) => item.Auth.signup);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setpassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    setConfpassword(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onClickLablemale = () => {
    setGender("male");
  };
  const onClickLablefemale = () => {
    setGender("female");
  };

  const ChangeUserType = (e) => {
    setUserType(e.target.value);
    console.log(e.target.value);
  };

  //   function validateEgyptianPhoneNumber(phone) {
  //     // Regular expression to match Egyptian phone numbers
  //     var regex = /^(01)(1|2|0|5)[0-9]{8}$/;

  //     // Test the input against the regex
  //     if (regex.test(phone)) {
  //       setpassword(phone);
  //     } else {
  //       notify("This is not an Egyptian number", "warn");
  //     }
  //   }

  //   const validation = () => {
  //     if (username === "") {
  //       notify("username is empty", "warn");
  //     } else if (username.length < 3) {
  //       notify("username must have a 3 or more letters", "warn");
  //     } else if (email === "") {
  //       notify("Email is empty", "warn");
  //     } else if (phone === "") {
  //       notify("Phone number is empty", "warn");
  //     } else if (password === "") {
  //       notify("password is empty", "warn");
  //     } else if (confpassword === "") {
  //       notify("Confirm Password is empty", "warn");
  //     } else if (password != confpassword) {
  //       notify("Password not match", "warn");
  //     } else if (gender === "") {
  //       notify("You have to choose the gender", "warn");
  //     }
  //   };

  const onSubmit = async () => {
    if (userType === "" || userType === "0") {
      notify("Please select user type", "error");
      return;
    } else if (gender === "") {
      notify("Please select gender", "error");
      return;
    }
    setLoading(true);
    setIsPress(true);
    const formdata = new FormData();
    formdata.append("UserName", username);
    formdata.append("Phone", phone);
    formdata.append("Email", email);
    formdata.append("Gender", gender);
    formdata.append("Password", password);
    formdata.append("ConfirmPassword", confpassword);
    formdata.append("UserType", userType);
    await dispatch(RegesterAction(formdata));

    setLoading(false);
  };

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.data) {
          //   succes code
          console.log(res.data);
          if (res.data.data) {
            notify(
              "The account has been created , confirm your email before logging in",
              "warn"
            );

            setTimeout(() => {
              window.location.href = "/login";
            }, 5000);
          }
          //   errors message
          // another errors
          if (res.data.message) {
            if (
              res.data.message ===
              "Passwords must have at least one lowercase ('a'-'z'). ,"
            ) {
              notify(
                "Passwords must have at least one lowercase ('a'-'z')",
                "error"
              );
            } else if (
              res.data.message ===
              "Passwords must have at least one uppercase ('A'-'Z'). ,"
            ) {
              notify(
                "Passwords must have at least one uppercase ('A'-'Z')",
                "error"
              );
            } else if (
              res.data.message ===
              "Passwords must have at least one non alphanumeric character. ,"
            ) {
              notify(
                "Passwords must have at least one non alphanumeric character",
                "error"
              );
            } else if (
              res.data.message === "Email Or Name is Already Registered"
            ) {
              notify("Email or Name is Already Registered", "error");
            } else if (
              res.data.message ===
              `Username '${username}' is invalid, can only contain letters or digits. ,`
            ) {
              notify(
                `Username '${username}' is invalid, can only contain letters or digits.`,
                "error"
              );
            }
          }

          //   errors
          // username
          if (res.data.errors) {
            if (res.data.errors.UserName) {
              if (
                res.data.errors.UserName[0] ===
                "The UserName field is required."
              ) {
                notify("username is empty", "error");
              } else if (
                res.data.errors.UserName[0] ===
                "The field UserName must be a string or array type with a minimum length of '3'."
              ) {
                notify("Username must have 3 or more letters", "error");
              }
            }
            // EMAIL
            if (res.data.errors.Email) {
              if (res.data.errors.Email[0] === "The Email field is required.") {
                notify("Email is empty", "error");
              } else if (
                res.data.errors.Email[0] ===
                "The Email field is not a valid e-mail address."
              ) {
                notify(
                  "There is an error, please wirte anathor email",
                  "error"
                );
              }
            }

            // phone number
            if (res.data.errors.Phone) {
              if (res.data.errors.Phone[0] === "The Phone field is required.") {
                notify("Phone number is empty", "error");
              } else if (
                res.data.errors.Phone[0] === "11 number only is Allowed .."
              ) {
                notify("The phone number must be 11 digits long", "error");
              } else if (
                res.data.errors.Phone[0] === "ONLY Numbers Please.. "
              ) {
                notify("The phone number ust ave a numbers only", "error");
              }
            }

            // Password
            if (res.data.errors.Password) {
              if (
                res.data.errors.Password[0] ===
                "The Password field is required."
              ) {
                notify("Password is empty", "error");
              } else if (
                res.data.errors.Password[0] ===
                "The field Password must be a string or array type with a minimum length of '6'."
              ) {
                notify(
                  "The password must contain upper and lowercase letters , numbers , and symbols",
                  "error"
                );
              }
            }

            // confirmPassword
            if (res.data.errors.ConfirmPassword) {
              if (
                res.data.errors.ConfirmPassword[0] ===
                "The ConfirmPassword field is required."
              ) {
                notify("ConfirmPassword is empty", "error");
              } else if (
                res.data.errors.ConfirmPassword[0] ===
                "The field ConfirmPassword must be a string or array type with a minimum length of '6'."
              ) {
                notify(
                  "The Confirmpassword must contain upper and lowercase letters , numbers , and symbols",
                  "error"
                );
              } else if (
                res.data.errors.ConfirmPassword[0] ===
                "'ConfirmPassword' and 'Password' do not match."
              ) {
                notify("password not match", "error");
              }
            }

            // confirmPassword
            if (res.data.errors.Gender) {
              if (
                res.data.errors.Gender[0] === "The Gender field is required."
              ) {
                notify("Gender is Required", "error");
              } else if (
                res.data.errors.Gender[0] ===
                "Gender must be only Female or male!"
              ) {
                notify("Gender must be only Female or male", "error");
              }
            }
          }
        }
      }
    }

    setLoading(true);
    setTimeout(() => {
      setIsPress(false);
    }, 1500);
  }, [loading]);

  return [
    username,
    email,
    password,
    confpassword,
    phone,
    onSubmit,
    onChangeUsername,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    onChangePhone,
    gender,
    onClickLablemale,
    onClickLablefemale,
    loading,
    isPress,
    ChangeUserType,
  ];
};

export default Regester_hock;
