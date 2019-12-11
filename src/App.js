import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Product from './components/product';
import Home from './components/home';
import About from './components/pages/about';
import Error404 from './components/pages/error404';
import Footer from './components/footer';
import Profile from './components/profile';
import Search from './components/search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'typeface-roboto';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Header />
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/about" exact component={About} />
						<Route path="/l/:location" exact component={Home} />
						<Route path="/l/:location/:category" exact component={Body} />
						<Route path="/l/:location/:category/:product" exact component={Product} />
						<Route path="/profile" exact component={Profile} />
						<Route path="/search/q/:query" exact component={Search} />
						<Route path="/" component={Error404} />
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
