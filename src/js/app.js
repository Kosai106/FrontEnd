import React        from 'react';
import { render }     from 'react-dom';
import All          from './all';

require('../scss/style.scss');

const app = document.getElementById('app');

render(
	<All />, app
);
