import React from "react";  // 1. Importo React
import rigoImage from "../../img/rigo-baby.jpg";  // Include images into your bundle
// 6 importar el componente y 7 utilizar en otro componente
import Navbar from "./Navbar.jsx";  // Componente con export default
import { Footer } from "./Footer.jsx";  // Componente con export const
import { Jumbotron } from "./Jumbotron.jsx";
import { Alert } from "./Alert.jsx";
import { Spinner } from "./Spinner.jsx";
import { Card } from "./Card.jsx";
import { Title } from "./Title.jsx";
import { ExampleState } from "./ExampleState.jsx";
import { SimpleCounter } from "./SimpleCounter.jsx";
import { TrafficLight } from "./TrafficLight.jsx";


// 2. Create your first component with PascalCase name.
const Home = () => {
	// 3. Code JS

	// 4. Retorno un solo y solo un elemento HTML
	return (
			<div className="text-center d-flex flex-column min-vh-100">
				<Navbar />
				<Alert />
				<Spinner />
				<Title text='Hooks - useEffect()' color='primary' />
				<TrafficLight />
				{/* <SimpleCounter /> */}

				{/* <ExampleState /> */}
				{/* 
				<Title />
				<Title text='Subtitulo' />
				 */}
				{/* 
				<Card 
						title='Tamara Bates' 
				    imageURL='https://randomuser.me/api/portraits/women/43.jpg'
				/>
				<Card/>
				*/}
				{/* <Jumbotron /> */}
				{/* <p><img src={rigoImage} /></p> */}
				{/* 
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