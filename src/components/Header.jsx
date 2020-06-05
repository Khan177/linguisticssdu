import React from 'react';
import {Link} from 'react-router-dom';
import './styles/Header.css';
import logo from '../logo.png';

export default function Header(){
	return(
		<div className="header">
			<img src={logo} alt="" style={{height:"50%"}}/>
			<Link to='/'>Басты бет</Link>
			<Link to='/first'>Первая страница</Link>
			<Link to='/second'>Вторая страница</Link>
			<Link to='/third'>Третья страница</Link>
		</div>
	);
}