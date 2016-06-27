import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="text--center">
        <div className="container">
          <div>
            <a href="#0">Overview</a>
            <a href="#0">Privacy policy</a>
            <a href="#0">Cookie policy</a>
            <a href="#0">Terms</a>
          </div>
          <span>2016 companyname. All rights reserved.</span>
        </div>
      </footer>
    );
  }
}

export default Footer;
