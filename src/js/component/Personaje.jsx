import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../funciones/funciones";

const Personaje = () => {
  const params = useParams();

  useEffect(() => {
    unicoPersonaje(params.id);
  }, [params]);

  return <div>Personaje con el id {params.id}</div>;
};

export default Personaje;