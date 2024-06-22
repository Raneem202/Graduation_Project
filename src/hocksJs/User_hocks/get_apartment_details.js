import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetApartdetailsAction } from "../../redux/actions/user_action";
const GetApartmentDetails = (id) => {
  const [loading, setLoading] = useState(true);
  const [AllDetails, setAllDetails] = useState("");
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetApartdetailsAction(id, 1, 3));
      setLoading(false);
    };

    get();
  }, []);

  const Clicker = async (e) => {
    await dispatch(GetApartdetailsAction(id, e, 3));
  };

  const res = useSelector((item) => item.User.Details);
  if (res) {
    console.log(res.status);
  }
  let AllComments;
  if (res && res.status === 200) {
    AllComments = res.data;
  } else if (res && res.status === 400) {
    // window.location.reload();
    console.log("wrong");
  }
  console.log(AllComments);
  useEffect(() => {
    if (loading === false) {
      if (res && res.statusCode === 200) {
        setAllDetails(res.data.data);
      }
    }
  }, [loading]);

  return [res, AllComments, Clicker];
};

export default GetApartmentDetails;
