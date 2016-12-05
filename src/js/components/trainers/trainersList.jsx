import React from 'react';
import { filter } from 'lodash';
import Sidebar from './../sidebar/sidebar';
import Trainers from './trainers';

const content = require('json!./../../../json/source.json');

class TrainersList extends React.Component {
	constructor(props) {
		super(props);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleTypeChange = this.handleTypeChange.bind(this);
		this.handleDisciplineChange = this.handleDisciplineChange.bind(this);
		this.state = {
			content,
			location: 'outdoor',
			type: [],
			discipline: [],
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
	handleDisciplineChange(event) {
		this.setState({
			discipline: event,
		});
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
		if (this.state.discipline) {
			search = filter(search, (trainer) => {
				return trainer.discipline.toString().toLowerCase().indexOf(this.state.discipline) !== -1;
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
					location={trainer.location}
					type={trainer.type}
				/>
			);
		});

		return (
			<div className="columns small-12">
				<div className="results">
					<p>
						<span>Search</span>
						•
						<span>{people.length} Coaches </span>
						match your search
					</p>
				</div>
				<div className="columns small-9">
					<div className="TrainerList">
						<h3>{this.state.refinement}</h3>
						{people}
					</div>
				</div>
				<div className="columns small-3">
					<Sidebar
						locationVal={this.state.location}
						typeVal={this.state.type}
						disciplineVal={this.state.discipline}
						locationClick={this.handleLocationChange}
						typeClick={this.handleTypeChange}
						disciplineClick={this.handleDisciplineChange}
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
