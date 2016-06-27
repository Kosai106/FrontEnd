import React from 'react';

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <nav>
        <div className="topnav">
          <div className="container">
            <a href="#0">Home</a>
            <span>•</span>
            <a href="#0" className="active">Features</a>
            <span>•</span>
            <a href="#0">Testimonials</a>
            <span>•</span>
            <a href="#0">Contact</a>
          </div>
        </div>
        <div className="subnav">
          <p>Find Trainers to match your needs</p>
        </div>
      </nav>
    );
  }
}

export default Navigation;
