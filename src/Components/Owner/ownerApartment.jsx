import React, { useState } from "react";
import "../../App.css";
import Adminnavbar from "../admin/Adminnavbar";
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
const OwnerAddApartment = () => {
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
  const [city, setcity] = useState("");
  const [Gender, setgender] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    setSelectedVideo(file);
    // You can perform further actions with the selected video file here
  };
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
      formData.append("City", city);
      formData.append("Gender", Gender);
      
      if (royalDocument) {
        formData.append("RoyalDocument", royalDocument);
      }

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
      setcity("");
      setgender("");
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
              <h5 className="notification-header mt-4 mb-4">
                Flat
                <div></div>
              </h5>
              <Row>
                <Col >
              <button
                className="btn  btn-sm  col-md-5"
                style={{ color: "white", background: "#7A4CFC" , height:"45px" , marginTop:"15px", marginLeft:"200px" }}
                onClick={handleAddApartment}
              >
                {loading ? "Loading..." : "Save"}
                  </button>
                </Col>
                <Col >
              <div className="offset-md-11 col-md-9"
                style={{
                  // height: "35px",
                  borderRadius: "14px",
                  backgroundColor: "#A1DF9B",
                  marginTop: "20px"
                }}
              >
                <Link
                  to="/owner/showapartment"
                  className="btn"
                  style={{ display: "flex" ,width:"180px" }}
                >
                  <div className=""
                    style={{
                      width: "25px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "black",
                      // marginTop: "-2px",
                      marginLeft: "-5px",
                      marginRight:"36px"
                    }}
                  >
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </div>{" "}
                  FLAT
                </Link>
                </div>
                </Col>
              </Row>
            </div>
            <div className="addform">
              <p className="pra fw-bold labels"> Title</p>
              <input
                className=" addinput col-md-12 p-2 "
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <p className="pra fw-bold labels"> Apartment Images</p>
              <div className="apartimg col-md-15">
                {!coverImage ? (
                  <div className="btnphoto2 col-md-9">
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
  <div style={{display:"flex" }}>{pics.map((pic, index) => (
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
  ))}</div>
  <div style={{ marginTop: "80px" }}>
    <div className="btnphoto5 col-md-9">
      <p className="drop">
        Choose Additional Images{" "}
        <label className="browse" htmlFor="additional-pic-upload">
          Browse
        </label>
        <input
          id="additional-pic-upload"
          type="file"
          style={{ display: "none" }}
          onChange={(e) => setPics([...pics, e.target.files[0]])}
        />
      </p>
      <p className="lightline">supports: PNG, JPG, JPEG, WEBP</p>
    </div>
  </div>
              </div>
              <div style={{ display: "flex" }}>
              <div style={{marginTop:"30px"}}>
                <span className="pra fw-bold labels">
                  City
                </span>
                <select onChange={(e)=> setcity(e.target.value)} style={{width:"120px", height:"40px", borderRadius:"15px" , marginLeft:"15px", border:"2px solid black"}}>
                  <option>Dammita</option>
                  <option>New Dammita</option>
                  <option>Ras Elbar</option>
                  <option>ELmansoura</option>
                  <option>ELzarqa</option>
                  <option>POrt Sa3ied</option>
                  <option>Cairo</option>
                  <option>New Mansoura</option>
                  
                </select>
              </div>
              <div className="offset-md-2" style={{marginTop:"30px" }}>
                <span className="pra fw-bold labels">
                  Gender
                </span>
                <select onChange={(e)=> setgender(e.target.value)} style={{width:"120px", height:"40px", borderRadius:"15px" , marginLeft:"15px", border:"2px solid black"}}>
                  <option>Male</option>
                  <option>Female</option>
                  
                </select>
              </div>
              </div>
              <p className="pra fw-bold labels">Address</p>
              <input
                className="addinput col-md-12"
                type="text"
                
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
              <p className="pra fw-bold labels">
                {" "}
                Information about the Apartment
              </p>
              <input
                className=" addinput col-md-12 additionedit"
                type="text"
                
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              
              <p className="pra fw-bold labels">Ownership Contract Document Authentication</p>
              <div className="apartimg col-md-15 ">
                <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                  <div className="btnphoto2 col-md-10 btnowner">
                    <img className="photoowner" style={{width:" 8.3vw",
                                  marginTop: "6vh",
                                  marginLeft:" 8vw"}}  src={img2} alt="" />
                    <p className="drop">
                      Drop your image here, or{" "}
                      <label className="browse" htmlFor="doc-upload">
                        Browse
                      </label>
                      <input
                        id="doc-upload"
                        type="file"
                        style={{ display: "none" }}
                        onChange={(e) => setRoyalDocument(e.target.files[0])}
                      />
                    </p>
                    <p className="lightline">supports: PNG, JPG, JPEG, WEBP</p>
                  </div>
                </div>
                {royalDocument && (
                  <div className="photo1 offset-md-2" >
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
                        src={URL.createObjectURL(royalDocument)}
                        alt="img"
                      
                      />
                      <button
                        className="btn btn-sm btn-danger"
                        style={{ position: "absolute", top: 0, right: 0 }}
                        onClick={() => setRoyalDocument(null)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div style={{display:"flex"}}>
              <div style={{marginTop:"30px" ,  display:"flex"}}>
              <span className="pra fw-bold labels" >
                  Residents
                </span>
                <select onChange={(e) => setNumberOfUsers(e.target.value)} style={{width:"63px", height:"39px", borderRadius:"15px" , marginLeft:"15px", border:"2px solid black"}}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  </select></div>
                <div className="offset-md-2" style={{marginTop:"30px"  , display:"flex"}}>
                  <span className="pra fw-bold labels">
                  Rooms
                </span>
                <select onChange={(e) => setRoom(e.target.value)} style={{width:"63px", height:"39px", borderRadius:"15px" , marginLeft:"15px", border:"2px solid black"}}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  </select></div>
                </div>
              
              <p className="pra fw-bold labels">Price per Month</p>
              <input
                className="addinput col-md-12"
                type="number"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
              <p className="pra fw-bold labels">Upload Video</p>
              <div className="apartimg col-md-15">
                <div className="btnphoto2 col-md-10 btnowner">
                  <img className="videoowner" src={img3} alt="img"></img>
                  <p className="drop">
                    Drop your Video here, or
                    <label className="browse" htmlFor="video-upload">
                    Browse
                    </label>
                    <input
                      type="file"
                      id="video-upload"
                      accept="video/*"
                      onChange={handleVideoUpload} 
                      style={{ display: "none" }}
                    />
                  </p>
                </div>
                <p className="wordin">Import from URL </p>
                <input
                  className="addinput col-md-11 inputin additionedit"
                  type="text"
                  value={video}
                  onChange={(e) => setVideo(e.target.value)}
                />
                <label className="custom-file-upload uploader offset-md-3">
                  {/*Upload*/}
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
export default OwnerAddApartment;
