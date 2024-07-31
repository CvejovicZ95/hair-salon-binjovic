import React from "react";
import { Header } from "./header/Header";
import { About } from "./about/About";
import { LayoutServices } from "./layoutServices/LayoutServices";
import { Team } from "./team/Team";
import { Footer } from "./footer/Footer";
import "./Layout.scss";

export const Layout = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <LayoutServices />
      <Team />
      <Footer />
    </div>
  );
};
