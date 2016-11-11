import React from 'react';
import Navigation from './components/navigation/navigation';
import TrainersList from './components/trainers/trainersList';
import Footer from './components/footer/footer';

// Ignore linter error below
const data = require('!json!./../json/source.json');

const All = function All() {
	return (
		<div>
			<Navigation />
			<div className="container">
				<div className="row">
					<div className="column">
						<TrainersList content={data} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
  );
};

export default All;
