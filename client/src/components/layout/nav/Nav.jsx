import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { Logo } from "../../logo/Logo";
import { scrollToTop } from "../../../hooks/useScrollToTop";
import "./Nav.css"

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <div className="nav">
      <div className="logo">
        <Logo />
        <Link to={"/gallery"}>
          <img
            src="gallery.png"
            width={"250px"}
            alt="gallery"
            className="gallery"
            onClick={scrollToTop}
          />
        </Link>
      </div>
      <div className="menu-toggle" onClick={toggleNav}>
        {isOpen ? (
          <div className="close-icon">
            <MdClose style={{ fontSize: "25px" }} />
          </div>
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>
      <nav className={`nav-bar ${isOpen ? "open" : ""}`}>
        <ul>
          <Link to={"/"}><li onClick={() => handleNavClick("salon")}>Salon</li></Link>
          <Link to={"/"}><li onClick={() => handleNavClick("services")}>Usluge</li></Link>
          <Link to={"/"}><li onClick={() => handleNavClick("team")}>Naš Tim</li></Link>
          <Link to={"/"}><li onClick={() => handleNavClick("footer")}>Kontakt</li></Link>
          <Link to={"/products"}><li className="buy-product" onClick={scrollToTop}>Kupi Preparat</li></Link>
        </ul>
      </nav>
    </div>
  );
};
