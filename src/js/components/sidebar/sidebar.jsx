import React from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import { RadioGroup, Radio } from 'react-radio-group';

class Sidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="sidebar--outer">
				<div className="sidebar--inner">
					<RadioGroup name="location" selectedValue={this.props.locationVal} onChange={this.props.locationClick}>
						<label>Location</label>
						<div className="inline">
							<div className="checkbox">
								<label><Radio value="outdoor" /> Outdoor</label>
							</div>
							<div className="checkbox">
								<label><Radio value="indoor" /> Indoor</label>
							</div>
						</div>
					</RadioGroup>
					<hr />
					<div className="bottom">
						<CheckboxGroup name="type" value={this.props.typeVal} onChange={this.props.typeClick}>
							<label>Sport type</label>
							<div className="checkbox">
								<label><Checkbox value="basketball" /> Basketball</label>
							</div>
							<div className="checkbox">
								<label><Checkbox value="tennis" /> Tennis</label>
							</div>
							<div className="checkbox">
								<label><Checkbox value="football" /> Football</label>
							</div>
							<div className="checkbox">
								<label><Checkbox value="squash" /> Squash</label>
							</div>
							<div className="checkbox">
								<label><Checkbox value="swimming" /> Swimming</label>
							</div>
							<div className="checkbox">
								<label><Checkbox value="golf" /> Golf</label>
							</div>
						</CheckboxGroup>
						<hr />
						<CheckboxGroup name="discipline" value={this.props.disciplineVal} onChange={this.props.disciplineClick}>
							<label>Discipline</label>
							<div className="checkbox">
								<label><Checkbox value="crossfit" /> Crossfit</label>
							</div>
							<div className="checkbox">
								<label><Checkbox value="yoga" /> Yoga</label>
							</div>
							<div className="checkbox">
								<label><Checkbox value="fitness" /> Fitness</label>
							</div>
							<div className="checkbox">
								<label><Checkbox value="power" /> Power</label>
							</div>
							<div className="checkbox">
								<label><Checkbox value="core strength" /> Core Strength</label>
							</div>
							<div className="checkbox">
								<label><Checkbox value="bodybuilding" /> Bodybuilding</label>
							</div>
							<div className="checkbox">
								<label><Checkbox value="core" /> Core</label>
							</div>
							<div className="checkbox">
								<label><Checkbox value="balance" /> Balance</label>
							</div>
						</CheckboxGroup>
					</div>
				</div>
			</div>
    );
	}
}

Sidebar.propTypes = {
	locationVal: React.PropTypes.string.isRequired,
	typeVal: React.PropTypes.array.isRequired,
	locationClick: React.PropTypes.func.isRequired,
	typeClick: React.PropTypes.func.isRequired,
	disciplineVal: React.PropTypes.array.isRequired,
	disciplineClick: React.PropTypes.func.isRequired,
};

export default Sidebar;
