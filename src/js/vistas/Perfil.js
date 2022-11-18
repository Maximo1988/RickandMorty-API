import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../almacen/AppContext";

const Profilecharacter = ({ item, uid }) => {
  const { actions, store } = useContext(Context);
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <img
        src={`https://rickandmortyapi.com/api/character/${uid}.jpg`}
        className="card-img-top"
        alt={item.name}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">
          <li>{`Location: ${item.location}`}</li>
          <li>{`Episode: ${item.episode}`}</li>
          <li>{`Status: ${item.status}`}</li>
        </p>
        <div className="row">
          <div className="col-8">
            <Link to={`/Unicopsj/${uid}`} className="btn btn-primary">
              Descripción
            </Link>
          </div>
          <div className="col-3">
            <button
              onClick={() => {
                store.favorito.find((element) => {
                  return element === item.name;
                })
                  ? ""
                  : actions.AgregarFavorito(item.name);
              }}
              type="button"
              className="btn btn-outline-warning"
            >
              <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Profilecharacter.propTypes = {
  item: PropTypes.object,
};
export default Profilecharacter;