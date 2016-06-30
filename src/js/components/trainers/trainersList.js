import React			from 'react';
import _ 					from 'lodash';
// import Paginatr 	from 'react-paginatr'
import								 'whatwg-fetch';

const trainers = require("json!./../../../json/source.json")

const locations = _.chain(trainers).map('location').uniq().map((location) => {
	return {label: location, value: location}
}).value()
const types = _.chain(trainers).map('type').uniq().map((type) => {
	return {label: type, value: type}
}).value()

console.log(locations, types)


class TrainersList extends React.Component {
	constructor(props) {
		super(props)
		this.logChangeLocation = this.logChangeLocation.bind(this);
		this.logChangeType = this.logChangeType.bind(this);
		this.clickBtn = this.clickBtn.bind(this);
		this.state = {
			clicked: false,
			locations,
			types,
			locationSelection: '',
			typeSelection: '',
			trainers
		}
	}

	filterPeople() {
		const search = {}
		if (this.state.locationSelection) {
			search.location = this.state.locationSelection;
		} if (this.state.typeSelection) {
			search.type = this.state.typeSelection;
		}
		return _.filter(this.state.trainers, search)
	}
	logChangeLocation(val) {
		this.setState({locationSelection: val.value})
		console.log(val.value)
	}
	logChangeType(val) {
		this.setState({typeSelection: val.value})
		console.log(val.value)
	}
	clickBtn() {
		this.setState({clicked: !this.state.clicked})
	}

	render() {
		const selectedPeople = this.filterPeople()
		const peopleElements = selectedPeople.map((trainer) => {
			return (
				<div className='card--outer' key={trainer.guid}>
					<div className='card--inner'>
						<img src={trainer.picture} className='avatar' />
						<div className='information'>
							<p className='fullname'>{trainer.name}</p>
							<p className='discipline'>{trainer.discipline}</p>
							<div className='details'>
								<span className='cost'>
									<i className='fa fa-usd'></i>
									<span>{trainer.price}</span>
								</span>
								<span className='time'>
									<i className='fa fa-clock-o'></i>
									<span>{trainer.time}</span>
								</span>
							</div>
						</div>
						{this.state.clicked ? (<div className="btn btn--absolute btn--primary" onClick={this.clickBtn}>{trainer.email}</div>)
                            		:  <div className="btn btn--absolute btn--primary" onClick={this.clickBtn}>View details</div>
          	}
					</div>
				</div>
			)
		})
		const coaches = _.filter(peopleElements).length
		return (
			<div className='row'>
				<div className="results">
					<p>
						<span>Search</span>
						•
						<span>{coaches} Coaches </span>
						match your search</p>
				</div>
				<div className='col-md-9'>
					<div className='TrainerList'>
						{peopleElements}
					</div>
				</div>
				<div className='col-md-3'>
					<div className='sidebar--outer'>
						<div className='sidebar--inner'>
							<label>Location</label>
							<div className='inline'>
								<span className='checkbox'>
									<input
										type='checkbox'
										value='Outdoor'
										onChange={this.logChangeLocation}
									/> Outdoor
								</span>
								<span className='checkbox'>
									<input
										type='checkbox'
										value='Indoor'
									/> Indoor
								</span>
							</div>
							<hr/>
							<div className='bottom'>
								<label>Sport type</label>
								<span className='checkbox'>
									<input
										type='checkbox'
										value='Basketball'
									/> Basketball
								</span>
								<span className='checkbox'>
									<input
										type='checkbox'
										value='Tennis'
									/> Tennis
								</span>
								<span className='checkbox'>
									<input
										type='checkbox'
										value='Football'
									/> Football
								</span>
								<span className='checkbox'>
									<input
										type='checkbox'
										value='Squash'
									/> Squash
								</span>
								<span className='checkbox'>
									<input
										type='checkbox'
										value='Swimming'
									/> Swimming
								</span>
								<span className='checkbox'>
									<input
										type='checkbox'
										value='Golf'
									/> Golf
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default TrainersList;
