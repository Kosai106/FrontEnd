import React from 'react';
import Navigation from './components/navigation/navigation';
import TrainersList from './components/trainers/trainersList';
import Footer from './components/footer/footer';

// Ignore linter error below
const data = require('!json!./../json/source.json');

const All = function All() {
	return (
		<div className="row">
			<Navigation />
			<TrainersList content={data} />
			<Footer />
		</div>
  );
};

export default All;
