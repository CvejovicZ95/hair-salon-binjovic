import "./Footer.css";
import { Logo } from "../../logo/Logo";
import { MdLocationPin } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";

export const Footer=()=>{
  return(
    <footer className="footer" id="footer">
      <Logo/>
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
      <div className="sponsor-logo">
          <img src="kerastase2.png" alt="kerastase" width={"200px"}/>
          <img src="loreal2.png" alt="kerastase" width={"200px"}/>
        </div>
      <p>&copy; All Rights Reserved </p>
    </footer>
  )
}