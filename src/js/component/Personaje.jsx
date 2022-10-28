 import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../funciones/funciones";

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null)
  const params = useParams()

  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje)
  }, [])

  return (
  <>
    {personaje != null ? (
      <div>
        <h2>Personaje con el id {params.id}</h2>
        <p>con el nombre {personaje.name}</p>
        <img src={personaje.image} alt="" />
      </div>
    ) : ('no hay personaje')}
  </>
  );
};

export default Personaje;