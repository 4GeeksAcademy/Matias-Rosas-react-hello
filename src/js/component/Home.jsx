import React from "react";

//include images into your bundle
import NavBar from "./NavBar";
import Hero from "./Hero"
import CardsContainer from "./CardsContainer";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar/>
			<Hero/>
			<CardsContainer/>
			<Footer/>
	</>
	);
};

export default Home;
