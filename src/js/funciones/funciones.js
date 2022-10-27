import axios from "axios";

const todosPersonajes = async (state) => {
  const peticion = await axios.get("https://rickandmortyapi.com/api/character/")
  state(peticion.data.results);
};

const unicoPersonaje = async (id, state) => {
  const peticion = await axios.get("https://rickandmortyapi.com/api/character/" +id)
  console.log(peticion);
};

export { todosPersonajes, unicoPersonaje }
