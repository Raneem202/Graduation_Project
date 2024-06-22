import React from "react";
import Adminnavbar from "./Adminnavbar";
import "../../style.css";
import img from "../../Components/images/Group11.png";
import Notification from "./notification";
import GetAllNotificationHock from "../../hocksJs/Owner/get-all-notification";

const AdminNotification = () => {
  const [Notifications] = GetAllNotificationHock();

  return (
    <div className=" mt-4 ms-4 editprofi overviewtog">
      <Adminnavbar></Adminnavbar>

      <div>
        <h4 className="notification-header mt-4 mb-4">
          Notifications
          <div></div>
        </h4>
        {/* popupp */}
        <div className=" m-auto">
          <div className="popup rounded-3 text-white ">
            <img src={img} alt="img"></img>
            <div>
              <p className="pra">We released some new features</p>
              <p>Check them out!</p>
            </div>
          </div>

          {/* comment */}
          {Notifications && Notifications.length >= 1 ? (
            Notifications.map((item, index) => {
              return <Notification key={index} item={item}></Notification>;
            })
          ) : (
            <h4 className="text-center mt-5">There are no notifications</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminNotification;
