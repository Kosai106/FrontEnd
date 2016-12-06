import React from 'react';

class Navigation extends React.Component {
	constructor(props) {
		super(props);
		this.state = { };
	}

	render() {
		return (
			<nav className="columns small-12 push-none--sides">
				<div className="topnav">
					<a href="#home">Home</a>
					<span>•</span>
					<a href="#features" className="active">Features</a>
					<span>•</span>
					<a href="#testimonials">Testimonials</a>
					<span>•</span>
					<a href="#contact">Contact</a>
				</div>
				<div className="subnav">
					<p>Find Trainers to match your needs</p>
				</div>
			</nav>
		);
	}
}

export default Navigation;
