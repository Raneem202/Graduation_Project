import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditApartmentDetailsAction,
  GetApartmentDetailsAction,
} from "../../redux/actions/owner_action";
import notify from "../notfiy";

const GetApartmentDetails = (id) => {
  //   console.log(id);
  const [images, setImages] = useState({});

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [Residents, setResidents] = useState("");
  const [Rooms, setRooms] = useState("");
  const [Price, setPrice] = useState("");
  const [videoApi, setVideoApi] = useState(null);
  const [GetVideo, setGetVideo] = useState("");
  const [isPress, setpress] = useState(false);
  const [gender, setGender] = useState("");

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };
  const changeCity = (e) => {
    setCity(e.target.value);
  };

  const changeVideo = (e) => {
    setVideoApi(e.target.files[0]);
  };
  const changeGender = (e) => {
    setGender(e.target.value);
  };

  const changeAddress = (e) => {
    setAddress(e.target.value);
  };
  const changeRooms = (e) => {
    setRooms(e.target.value);
  };
  const changePrice = (e) => {
    setPrice(e.target.value);
  };
  const changeResidents = (e) => {
    setResidents(e.target.value);
  };

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetApartmentDetailsAction(id));
      setLoading(false);
    };

    get();
  }, []);

  const res = useSelector((items) => items.Owner.apartmentdetails);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.data) {
        console.log(res.data.data);
        setData(res.data.data);
        setTitle(res.data.data.apartmentName);
        setDescription(res.data.data.apartmentDescription);
        setRooms(res.data.data.apartmentRooms);
        setResidents(res.data.data.apartmentUsers);
        setPrice(res.data.data.apartmentPrice);
        setCity(res.data.data.apartmentCity);
        setImages(res.data.data.apartmentPics);
        setAddress(res.data.data.apartmentAddress);
        setGetVideo(res.data.data.apartmentVideo);
        setCity(res.data.data.apartmentCity);
        setGender(res.data.data.apartmentGender);
      }
    }
  }, [loading]);

  const [loadingEdit, setLoadingEdit] = useState(true);

  // convert images url to file
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }
  // console.log(videoApi);

  //   convert URL To File
  const convertURLtoFile = async (url) => {
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
    return new File([data], Math.random(), metadata);
  };

  const onSubmit = async () => {
    let imgCover;

    if (images[0].length <= 550) {
      convertURLtoFile(images[0]).then((val) => (imgCover = val));
    } else {
      imgCover = dataURLtoFile(images[0], Math.random() + ".png");
    }

    let itemImages = [];
    //convert array of base 64 image to file
    Array.from(Array(Object.keys(images).length).keys()).map((item, index) => {
      if (images[index].length <= 500) {
        convertURLtoFile(images[index]).then((val) => itemImages.push(val));
      } else {
        itemImages.push(dataURLtoFile(images[index], Math.random() + ".png"));
      }
    });
    const form = new FormData();
    form.append("ApartmentId", id);
    form.append("Title", title);
    form.append("Description", description);
    form.append("Address", address);
    form.append("numberOfUsers", Residents);
    form.append("numberOfUsers", Residents);
    form.append("price", Price);
    form.append("Video", videoApi);
    form.append("CoverImage", imgCover);
    form.append("gender", gender);
    form.append("City", city);
    itemImages.map((item) => form.append("Pics", item));
    setpress(true);
    setLoadingEdit(true);

    await dispatch(EditApartmentDetailsAction(form));
    setLoadingEdit(false);
    setpress(false);
  };

  const resEdit = useSelector((item) => item.Owner.editapartment);

  useEffect(() => {
    if (loadingEdit === false) {
      console.log(resEdit.data);
      if (resEdit && resEdit.data && resEdit.data.statusCode === 200) {
        notify("The apartment has been modified", "success");

        setTimeout(() => {
          window.location.reload();
        }, 3500);
      } else {
        notify("There is an error", "error");
      }
    }
  }, [loadingEdit]);

  return [
    data,
    title,
    description,
    Rooms,
    Residents,
    Price,
    city,
    address,
    videoApi,
    images,
    setImages,
    changeTitle,
    changeDescription,
    changeAddress,
    changeCity,
    changePrice,
    changeRooms,
    changeResidents,
    changeVideo,
    onSubmit,
    GetVideo,
    isPress,
    loadingEdit,
    gender,
    changeGender,
  ];
};

export default GetApartmentDetails;
