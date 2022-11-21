import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../almacen/AppContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [toggle, setToggle] = useState(false);
  let toggleOpen = () => {
    return setToggle(!toggle)}
  const menuClass = `dropdown-menu${toggle ? " show" : ""}`;
  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="container">
        {""}
        <Link to="/">
          <div className="Rick & Morty">
            <span className="navbar-brand mb-0 h1">
              <img
                src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty-500x281.png"
                width="280px"
                height="100px"
              ></img>
            </span>
          </div>
        </Link>

        <div className="ml-auto">
          <div className="dropdown" onClick={() => toggleOpen()}>
            <button
              className="btn btn-success dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos{"" + store.favorito.length}
            </button>
            <ul className= {menuClass} aria-labelledby="dropdownMenuButton1">
              {store.favorito.length > 0
                ? store.favorito.map((item, index) => (
                    <li key={index}>
                      <i
                        className="fa fa-solid fa-trash"
                        onClick={() => actions.EliminarFavorito(index)}
                      >{item}</i>
                    </li>
                  ))
                : <li><b>¡Vacío!</b></li>}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
