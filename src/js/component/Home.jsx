import React from "react";  // 1. Importo React
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle
// 6 importar el componente y 7 utilizar en otro componente
import Navbar from "./Navbar.jsx";  // Componente con export default
import { Footer } from "./Footer.jsx";  // Componente con export const
import { Jumbotron } from "./Jumbotron.jsx";


// 2. Create your first component with PascalCase name.
const Home = () => {
	// 3. Code JS

	// 4. Retorno un solo y solo un elemento HTML
	return (
			<div className="text-center">
				<Navbar />
				<h1 className="text-center mt-5">{'Intro React'}</h1>
				<Jumbotron />
				{/* 
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working...
				</a>
				*/}

				<Footer/>
			</div>
	);
};


// 5. Exporto mi componente
export default Home;


// En el archivo donde voy a utilizar el componente
// 6 importar el componente
// 7 utilizarlo