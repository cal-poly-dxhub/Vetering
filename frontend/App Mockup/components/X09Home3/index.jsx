import React from "react";
import { Link } from "react-router-dom";
import Group from "../Group";
import "./X09HomeNew2.css";
import CardComp from "../CardComponent";
import CardCompPerson from "../CardComponentPerson";
import dumprun from "./dumprun.png";
import transportation from "./transportation.png";
import food from "./food.png";
function X09HomeNew(props) {
  const { place, login1, login2, iconHome, iconPlus, iconUser } = props;

  return (
    <div className="container-center-horizontal">
      <div className="overlap-group4">
        <div className="flex-row">
          <h1 className="place poppins-medium-daintree-24px">HOME</h1>
        </div>

        <div className="overlap-group2">
          <h6 className="place">Last 3 requested services</h6>
          <div className="rectangle-2145">
            <Link to="/request-info2">
              <CardComp
                servicename="Food"
                date="No Volunteer Offers Yet"
                photo={food}
                acolor="white"
              />
            </Link>
            <Link to="/request-info11">
              <CardComp
                servicename="Dumpster Run"
                date="Volunteer has offered to help"
                photo={dumprun}
                acolor="rgb(30, 215, 96)"
              />
            </Link>
          </div>
        </div>
        <div className="overlap-group">
          <div className="login poppins-medium-white-14px">{login1}</div>
        </div>
        <div className="group-8945">
          <div className="overlap-group1">
            <Link to="/13-profile">
              <div className="login-1 poppins-medium-white-14px">Profile</div>
            </Link>
          </div>
        </div>
        <div className="group-container">
          {/* <div className="group-8946">
            <img className="house-128-4" src={iconHome} />
          </div> */}
          <Link to="/10-new-post2">
            <div className="group-8947">
              <img className="plus-2-512-4" src={iconPlus} />
            </div>
          </Link>
          {/* <Link to="/13-profile">
            <div className="group-8948">
              <img className="image-14" src={iconUser} />
            </div>
          </Link> */}
        </div>
        <div className="home-indicator"></div>
      </div>
    </div>
  );
}

export default X09HomeNew;
