import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profilecharacter from "./vistas/Perfil";
import { Unicopersonaje } from "./vistas/Unicopsj";
import injectContext from "./store/AppContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Inicio from "./component/inicio.jsx";



const Layout = () => {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>

              <Route exact path="/" element={<Inicio></Inicio>}></Route>

              <Route exact path="/vistas/Perfil" element={<Profilecharacter></Profilecharacter>}></Route>

              <Route exact path="/Unicopsj/:uid" element={<Unicopersonaje></Unicopersonaje>}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
