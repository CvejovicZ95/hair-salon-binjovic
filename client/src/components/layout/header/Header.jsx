import React, { useState, useEffect } from "react";
import { Nav } from "../nav/Nav";
import "./Header.scss";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="video-container">
        <video autoPlay muted loop id="video-bg">
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
