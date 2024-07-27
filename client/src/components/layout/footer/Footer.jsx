import "./Footer.scss";
import { Logo2 } from "../../logo2/Logo2";
import { MdLocationPin } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";

export const Footer=()=>{
  return(
    <footer className="footer" id="footer">
      <Logo2/>
      <div className="footer-all-sections">
        <div className="footer-section1">
          <div>
            <MdLocationPin className="react-icon" />
            <p>Dr Ilije Kolovića 31A, Kragujevac 34000</p>
            <MdPhone className="react-icon"/>
            <p>034 338599</p>
          </div>
        </div>

        <div className="footer-section2">
          <div>
            <h2>RADNO VREME:</h2>
            <h3>Utorak-Petak:10:00-18:00</h3>
            <h3>Subota-Nedelja:08:00-14:00</h3>
          </div>
        </div>
        <div className="footer-section3">
          <div>
          <a href="https://www.instagram.com/hairsalonbinjovic/?hl=en"><IoLogoInstagram className="react-icon"/></a>
          <MdEmail className="react-icon" />
          </div>
        </div>
      </div>
      <div className="map">
            <iframe  className="map-iframe" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11477.614359308871!2d20.9084215!3d44.0130538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475721236ab91de5%3A0x4f0116354f93267e!2sFRIZERSKI%20SALON%20BINJOVI%C4%86!5e0!3m2!1sen!2srs!4v1716200799517!5m2!1sen!2srs" width={"1000px"} height={"300px"} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
          </div>
      <p>&copy; All Rights Reserved </p>
    </footer>
  )
}