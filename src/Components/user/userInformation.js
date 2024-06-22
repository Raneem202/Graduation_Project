import React from "react";
import img from "../images/user login.png";
const UserInformation = ({ Owner }) => {
  // console.log(Owner);
  let OwnerImage = "";
  if (Owner) {
    OwnerImage = Owner.ownerImageUrl;
  }

  return (
    <div className="userdata mt-3 mb-3 pb-3">
      <img
        src={Owner && Owner.ownerImageUrl === null ? img : OwnerImage}
        className="imageUser"
      ></img>
      <div>
        <h4>{Owner ? Owner.ownerName : null}</h4>
        <h5>{Owner ? Owner.ownerApartmentCount : null} (عدد الشقق)</h5>
      </div>
    </div>
  );
};

export default UserInformation;
