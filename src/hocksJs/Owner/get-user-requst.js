import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetUserNumbers,
  GetUserRequestAction,
} from "../../redux/actions/owner_action";

const GetUserRequst = () => {
  const [loading, setLoading] = useState(true);
  const OwnerId = JSON.parse(localStorage.getItem("data-user")).userId;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUserRequestAction(OwnerId));
    dispatch(GetUserNumbers(OwnerId));
  }, []);

  const res = useSelector((item) => item.Owner.userrequst);
  const numbers = useSelector((item) => item.Owner.getnumbers);
  console.log(numbers);

  return [res, numbers];
};

export default GetUserRequst;
