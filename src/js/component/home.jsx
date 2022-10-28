import React, {useEffect, useState} from "react";
import {todosPersonajes} from "../funciones/funciones";

const Home = () => {
	const [personajes, setPersonajes] = useState(null)

	useEffect(() => {
	  todosPersonajes(setPersonajes)
	}, [])
  
	return (
	<div ClassName="container">
	  <div Classname="d-flex flex-row">
            <p class="h3 text-success ms-2"><b>Rick & Morty Characters</b></p>
	  	<ul>
				{personajes != null ? (
				personajes.map(personaje => (
			  		<div key={personaje.id}>
						<a href="#">{personaje.name}</a>
						<img src={personaje.image} alt=""/>
			  		</div>
				))
				)  : ('no hay personajes')}
		</ul>
	  </div>
	</div>
	);
  }; 

export default Home;
