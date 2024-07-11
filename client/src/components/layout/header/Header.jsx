import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { Logo } from "../../logo/Logo";
import { scrollToTop } from "../../../hooks/useScrollToTop";
import "./Header.css";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleNavClick = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="video-container">
        <video autoPlay muted loop id="video-bg">
          <source src="video/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="nav">
        <div className="logo">
          <Logo />
          <Link to={"/gallery"}><img
            src="gallery.png"
            width={"250px"}
            alt="gallery"
            className="gallery"
            onClick={scrollToTop}
          /></Link>
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
            <li onClick={() => handleNavClick("salon")}>Salon</li>
            <li onClick={() => handleNavClick("services")}>Usluge</li>
            <Link to={"/products"}><li onClick={() => handleNavClick("products")}>Preparati</li></Link>
            <li onClick={() => handleNavClick("team")}>Naš Tim</li>
            <li onClick={() => handleNavClick("footer")}>Kontakt</li>
          </ul>
        </nav>
      </div>
      <div className="heading">
        <h1>Hair Salon Binjović House of Style</h1>
      </div>
    </header>
  );
};
