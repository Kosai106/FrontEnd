import React from 'react';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<footer className="text--center">
				<div className="container">
					<div>
						<a href="#overview">Overview</a>
						<a href="#privacy">Privacy policy</a>
						<a href="#cookie">Cookie policy</a>
						<a href="#terms">Terms</a>
					</div>
					<span>&copy; 2016 companyname. All rights reserved.</span>
				</div>
			</footer>
    );
	}
}

export default Footer;
