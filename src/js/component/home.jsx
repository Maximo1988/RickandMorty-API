import React, {useEffect, useState} from "react";
import {todosPersonajes} from "../funciones/funciones";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [personajes, setPersonajes] = useState(null);

	useEffect(() => {
	  todosPersonajes(setPersonajes);
	}, []);
  
	return (
	  <div>
		{personajes != null
		  ? personajes.map((personaje) => (
			  <div key={personaje.id}>
				<a href={"/personaje/${personajes.id"}>{personaje.name}</a>
				<img src={personaje.image} alt="" />
			  </div>
			))
		  : "no hay personajes"}
	  </div>
	);
  }; 

export default Home;
