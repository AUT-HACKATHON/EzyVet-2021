import React, { useContext, useEffect } from 'react';
import About from '../components/About';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
// import './Buttons.css';

const HomeScreen = ({ history }) => {
	return (
		<>
			<Hero></Hero>
			<About></About>
			<Features></Features>
			<Footer></Footer>
		</>
	);
};

export default HomeScreen;
