import React, { useEffect, useState } from "react";
import MultiImageInput from "react-multiple-image-input";
import "../../style.css";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import videos from "../images/3 seconds timer.mp4";
import GetApartmentDetails from "../../hocksJs/Owner/get-apartmentDetails";
import { useParams } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const OwnerUpdateApartment = () => {
  const { id } = useParams();

  const [
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
  ] = GetApartmentDetails(id);

  console.log(GetVideo);
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };

  return (
    <div className="mt-4 ms-4 overviewtog">
      <h4 className="overview mt-4">
        Edit Apartment
        <div></div>
      </h4>

      <Row>
        <Col sm="12" md="6" className="imagesAndvideos">
          <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            max={4}
            className="onev"
            cropConfig={{ crop, ruleOfThirds: true }}
          />

          <div>
            <video
              src={GetVideo}
              width={"100%"}
              className="videoScreen rounded-3"
            ></video>

            <div className="uploadFile">
              <input
                type="file"
                name="videoInput"
                accept="video/*"
                className="vidiossss"
                onChange={changeVideo}
              ></input>
              <p>Add File URL</p>
              <p>Upload</p>
            </div>
          </div>
        </Col>
        <Col sm="12" md="6">
          <div className="ms-5 mb-4">
            <label className="form-label">Title</label>
            <input
              className="input-group-text text-end inputsEdit"
              type="text"
              value={title}
              onChange={changeTitle}
            ></input>
          </div>
          <div className="ms-5 mb-4">
            <label className="form-label">
              Information about the Apartment{""}
            </label>
            <textarea
              className="input-group-text text-end"
              id="floatingTextarea2"
              style={{ width: "100%" }}
              value={description}
              onChange={changeDescription}
            ></textarea>
          </div>
          <div className=" ms-5 mb-4 d-flex justify-content-between flex-wrap">
            <div>
              <label className="form-label">City</label>
              <select
                className="form-select selectCity"
                aria-label="Default select example"
                onChange={changeCity}
                value={city}
              >
                <option value="0">Select</option>
                <option value="Cairo">Cairo</option>
                <option value="Alexandria">Alexandria</option>
                <option value="Beheira">Beheira</option>
                <option value="Port Said">Port Said</option>
                <option value="Ismailia">Ismailia</option>
                <option value="Suez">Suez</option>
                <option value="Sharqia">Sharqia</option>
                <option value="Gharbia">Gharbia</option>
                <option value="Damietta">Damietta</option>
                <option value="Kafr El Sheikh">Kafr El Sheikh</option>
                <option value="Dakahlia">Dakahlia</option>
                <option value="Giza">Giza</option>
                <option value="Qalyubia">Qalyubia</option>
                <option value="Matrouh">Matrouh</option>
              </select>
            </div>

            <div>
              <label className="form-label">Gender</label>
              <select
                className="form-select selectCity"
                aria-label="Default select example"
                onChange={changeGender}
                value={gender}
              >
                <option value="0">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="ms-5 mb-4">
            <label className="form-label">Address</label>
            <input
              className="input-group-text text-end inputsEdit"
              type="text"
              value={address}
              onChange={changeAddress}
            ></input>
          </div>

          <div className="ms-5 mb-4 d-flex justify-content-between flex-wrap">
            {/* residents */}
            <div className="d-flex align-items-center">
              <label className="form-label mb-0">Residents</label>
              <select
                className="form-select selectResidents ms-3"
                aria-label="Default select example"
                value={Residents}
                onChange={changeResidents}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
              </select>
            </div>

            {/* Rooms */}
            <div className="d-flex align-items-center">
              <label className="form-label mb-0">Rooms</label>
              <select
                className="form-select selectRooms ms-3"
                aria-label="Default select example"
                value={Rooms}
                onChange={changeRooms}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          <div className="ms-5 mb-4">
            <label className="form-label">Price per Month</label>
            <input
              className="input-group-text text-end inputsEdit"
              type="number"
              value={Price}
              onChange={changePrice}
            ></input>
          </div>

          <div className=" text-center m-auto mt-5">
            <Button className="submitEdit mt-5" onClick={onSubmit}>
              Submit
            </Button>
          </div>
        </Col>
      </Row>
      {isPress ? (
        loadingEdit ? (
          <div className="loadingtrue">
            <Spinner animation="border" />
          </div>
        ) : null
      ) : null}
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default OwnerUpdateApartment;
