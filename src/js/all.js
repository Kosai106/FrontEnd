import React        from 'react';
import Navigation   from './components/navigation/navigation';
import TrainersList from './components/trainers/trainersList';
import Footer       from './components/footer/footer';

const All = function All() {
  return (
    <div>
      <Navigation />
      <TrainersList />
      <Footer />
    </div>
  );
};

export default All;
