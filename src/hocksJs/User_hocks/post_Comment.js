import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostCommentAction } from "../../redux/actions/user_action";
import { json } from "react-router";
import notify from "../notfiy";

const PostComment = (id) => {
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
      PostCommentAction({
        userID: userID,
        apartmentID: id,
        comment: doComment,
      })
    );
    setLoading(false);
  };

  const res = useSelector((item) => item.User.comment);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        notify("Comment added", "success");
        setDoComment("");
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      } else if (res && res.status === 400) {
        notify("You are allowed to add only 3 comments", "warn");
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      }
    }
  }, [loading]);

  return [loading, doComment, ChangeText, Submit];
};

export default PostComment;
