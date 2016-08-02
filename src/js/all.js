import React from 'react';
import Navigation from './components/navigation/navigation';
import TrainersList from './components/trainers/trainersList';
import Footer from './components/footer/footer';

const All = function All() {
  return (
    <div>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="column">
            <TrainersList />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default All;
