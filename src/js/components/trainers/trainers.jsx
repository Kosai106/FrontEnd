import React from 'react';

class Trainers extends React.Component {
	constructor(props) {
		super(props);
		this.toggleButton = this.toggleButton.bind(this);
		this.state = {
			clicked: false,
		};
	}

	toggleButton() {
		this.setState({
			clicked: !this.state.clicked,
		});
	}

	render() {
		return (
			<div className="card--outer" key={this.props.guid}>
				<div className="card--inner">
					<img src={this.props.picture} role="presentation" className="avatar" />
					<div className="information">
						<p className="fullname">{this.props.name}</p>
						<p className="discipline">{this.props.discipline}</p>
						<div className="details">
							<span className="cost">
								<i className="fa fa-usd" />
								<span>{this.props.price}</span>
							</span>
							<span className="time">
								<i className="fa fa-clock-o" />
								<span>{this.props.time}</span>
							</span>
						</div>
					</div>

					{this.state.clicked ? (<div className="btn btn--absolute btn--primary" onClick={this.toggleButton}>{this.props.email}</div>)
															: (<div className="btn btn--absolute btn--primary" onClick={this.toggleButton}>Show details</div>)
					}
				</div>
			</div>
    );
	}
}

Trainers.propTypes = {
	guid: React.PropTypes.string,
	name: React.PropTypes.string,
	picture: React.PropTypes.string.isRequired,
	price: React.PropTypes.number,
	time: React.PropTypes.string,
	discipline: React.PropTypes.array,
	email: React.PropTypes.string,
	location: React.PropTypes.string,
	type: React.PropTypes.string,
};

export default Trainers;
