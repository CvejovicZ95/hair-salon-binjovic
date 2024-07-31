import React from "react";
import "./Footer.scss";
import { Logo2 } from "../../logo2/Logo2";
import { MdLocationPin } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import config from "../../../config.json";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Logo2 />
      <div className="footer-all-sections">
        <div className="footer-section1">
          <div>
            <MdLocationPin className="react-icon" />
            <p>{config.address}</p>
            <MdPhone className="react-icon" />
            <p>{config.phoneNumber}</p>
          </div>
        </div>

        <div className="footer-section2">
          <div>
            <h2>RADNO VREME:</h2>
            <h3>{config.workingTime}</h3>
            <h3>{config.workingTimeWeekend}</h3>
          </div>
        </div>
        <div className="footer-section3">
          <div>
            <a href={config.instagramUrl}>
              <IoLogoInstagram className="react-icon" />
            </a>
            <MdEmail className="react-icon" />
          </div>
        </div>
      </div>
      <div className="map">
        <iframe
          className="map-iframe"
          src={config.googleMapUrl}
          width={"1000px"}
          height={"300px"}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
      <p>&copy; All Rights Reserved </p>
    </footer>
  );
};
