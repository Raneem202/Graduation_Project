import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import UserpaymentHock from "../../Pages/Admin/user/userpayment";

const Details = ({ AllDetails, Like, id }) => {
  const [Enroll] = UserpaymentHock(id);
  return (
    <div className="mt-4 pb-3 parent-details">
      <div className="apart-details">
        <div>
          <h2>{AllDetails ? AllDetails.apartmentName : null}</h2>
          <h4 className=" text-end text-secondary">
            {AllDetails ? AllDetails.apartmentPrice : null} EGp
          </h4>
        </div>
        <div className="borde">
          <div className="iconHeart" onClick={Like}>
            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
            <h4 className="fw-bold">
              {AllDetails ? AllDetails.apartmentLikes : null}
            </h4>
          </div>
        </div>
      </div>

      <div className="addresses mb-2">
        <div>
          <h5 className="text-end mt-3">
            {AllDetails ? AllDetails.apartmentCity : null}
          </h5>
          <h5 className="text-end mt-3">
            {" "}
            {AllDetails ? AllDetails.apartmentAddress : null}(Address)
          </h5>
          <h5 className="text-end mt-3">
            {AllDetails ? AllDetails.apartmentDescription : null}
          </h5>
          <h5 className="text-end mt-3">
            {AllDetails
              ? `${AllDetails.ownerApartmentCount} / ${AllDetails.studnetExistingIn} `
              : null}{" "}
          </h5>
        </div>
        <Button className=" enroll border-0 p-2 mt-3" onClick={Enroll}>
          Enroll
        </Button>
      </div>
    </div>
  );
};

export default Details;
