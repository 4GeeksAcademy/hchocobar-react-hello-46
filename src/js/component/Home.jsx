import React from "react";  // 1. Importo React
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle

// 2. Create your first component with PascalCase name.
const Home = () => {
	// 3. Code JS

	// 4. Retorno un solo y solo un elemento HTML
	return (
			<div className="text-center">
				<h1 className="text-center mt-5">Hello Rigo!</h1>
				<p>
					<img src={rigoImage} />
				</p>
				<a href="#" className="btn btn-success">
					If you see this green button... bootstrap is working...
				</a>
				<p>
					Made by{" "}
					<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
					love!
				</p>
			</div>
	);
};


// 5. Exporto mi componente
export default Home;


// En el archivo donde voy a utilizar el componente
// 6 importar el componente
// 7 utilizarlo