import React, {useEffect, useState} from "react";
import {todosPersonajes} from "../funciones/funciones";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [personajes, setPersonajes] = useState(null)

	useEffect(() => {
	  todosPersonajes(setPersonajes)
	}, [])
  
	return (
	  <>
	  <h2>Rick & Morty Characters</h2>	
		{personajes != null ? (
			personajes.map(personaje => (
			  <div key={personaje.id}>
				<a href={'/personaje/${personaje.id}'}>{personaje.name}</a>
			  </div>
			))
		)  : ('no hay personajes')}
	  </>
	);
  }; 

export default Home;
