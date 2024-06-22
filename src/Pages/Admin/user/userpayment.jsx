import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MakeRequest, paymentAction } from "../../../redux/actions/user_action";
import { faL } from "@fortawesome/free-solid-svg-icons";

const UserpaymentHock = (id) => {
  if (JSON.parse(localStorage.getItem("data-user")) != null) {
    var userId = JSON.parse(localStorage.getItem("data-user")).userId;
  }
  console.log(userId);
  const [loading, setloading] = useState(true);
  const [loadingPayment, setloadingPayment] = useState(true);
  const dispatch = useDispatch();
  const Enroll = async () => {
    setloading(true);
    await dispatch(
      MakeRequest({
        userID: userId,
        apartmentID: id,
      })
    );
    setloading(false);
  };

  const res = useSelector((item) => item.User.requestApart);

  useEffect(() => {
    if (loading === false) {
      if (res && res.status === 200) {
        const postpayment = async () => {
          setloadingPayment(true);
          await dispatch(
            paymentAction({
              apartmentID: id,
              userID: userId,
            })
          );
          setloadingPayment(false);
        };
        postpayment();
      } else {
        window.location.href = "/login";
      }
    }
  }, [loading]);
  const resPay = useSelector((item) => item.User.payment);

  useEffect(() => {
    if (loadingPayment === false) {
      if (resPay && resPay.data) {
        // window.location.href(resPay.data.data);
        window.location.href = resPay.data.data;
      }
    }
  }, [loadingPayment]);

  return [Enroll];
};

export default UserpaymentHock;
