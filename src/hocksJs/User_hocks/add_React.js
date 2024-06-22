import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MakeLikeAction,
  PostCommentAction,
} from "../../redux/actions/user_action";
import { json } from "react-router";
import notify from "../notfiy";

const AddReact = (id) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [doComment, setDoComment] = useState("");

  const ChangeText = (e) => {
    setDoComment(e.target.value);
  };

  if (JSON.parse(localStorage.getItem("data-user")) != null) {
    var userID = JSON.parse(localStorage.getItem("data-user")).userId;
  }

  const Submit = async (e) => {
    setLoading(true);
    await dispatch(
      MakeLikeAction({
        userID: userID,
        apartmentID: id,
      })
    );
    setLoading(false);
  };

  const res = useSelector((item) => item.User.comment);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
      }
      if (res && res.status === 200) {
        notify("Like added", "success");
        setTimeout(() => {
          window.location.reload();
        }, 3500);
      } else if (res && res.status === 400) {
        notify("You already pressed Like", "Error");
      }
    }
  }, [loading]);

  return [Submit];
};

export default AddReact;
