import React from 'react';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='sidebar--outer'>
        <div className='sidebar--inner'>
          <label>Location</label>
          <div className='inline'>
            <span className='checkbox'>
              <input type='checkbox' value='Outdoor'></input>
              Outdoor
            </span>
            <span className='checkbox'>
              <input type='checkbox' value='Indoor'></input>
              Indoor
            </span>
          </div>
          <hr />
          <div className='bottom'>
            <label>Sport type</label>
            <span className='checkbox'>
              <input type='checkbox' value='Basketball'></input>
              Basketball
            </span>
            <span className='checkbox'>
              <input type='checkbox' value='Tennis'></input>
              Tennis
            </span>
            <span className='checkbox'>
              <input type='checkbox' value='Football'></input>
              Football
            </span>
            <span className='checkbox'>
              <input type='checkbox' value='Squash'></input>
              Squash
            </span>
            <span className='checkbox'>
              <input type='checkbox' value='Swimming'></input>
              Swimming
            </span>
            <span className='checkbox'>
              <input type='checkbox' value='Golf'></input>
              Golf
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar;
