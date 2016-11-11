import React from 'react';
import { chain, filter } from 'lodash';
import Sidebar from './../sidebar/sidebar';
import Trainers from './trainers';

const content = require('json!./../../../json/source.json');

const countries = chain(content).map('discipline').split(',')
	.uniq()
	.map((discipline) => {
		return {
			value: discipline,
		};
	})
	.value();
console.warn(countries);

class TrainersList extends React.Component {
	constructor(props) {
		super(props);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleTypeChange = this.handleTypeChange.bind(this);
		this.handleTestChange = this.handleTestChange.bind(this);
		this.state = {
			content,
			location: [],
			type: [],
			test: [],
		};
	}
	handleLocationChange(event) {
		this.setState({
			location: event,
		});
	}
	handleTypeChange(event) {
		this.setState({
			type: event,
		});
	}
	handleTestChange(event) {
		this.setState({
			test: event,
		});
		console.warn(event);
	}

	filterPeople() {
		let search = this.state.content;
		if (this.state.location) {
			search = filter(search, (trainer) => {
				return trainer.location.toLowerCase().indexOf(this.state.location) !== -1;
			});
		}
		if (this.state.type) {
			search = filter(search, (trainer) => {
				return trainer.type.toLowerCase().indexOf(this.state.type) !== -1;
			});
		}
		if (this.state.test) {
			search = filter(search, (trainer) => {
				return trainer.discipline.indexOf(this.state.test) < 0;
			});
		}
		return search;
	}

	render() {
		const people = this.filterPeople().map((trainer) => {
			return (
				<Trainers
					key={trainer.guid}
					picture={trainer.picture}
					name={trainer.name}
					discipline={trainer.discipline}
					price={trainer.price}
					time={trainer.time}
					email={trainer.email}
				/>
			);
		});

		return (
			<div className="row">
				<div className="results">
					<p>
						<span>Search</span>
						•
						<span>{people.length} Coaches </span>
						match your search
					</p>
				</div>
				<div className="col-md-9">
					<div className="TrainerList">
						<h3>{this.state.refinement}</h3>
						{people}
					</div>
				</div>
				<div className="col-md-3">
					<Sidebar
						locationVal={this.state.location}
						typeVal={this.state.type}
						testVal={this.state.test}
						locationClick={this.handleLocationChange}
						typeClick={this.handleTypeChange}
						testClick={this.handleTestChange}
					/>
				</div>
			</div>
		);
	}
}

TrainersList.propTypes = {
	content: React.PropTypes.array.isRequired,
};

export default TrainersList;
