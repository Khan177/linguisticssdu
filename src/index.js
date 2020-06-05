import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main';
import Home from './components/Home';
import Header from './components/Header'
import First from './components/First';
import Second from './components/Second';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Switch,Route } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<Header/>
		<div className="container">
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/first' component={First} />
				<Route path='/second' component={Second} />
			</Switch>
		</div>
	</BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
