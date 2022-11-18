import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Profilecharacter from "./vistas/Perfil";
import { Unicopersonaje } from "./vistas/Unicopsj";
import injectContext from "./almacen/AppContext";
import { Footer } from "./component/footer";
import Inicio from "./component/inicio";



const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
            <Switch>

              <Route exact path="/"><Inicio></Inicio></Route>

              <Route exact path="/vistas/Perfil"><Profilecharacter></Profilecharacter></Route>

              <Route exact path="/vistas/Unicopsj/:uid"><Unicopersonaje></Unicopersonaje></Route>

            </Switch>

          <Footer />

      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
