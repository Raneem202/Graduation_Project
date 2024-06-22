import React, { useState } from "react";
import "../../../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [roomQuantity, setRoomQuantity] = useState(1);
  const [priceRange, setPriceRange] = useState(5000);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const incrementRoomQuantity = () => {
    setRoomQuantity(roomQuantity + 1);
  };

  const decrementRoomQuantity = () => {
    if (roomQuantity > 1) {
      setRoomQuantity(roomQuantity - 1);
    }
  };
   const handlePriceRangeChange = (event) => {
     setPriceRange(parseInt(event.target.value));
   };

  return (
    <div className="sidebar-container">
      {/* Dark overlay */}
      {showSidebar && <div className="overlay" onClick={toggleSidebar}></div>}
      {/* Sidebar */}
      <div className={`sidebar ${showSidebar ? "active" : ""}`}>
        {/* Sidebar content */}
        <h5 style={{ marginTop: "10px", marginLeft: "20px" }}>
          FILTER BY
          <hr style={{ width: "90px" }} />
        </h5>
        <ul>
          <li>
            <h6 style={{ marginLeft: "-10px" }}>PRICE</h6>
            <div style={{ marginTop: "10px", marginLeft: "-10px" }}>
              <span>Range </span> <span id="priceRangeValue">{priceRange}</span>{" "}
              <br />
              <input
                className="tt"
                type="range"
                min="2000"
                max="9000"
                value={priceRange}
                id="priceRangeSlider"
                onChange={handlePriceRangeChange}
              />
            </div>
          </li>
          <li style={{ marginTop: "30px" }}>
            <h6 style={{ marginLeft: "-10px" }}>FILTER </h6>
            <input
              style={{ marginLeft: "-9px" }}
              type="radio"
              id="Women"
              name="gender"
            />
            <label for="Women">Women</label>
            <br />
            <input
              style={{ marginLeft: "-8px" }}
              type="radio"
              id="Men"
              name="gender"
            />
            <label for="Men">Men</label>
          </li>

          <li style={{ marginTop: "30px", marginLeft: "-10px" }}>
            <h6> CITY</h6>{" "}
            <select
              style={{
                marginTop: "10px",
                width: "180px",
                height: "40px",
                borderRadius: "15px",
                marginLeft: "15px",
                border: "2px solid black",
              }}
            >
              <option>Dammita</option>
              <option>New Dammita</option>
              <option>Ras Elbar</option>
              <option>ELmansoura</option>
              <option>ELzarqa</option>
              <option>POrt Sa3ied</option>
              <option>Cairo</option>
              <option>New Mansoura</option>
            </select>
          </li>
          <li>
            <h6 style={{ marginTop: "50px", marginLeft: "-10px" }}>
              USERS IN APARTMENT
            </h6>

            <div
              style={{
                marginTop: "15px",
                marginLeft: "60px",
                border: "1px solid gray",
                width: "110px",
                borderRadius: "7px",
              }}
            >
              <button
                onClick={decrementQuantity}
                id="decrement"
                class="btn btn-secondary"
                style={{
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                -
              </button>
              <input
                type="text"
                id="quantityInput"
                value={quantity}
                readonly
                style={{
                  width: "40px",
                  textAlign: "center",
                  height: "37px",
                  borderRadius: "5px",
                }}
              />
              <button
                id="increment"
                className="btn btn-secondary"
                onClick={incrementQuantity}
                style={{ backgroundColor: "white" }}
              >
                +
              </button>
            </div>
          </li>
          <li>
            <h6 style={{ marginTop: "50px", marginLeft: "-10px" }}>
              rooms in apartment
            </h6>{" "}
            <div
              style={{
                marginTop: "15px",
                marginLeft: "60px",
                border: "1px solid gray",
                width: "110px",
                borderRadius: "7px",
              }}
            >
              <button
                id="decrement"
                onClick={decrementRoomQuantity}
                class="btn btn-secondary"
                style={{
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                -
              </button>
              <input
                type="text"
                id="quantityInput"
                value={roomQuantity}
                readonly
                style={{
                  width: "40px",
                  textAlign: "center",
                  height: "37px",
                  borderRadius: "5px",
                }}
              />
              <button
                id="increment"
                onClick={incrementRoomQuantity}
                className="btn btn-secondary"
                style={{ backgroundColor: "white" }}
              >
                +
              </button>
            </div>
          </li>
        </ul>
        <div style={{ marginTop: "40px", marginLeft: "45px" }}>
          <button
            style={{
              width: "90px",
              height: "40px",
              borderRadius: "5px",
              color: "white",
              backgroundColor: "#003F62",
              marginLeft: "10px",
            }}
          >
            search
          </button>
          <button
            style={{
              width: "90px",
              height: "40px",
              borderRadius: "5px",
              color: "#003F62",
              backgroundColor: "white",
              border: "1px solid #003F62",
              marginLeft: "20px",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
      <button
        style={{ width: "65px", height: "61px", borderRadius: "9px" }}
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon style={{ fontSize: "30px" }} icon={faBars} />
      </button>
    </div>
  );
};

export default Sidebar;
