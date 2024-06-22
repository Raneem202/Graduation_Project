import React from "react";
import "../../style.css";
import img from "../../Components/images/Group11.png";
import Adminnavbar from "../admin/Adminnavbar";
import Notification from "../admin/notification";
import GetAllNotificationHock from "../../hocksJs/Owner/get-all-notification";
import { faNode } from "@fortawesome/free-brands-svg-icons";

const OwnerNotification = () => {
  const [Notifications] = GetAllNotificationHock();
  console.log(Notifications);
  return (
    <div className=" mt-4 ms-4 mb-5 notifi overviewtog">
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
          {Notifications && Notifications.length >= 1
            ? Notifications.map((item, index) => {
                return <Notification key={index} item={item}></Notification>;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default OwnerNotification;
