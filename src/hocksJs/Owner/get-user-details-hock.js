import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSpiceficUserAction } from "../../redux/actions/owner_action";

const GetUserDetailsHock = (id) => {
  //   console.log(id);

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [College, setCollege] = useState("");
  const [University, setUniversity] = useState("");
  const [role, setRole] = useState("");
  const [view, setView] = useState("");
  const [apartments, setApartments] = useState("");
  const [Image, setImage] = useState("");

  const idAdminOrOwner = JSON.parse(localStorage.getItem("data-user")).userId;
  //   console.log(idAdminOrOwner);
  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetSpiceficUserAction(id, idAdminOrOwner));
      setLoading(false);
    };

    get();
  }, []);

  const res = useSelector((item) => item.Owner.userdetails);
  //   console.log(res);
  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.statusCode === 200 && res.data.data) {
        // console.log(res.data.data);
        setName(res.data.data.userName);
        setEmail(res.data.data.email);
        setPhone(res.data.data.phone);
        setType(res.data.data.gender);
        setRole(res.data.data.roles);
        setUniversity(res.data.data.university);
        setCollege(res.data.data.college);
        setView(res.data.data.views);
        setApartments(res.data.data.apartments);
        setImage(res.data.data.imagePath);
      }
    }
  }, [loading]);

  return [
    loading,
    name,
    email,
    phone,
    type,
    College,
    University,
    role,
    view,
    apartments,
    Image,
  ];
};

export default GetUserDetailsHock;
