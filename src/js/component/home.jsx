import React, {useEffect, useState} from "react";
import {todosPersonajes} from "../funciones/funciones";

const Home = () => {
	const [personajes, setPersonajes] = useState(null)

	useEffect(() => {
	  todosPersonajes(setPersonajes)
	}, [])
  
	return (
	<div className="container">
            <p className="h3 text-center text-success "><b>Rick & Morty Characters</b></p>
	  	<div className="h4 text-center text-danger">
			{personajes != null ? (
			personajes.map(personaje => (
			  	<div key={personaje.id}>
					<p><b>{personaje.name}</b></p>
  					<img className="rounded mx-auto d-block" src={personaje.image} alt="..."/>
			  	</div>
			))
			)  : ('no hay personajes')}
		</div>
	</div>
	);
  }; 

export default Home;
