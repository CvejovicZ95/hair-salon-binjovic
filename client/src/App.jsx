import React from "react";
import { Layout } from "./components/layout/Layout";
import { Gallery } from "./components/layout/gallery/Gallery";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}/>

      <Route path="/gallery" element ={<Gallery/>}/>
    </Routes>
  );
}

export default App;
