import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProfileAction } from "../../redux/actions/auth_action";
import notify from "../notfiy";

const EditProfileHock = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("data-user"))?.userName || ""
  );
  const [phoneNumber, setPhoneNumber] = useState(
    JSON.parse(localStorage.getItem("data-user"))?.phone || ""
  );
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("data-user"))?.email || ""
  );

  const [loading, setLoading] = useState(true);

  const Changeusername = (e) => {
    setUsername(e.target.value);
  };

  const ChangephoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const ChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const save = async (e) => {
    e.preventDefault();
    if (username === "" || phoneNumber === "" || email === "") {
      notify("Please fill in all required fields", "error");
      return;
    }
    setLoading(true);

    const formdata = new FormData();
    formdata.append("Name", username);
    formdata.append("Phone", phoneNumber);
    formdata.append("Email", email);
    formdata.append("Picture", localStorage.getItem("profilePic") || null);

    try {
      dispatch(EditProfileAction(formdata));
    } catch (error) {
      console.log(error);
      notify("Failed to update profile", "error");
    } finally {
      setLoading(false);
    }
  };

  const Cancel = () => {
    setUsername("");
    setPhoneNumber("");
    setEmail("");
  };

  const res = useSelector((item) => item.Auth.editprofile);

  useEffect(() => {
    if (loading === false && res) {
      console.log(res);
      if (res.status === 200) {
        notify("Your profile has been updated", "success");
        localStorage.removeItem("token");
        localStorage.removeItem("data-user");
        notify("Please login again", "warn");
        setTimeout(() => {
          window.location.href = "/login";
        }, 3000);
      } else {
        console.log(res);
        if (res.data && res.data.errors) {
          Object.keys(res.data.errors).forEach((key) => {
            const errorMessage = res.data.errors[key][0]; // Get the first error message for each field
            notify(errorMessage, "error");
          });
        }

        if (res.data?.message) {
          notify(res.data.message, "error");
        }
      }
    }
  }, [loading, res]);

  return [
    username,
    phoneNumber,
    Changeusername,
    ChangephoneNumber,
    email,
    ChangeEmail,
    save,
    Cancel,
  ];
};

export default EditProfileHock;
