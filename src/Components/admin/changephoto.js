import React, { useState } from "react";

function ProfilePicChanger() {
  const dataUser = JSON.parse(localStorage.getItem("data-user")) || {};
  const userId = dataUser.userId;
  const [profilePic, setProfilePic] = useState(
    localStorage.getItem(`profilePic_${userId}`) || null
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
        localStorage.setItem(`profilePic_${userId}`, e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-pic-changer">
      {profilePic ? (
        <img
          src={profilePic}
          alt="Profile"
          style={{
            width: "130px",
            height: "130px",
            marginLeft: "30px",
            borderRadius: "50%",
          }}
        />
      ) : (
        <div className="no-photo-placeholder ">No Photo</div>
      )}
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <br />
      <label
        htmlFor="fileInput"
        className="btn-changer"
        style={{
          textAlign: "center",
          paddingTop: "13px",
          width: "222px",
          height: "55px",
          borderRadius: "19px",
          color: "white",
        }}
      >
        {profilePic ? "Change Profile Pic" : "Choose Profile Pic"}
      </label>
    </div>
  );
}

export default ProfilePicChanger;
