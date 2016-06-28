import React      from 'react';
import Trainers   from './trainers';
import Sidebar    from './../sidebar/sidebar';

class TrainersList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className='row'>
        <div className="results">
          <p><span>Search</span> • <span>35 Coaches</span> match your search</p>
        </div>
        <div className='col-md-9'>
          <div className='TrainerList'>
            <Trainers />
          </div>
        </div>
        <div className='col-md-3'>
        <Sidebar />
      </div>
    </div>
    )
  }
}

export default TrainersList;
