import React, { useContext, useEffect } from 'react';
import About from '../components/About';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { UserContext } from '../UserContext';
// import './Buttons.css';

const HomeScreen = ({ history }) => {
	// const { user } = useContext(UserContext);

	// useEffect(() => {
	// 	if (user) {
	// 		history.push(`/profile/${user._id}`);
	// 	}
	// }, [user, history]);

	return (
		<>
			<Hero></Hero>
			<About></About>
			<Footer></Footer>
		</>
	);
};

export default HomeScreen;
