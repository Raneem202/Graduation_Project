import React from "react";
import img from "../images/user login.png";
import Pagination from "./pagination";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import PostComment from "../../hocksJs/User_hocks/post_Comment";
import { useParams } from "react-router";

const Comments = ({ Comments, id, onpress }) => {
  // console.log(id);

  const TotalPages = Comments.totalPages;

  const [loading, doComment, ChangeText, Submit] = PostComment(id);

  return (
    <div className="p-3 bg-white rounded-2 comments">
      <h4>Comments</h4>
      {Comments && Comments.date
        ? Comments.date.map((item, index) => {
            return (
              <div className="child-comment mb-3" key={index}>
                <div className="d-flex align-items-center gap-2 ">
                  <img
                    src={
                      item.currentUserImage === null
                        ? img
                        : item.currentUserImage
                    }
                    className="imgComment"
                  ></img>
                  <h5 className="m-0">
                    {item.userCommentName ? item.userCommentName : null}
                  </h5>

                  {/* <span>1 week</span> */}
                </div>
                <h5 className="text-end mt-2 border-bottom pb-3">
                  {item.commentValue}
                </h5>
              </div>
            );
          })
        : null}

      {/* pagination */}
      <Pagination TotalPages={TotalPages} Clicker={onpress}></Pagination>

      <div className="child-comment mb-3">
        <div className="d-flex align-items-center gap-2 ">
          <img src={img} className="imgComment"></img>
          <textarea
            class="input-group-text text-start mt-3"
            placeholder="comment"
            id="floatingTextarea"
            style={{ height: "100px", width: "100%" }}
            value={doComment}
            onChange={ChangeText}
          ></textarea>
          <Button className=" enroll border-0 p-2 mt-3" onClick={Submit}>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
