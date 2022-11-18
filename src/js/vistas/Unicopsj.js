import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../almacen/AppContext";

export const Unicopersonaje = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getCharacter(params.uid);
  }, []);
  return (
    <div className="container col-8">
      <div className="row">
        <div className="col-lg-4 col-4">
          <img
            src={`https://rickandmortyapi.com/api/character/${params.uid}.jpg`}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-lg-8 col-8 text-center">
          <h1>
            {store.personaje.properties && store.personaje.properties.name}
          </h1>
          <p>{store.personaje.description}</p>
        </div>
      </div>
      <hr className="text-danger" />
      <div className="row">
        <div className="col-8">
          <table border="0" className="text-danger fw-bold text-center mx-auto">
            <thead>
              <tr>
                <th>Name</th>
                <th>Birth Year</th>
                <th>Gender</th>
                <th>Height</th>
                <th>Skin Color</th>
                <th>Eye Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {store.personaje?.uid === params.uid ? (
                  <td>
                    {store.personaje.properties &&
                      store.personaje.properties.name}
                  </td>
                ) : (
                  <td>Cargando...</td>
                )}
                <td>
                  {store.personaje.properties &&
                    store.personaje.properties.birth_year}
                </td>
                <td>
                  {store.personaje.properties &&
                    store.personaje.properties.gender}
                </td>
                <td>
                  {store.personaje.properties &&
                    store.personaje.properties.height}
                </td>
                <td>
                  {store.personaje.properties &&
                    store.personaje.properties.skin_color}
                </td>
                <td>
                  {store.personaje.properties &&
                    store.personaje.properties.eye_color}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
