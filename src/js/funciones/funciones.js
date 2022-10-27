import axios from "axios";

const todosPersonajes = async (state) => {
  const peticion = await axios.get("https://swapi.dev/api/people");
  state(peticion.data.results);
};

const unicoPersonaje = async (id, state) => {
  const peticion = await axios.get("https://swapi.dev/api/people/" + id);
  console.log(peticion);
};

export { todosPersonajes, unicoPersonaje };
