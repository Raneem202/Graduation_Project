import React from "react";
import img from "../../Components/images/Group11.png";

const Notification = ({ item }) => {
  function convertDateToDays(dateString) {
    const dateParts = dateString.split("T")[0].split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1; // months are zero-based
    const day = parseInt(dateParts[2]);

    const date = new Date(year, month, day);
    const today = new Date();

    const millisecondsInDay = 1000 * 60 * 60 * 24;

    const differenceInMilliseconds = today - date;
    const days = Math.floor(differenceInMilliseconds / millisecondsInDay);

    // If the result is 0 days, calculate the difference in seconds, minutes, or hours
    if (days === 0) {
      const seconds = Math.floor(differenceInMilliseconds / 1000);
      if (seconds < 60) {
        return seconds + " seconds";
      }
      const minutes = Math.floor(differenceInMilliseconds / (1000 * 60));
      if (minutes < 60) {
        return minutes + " minutes";
      }
      const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
      return hours + " hours";
    }

    return days + " days";
  }

  // Example usage:
  const dateString = item.date;
  const result = convertDateToDays(dateString);
  console.log(result);

  return (
    <div className=" w-100  mt-2 overflow-hidden popup-border">
      <div className=" popupp bord">
        <img src={img} alt="img"></img>
        <div>
          <p className="pra fw-bold">
            {item.userName}{" "}
            {item.type === "view" ? (
              <span className="fw-normal text-secondary">
                {item.type} your profile
              </span>
            ) : item.type === "comment" ? (
              <span className="fw-normal text-secondary">
                {item.type} on your post{" "}
              </span>
            ) : item.type === "react" ? (
              <span className="fw-normal text-secondary">
                {item.type} on your post{" "}
              </span>
            ) : item.type === "OwnerRequest" ? (
              <span className="fw-normal text-secondary">
                Request for an apartment{" "}
              </span>
            ) : item.type === "Accept" ? (
              <span className="fw-normal text-secondary">
                {item.type}ed your request{" "}
              </span>
            ) : null}
          </p>
          <p className="text-secondary">{result} days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
