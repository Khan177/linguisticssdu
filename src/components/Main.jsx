import React, {Component} from 'react';
import './styles/Main.css';
import KMap from '../assets/map.png';

export default class Main extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: this.props.name,
			desc: this.props.desc,
		}
	}

	render(){
		const img = <img src={KMap} alt=""/>
		return(
			<div className="main">
				<h1>{this.state.name}</h1>
				{this.state.name === "Қазақ тіліндегі диалект базасы" && img}
				<h4><i>{this.state.desc}</i></h4>
			</div>
		);
	}
}