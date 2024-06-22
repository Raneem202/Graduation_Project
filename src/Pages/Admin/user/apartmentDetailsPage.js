import React, { useEffect, useState } from "react";
import Adminnavbar from "../../../Components/admin/Adminnavbar";
import ShowImages from "../../../Components/user/showImages";
import { Container } from "react-bootstrap";
import Details from "../../../Components/user/details";
import UserInformation from "../../../Components/user/userInformation";
import Comments from "../../../Components/user/Comment";
import GetApartmentDetails from "../../../hocksJs/User_hocks/get_apartment_details";
import { useParams } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddReact from "../../../hocksJs/User_hocks/add_React";

const ApartmentDetailsPage = () => {
  const { id } = useParams();
  const [res, AllComments, Clicker] = GetApartmentDetails(id);
  console.log(AllComments);
  let ImageSlider = "";
  if (AllComments && AllComments.data) {
    ImageSlider = AllComments.data.apartmentsImages;
  }
  let Conmmentss = "";
  if (AllComments) {
    Conmmentss = AllComments.data.apartmentComments;
  }
  const [Submit] = AddReact(id);

  return (
    <Container>
      <div className="col-sm-8 m-auto mt-3 mb-5">
        <Adminnavbar></Adminnavbar>
      </div>

      <ShowImages Images={ImageSlider}></ShowImages>
      <Details
        AllDetails={AllComments ? AllComments.data : null}
        Like={Submit}
        id={id}
      ></Details>
      <UserInformation
        Owner={AllComments ? AllComments.data : null}
      ></UserInformation>
      <Comments Comments={Conmmentss} id={id} onpress={Clicker}></Comments>
      <ToastContainer></ToastContainer>
    </Container>
  );
};

export default ApartmentDetailsPage;
