import React        from 'react';
import ReactDOM     from 'react-dom';
import Navigation   from './components/navigation/navigation';
import Footer       from './components/footer/footer';
import TrainersList from './components/trainers/trainersList';
require('../scss/style.scss');

const nav    = document.getElementById('nav');
const app    = document.getElementById('app');
const footer = document.getElementById('footer');

ReactDOM.render(
  <Navigation />, nav
);

ReactDOM.render(
  <TrainersList />, app
);

ReactDOM.render(
  <Footer />, footer
);
