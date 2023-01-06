import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/AppContext";

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
            src= {store.personaje && store.personaje.image}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-lg-8 col-8 text-center">
          <h1>
            {store.personaje && store.personaje.name}
          </h1>
        </div>
      </div>
      <hr className="text-danger" />
      <div className="row">
        <div className="col-8">
          <table border="0" className="text-danger fw-bold text-center mx-auto">
            <thead>
              <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Episodes</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                {store.personaje?.uid === params.uid ? (
                  <td>
                    {store.personaje &&
                      store.personaje.name}
                  </td>
                ) : (
                  <td>{store.personaje &&
                    store.personaje.name}</td>
                )}
                <td>
                  {store.personaje && store.personaje.location &&
                    store.personaje.location.name}
                </td>
                <td>
                  {store.personaje &&
                    store.personaje.episode}
                </td>
                <td>
                  {store.personaje &&
                    store.personaje.status}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
