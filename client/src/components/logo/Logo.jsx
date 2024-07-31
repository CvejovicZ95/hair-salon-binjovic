import React from "react";
import "./Logo.scss";
import { Link } from "react-router-dom";
export const Logo = () => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link to={"/"}>
      <img
        className="logo-binjovic"
        src="/binjovic.png"
        width="150px"
        alt="logo"
        onClick={handleLogoClick}
      />
    </Link>
  );
};
