import React from "react";
import { Link } from "react-router-dom";
import Check from "../Check";
import "./X02SignIn.css";
import phone from "../../static/img/phone-notch@3x.png";
import pass from "../../static/img/group-7992@1x.png";
import feather from "../../static/img/feather-icon---chevron-left@2x.svg";
function X02SignIn(props) {
  const {
    signIn,
    x39908191,
    place,
    phoneNotch,
    inputType1,
    inputPlaceholder1,
    inputType2,
    inputPlaceholder2,
    group7992,
    login,
  } = props;

  return (
    <div className="container-center-horizontal">
      {/* <div className="x02-sign-in screen"> */}
      <div className="overlap-group3-3">
        <div className="flex-row-2">
          <a href="javascript:history.back()">
            <div className="group-8946-2">
              <img className="feather-icon-chevron-left" src={feather} />
            </div>
          </a>
          <div className="sign-in poppins-medium-daintree-16px">{signIn}</div>
        </div>
        <img
          className="x3990819-1"
          src={x39908191}
          style={{ borderRadius: 20 }}
        />
        <div className="place-2 poppins-medium-daintree-24px">{place}</div>
        <div className="overlap-group1-4">
          <img className="phone-notch" src={phone} />
          <input
            className="mobile-number poppins-normal-shuttle-gray-14px"
            name="mobilenumber"
            placeholder={inputPlaceholder1}
            type={inputType1}
          />
        </div>
        <div className="overlap-group2-3">
          <img
            className="group-7976"
            src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-5/177800/218-512.png"
          />
          <input
            className="password poppins-normal-shuttle-gray-14px"
            name="password"
            placeholder={inputPlaceholder2}
            type={inputType2}
          />
        </div>
        <Check />
        <Link to="/aahome">
          <div className="group-8945-1">
            <div className="overlap-group-6">
              <div className="login-6 poppins-medium-white-14px">Sign In</div>
            </div>
          </div>
        </Link>
        <Link to="/03-sign-up-page">
          <div className="group-8945-1">
            <div className="overlap-group-6">
              <div className="login-6 poppins-medium-white-14px">{login}</div>
            </div>
          </div>
        </Link>
        <div className="home-indicator-6"></div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default X02SignIn;
