import React, { useState } from "react";
import "../../App.css";
import Adminnavbar from "./Adminnavbar";
import { Col, Row } from "react-bootstrap";
import img2 from "../../Components/images/Screenshot 2024-03-08 160632.jpg";
import img3 from "../../Components/images/Screenshot 2024-03-14 022022.jpg";
import { UsePostDataWithImage } from "../../hocks/usePostDate";
import notify from "../../hocksJs/notfiy";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const AdminAddApartment = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [room, setRoom] = useState(0);
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const [royalDocument, setRoyalDocument] = useState("");
  const [video, setVideo] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [pics, setPics] = useState([]);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddApartment = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("Name", name);
      formData.append("Description", description);
      formData.append("Price", price);
      formData.append("Room", room);
      formData.append("NumberOfUsers", numberOfUsers);
      formData.append("RoyalDocument", royalDocument);
      formData.append("video", video);
      formData.append("CoverImage", coverImage);
      formData.append("Address", address);

      pics.forEach((pic) => {
        formData.append("Pics", pic);
      });

      formData.append(
        "UserId",
        JSON.parse(localStorage.getItem("data-user"))?.userId || ""
      );

      const response = await UsePostDataWithImage(
        "/api/Owner/AddApartment",
        formData
      );

      if (response.data.statusCode === 200) {
        notify("Apartment added successfully", "success");
      }

      // clear the form
      setName("");
      setDescription("");
      setPrice(0);
      setRoom(0);
      setNumberOfUsers(0);
      setRoyalDocument("");
      setVideo("");
      setCoverImage(null);
      setPics([]);
      setAddress("");
    } catch (error) {
      if (error.response.data.message) {
        notify(error.response.data.message, "error");
        return;
      }
      Object.keys(error.response.data.errors).forEach((key) => {
        const errorMessage = error.response.data.errors[key][0];
        notify(errorMessage, "error");
      });
      // notify("Failed to add apartment", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" mt-4 ms-4">
      <Adminnavbar />
      <Row>
        <Col xs="12" md="7">
          <div className="mainDiv">
            <div className="title">
              <h4>Apartments</h4>
              <button
                className="btn  btn-sm col-md-2 offset-md-8"
                style={{ color: "white", background: "#7A4CFC" }}
                onClick={handleAddApartment}
              >
                {loading ? "Loading..." : "Save"}
              </button>
              <div
                style={{
                  marginLeft: "100px",
                  width: "250px",
                  height: "35px",
                  borderRadius: "14px",
                  backgroundColor: "#A1DF9B",
                }}
              >
                <Link
                  to="/admin/showapartment"
                  className="btn"
                  style={{ display: "flex" }}
                >
                  <div
                    style={{
                      width: "25px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "black",
                      marginTop: "-2px",
                      marginLeft: "-5px",
                    }}
                  >
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </div>{" "}
                  Apartments
                </Link>
              </div>
            </div>
            <div className="addform">
              <p className="pra fw-bold labels"> Title</p>
              <input
                className=" addinput "
                type="text"
                placeholder="Super deluxe apartment"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <p className="pra fw-bold labels"> Apartment Images</p>
              <div className="apartimg col-md-15">
                {!coverImage ? (
                  <div className="btnphoto2">
                    <p className="drop">
                      Choose Cover Image{" "}
                      <label className="browse" htmlFor="cover-upload">
                        Browse
                      </label>
                      <input
                        id="cover-upload"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setCoverImage(e.target.files[0])}
                      />
                    </p>
                    <p className="lightline">supports:PNG, JPG, JPEG, WEBP</p>
                  </div>
                ) : (
                  <div className="photo1">
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        className="photoimg"
                        src={URL.createObjectURL(coverImage)}
                        alt="img"
                      ></img>
                      {/* delete */}
                      <button
                        className="btn btn-sm btn-danger"
                        style={{ position: "absolute", top: 0, right: 0 }}
                        onClick={() => setCoverImage(null)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="apartimg col-md-15 mt-4">
                {pics.map((pic, index) => (
                  <div key={index} className="photo1">
                    <div
                      style={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        className="photoimg"
                        src={URL.createObjectURL(pic)}
                        alt="img"
                      />
                      <button
                        className="btn btn-sm btn-danger"
                        style={{ position: "absolute", top: 0, right: 0 }}
                        onClick={() => {
                          const newPics = [...pics];
                          newPics.splice(index, 1);
                          setPics(newPics);
                        }}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
                <div className="btnphoto2">
                  <p className="drop">
                    Choose Additional Images{" "}
                    <label className="browse" htmlFor="pic-upload">
                      Browse
                    </label>
                    <input
                      id="pic-upload"
                      type="file"
                      style={{ display: "none" }}
                      onChange={(e) => setPics([...pics, e.target.files[0]])}
                    />
                  </p>
                  <p className="lightline">supports:PNG, JPG, JPEG, WEBP</p>
                </div>
              </div>
              <p className="pra fw-bold labels">Address</p>
              <input
                className="addinput"
                type="text"
                placeholder="70th street New Damietta"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              <p className="pra fw-bold labels">
                {" "}
                Information about the Apartment
              </p>
              <input
                className=" addinput additionedit"
                type="text"
                placeholder="This apartment consists of 3 rooms, living room, bathroom and a kitchen each room 
              has 2 beds each which makes 6 bed in total, it also has Water Heater, Fridge, Washing Machine and an Oven."
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <p className="pra fw-bold labels">
                Ownership Contract Document Authentication
              </p>
              <div className="apartimg">
                <div className="btnphoto2 btnowner">
                  <img className="photoowner" src={img2} alt="img"></img>
                  <p className="drop ">
                    {" "}
                    Drop your image here, or{" "}
                    <button className="browse">Browse</button>
                  </p>
                  <p className="lightline">supports:PNG, JPG, JPEG, WEBP</p>
                </div>
                <p className="wordin">Import from URL </p>
                <input
                  className="addinput inputin additionedit"
                  type="text"
                  placeholder="Add File URL"
                />
                <label
                  htmlFor="doc-upload"
                  className="custom-file-upload uploader offset-md-3"
                >
                  Upload
                </label>
                <input
                  id="doc-upload"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => setRoyalDocument(e.target.files[0])}
                />
              </div>
              <p className="pra fw-bold labels"> Number of Residents</p>
              <input
                className="addinput"
                type="number"
                placeholder="6 residents"
                onChange={(e) => setNumberOfUsers(e.target.value)}
                value={numberOfUsers}
              />
              <p className="pra fw-bold labels">Price per Month</p>
              <input
                className="addinput"
                type="number"
                placeholder="6500 EGP"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              <p className="pra fw-bold labels">Upload Video</p>
              <div className="apartimg col-md-15">
                <div className="btnphoto2 btnowner">
                  <img className="videoowner" src={img3} alt="img"></img>
                  <p className="drop">
                    Drop your Video here, or
                    <button className="browse">Browse</button>
                  </p>
                </div>
                <p className="wordin">Import from URL </p>
                <input
                  className="addinput inputin additionedit"
                  type="text"
                  placeholder="Add File URL "
                  value={video}
                  onChange={(e) => setVideo(e.target.value)}
                />
                <label className="custom-file-upload uploader offset-md-3">
                  Upload
                </label>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <ToastContainer />
    </div>
  );
};
export default AdminAddApartment;
