import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

function App() {
	return (
		<Router>
			<Header></Header>
			<main>
				<Container>
					<Route exact path="/" component={HomeScreen} />
				</Container>
			</main>
		</Router>
	);
}

export default App;
