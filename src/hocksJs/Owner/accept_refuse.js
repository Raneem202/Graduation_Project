import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AcceptUser } from "../../redux/actions/owner_action";
import notify from "../notfiy";

const useAcceptRefuse = () => {
  const [loading, setLoading] = useState(false);
  const [loadingRefuse, setLoadingRefuse] = useState(false);
  const dispatch = useDispatch();

  const accept = async (id) => {
    setLoading(true);
    await dispatch(
      AcceptUser({
        id: id,
        accept: true,
      })
    );
    setLoading(false);
  };

  const refuse = async (id) => {
    setLoadingRefuse(true);
    await dispatch(
      AcceptUser({
        id: id,
        accept: false,
      })
    );
    setLoadingRefuse(false);
  };

  const res = useSelector((state) => state.Owner.accept);

  useEffect(() => {
    if (!loading && res && res.status === 200) {
      notify("It has been accepted", "success");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [loading, res]);

  useEffect(() => {
    if (!loadingRefuse && res && res.status === 200) {
      notify("It has been deleted", "warn");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  }, [loadingRefuse, res]);

  return [accept, refuse];
};

export default useAcceptRefuse;
