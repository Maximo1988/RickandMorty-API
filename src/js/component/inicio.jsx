import React, { useContext } from "react";
import  {Context} from "../almacen/AppContext";
import Profilecharacter from "../vistas/Perfil";


const Inicio = (props) => {
	const { store, actions } = useContext(Context);
	
	return (
	  <div className="row flex-fill bg-dark">
			<h3 className="mt-3 text-success text-center"><b>Personajes</b></h3>
				<div className="row">
				  	{store.personajes.map((itempersonaje, i) => {
				  		return (
						<div className="col-12 col-sm-3" key={i}>
							<Profilecharacter item={itempersonaje} uid={i+1}/>
						</div>
				  		);
						})}
				</div>
	  </div>
	);
  };
  
  export default Inicio;
  