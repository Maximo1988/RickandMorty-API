import React, { useContext } from "react";
import  {Context} from "../almacen/AppContext";
import Profilecharacter from "../vistas/Perfil";


const Inicio = (props) => {
	const { store, actions } = useContext(Context);
	
	return (
	  <div className="row flex-fill">
		<div className="col-2 bg-dark"></div>
			<div className="col-8 bg-light">
		  		<ul>
			  		<li>
						<h3 className="mt-3 text-success">Personajes</h3>
							<div className="row flex-row flex-nowrap MyScroll">
				  				{store.personajes.map((itempersonaje, i) => {
				  					return (
								<div className="col-3" key={i}>
									<Profilecharacter item={itempersonaje} uid={i+1}/>
								</div>
				  					);
									})}
							</div>
			  		</li>
		  		</ul>
			</div>
		<div className="col-2 bg-dark"></div>
	  </div>
	);
  };
  
  export default Inicio;
  