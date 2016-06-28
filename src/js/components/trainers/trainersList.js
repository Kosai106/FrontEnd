import React      from 'react';
import Trainers   from './trainers';
import Pagination from 'rc-pagination';
import Sidebar    from './../sidebar/sidebar';

class TrainersList extends React.Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      current: 2
    }
  }
  onChange(page) {
    this.setState({ current: page });
  }

  render() {
    return (
      <div className='row'>
        <div className="results">
          <p><span>Search</span> • <span>35 Coaches</span> match your search</p>
        </div>
        <div className='col-md-8'>
          <div className='TrainerList'>
            <Trainers />
          </div>
          <div className="flex-center">
            <Pagination onChange={this.onChange} current={this.state.current} total={25} />
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
