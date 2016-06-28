import React    from 'react';
import _        from 'lodash';
import Paginatr from 'react-paginatr'
import               'whatwg-fetch';


const trainers = require("json!./../../../json/source.json")

const locations = _.chain(trainers).map('location').uniq().map((location) => {
  return {
    label: location, value: location
  }
}).value()

const types = _.chain(trainers).map('type').uniq().map((type) => {
  return {
    label: type, value: type
  }
}).value()


class Trainers extends React.Component {
  constructor(props){
    super(props)
    this.logChangeLocation = this.logChangeLocation.bind(this);
    this.logChangeType = this.logChangeType.bind(this);
    this.state = {
      trainers
    }
  }

  filterPeople() {
    const search = {};
    return _.filter(this.state.trainers, search);
	}


  logChangeLocation(val) {
    this.setState({locationSelection: val})
  }
  logChangeType(val) {
    this.setState({typeSelection: val})
  }

  render() {
    const selectedPeople = this.filterPeople()
    const peopleElements = selectedPeople.map((trainer) => {
      return(
        <div className='card--outer' key={trainer.guid}>
          <div className='card--inner'>
            <img src={trainer.picture} className='avatar'></img>
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
            <div className='btn btn--primary'>View details</div>
          </div>
        </div>
      )
    })
    return(
      <div>
        {peopleElements}
      </div>
    )
  }
}

export default Trainers;
