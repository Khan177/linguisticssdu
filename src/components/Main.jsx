import React, {Component} from 'react';
import './styles/Main.css'

export default class Main extends Component{
	constructor(props){
		super(props);
		this.state = {
			name: this.props.name,
			desc: this.props.desc,
		}
	}

	render(){
		return(
			<div className="main">
				<h1>{this.state.name}</h1>
				<h4>{this.state.desc}</h4>
			</div>
		);
	}
}