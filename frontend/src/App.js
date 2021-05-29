import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ListScreen from './Screens/ListScreen';
import LikedVetsScreen from './Screens/LikedVetsScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import VetScreen from './Screens/VetScreen';

function App() {
	return (
		<Router>
			<Header></Header>
			<main>
				<Container>
					<Route exact path="/" component={HomeScreen} />
					<Route exact path="/list" component={ListScreen} />
					<Route exact path="/liked" component={LikedVetsScreen} />
					<Route exact path="/login" component={LoginScreen} />
					<Route exact path="/register" component={RegisterScreen} />
					<Route exact path="/vet/:id" component={VetScreen} />
				</Container>
			</main>
		</Router>
	);
}

export default App;
