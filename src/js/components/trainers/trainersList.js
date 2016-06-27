import React    from 'react';
import Trainers from './trainers';
import Sidebar  from './../sidebar/sidebar';

class TrainersList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='row'>
        <div>
          <h1>Search &middot; 35 Coaches match your search</h1>
        </div>
        <div className='col-md-8'>
          <div className='TrainerList'>
            <Trainers />
          </div>
        </div>
        <div className='col-md-4'>
        <Sidebar />
      </div>
    </div>
    )
  }
}

export default TrainersList;
