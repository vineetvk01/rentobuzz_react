import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import About from './components/pages/about';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'typeface-roboto';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<Switch>
						<Route path="/" exact component={Body} />
						<Route path="/about" exact component={About} />
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
