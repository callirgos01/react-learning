
import React from 'react';
import '../styles/styles.css'
import { withRouter } from 'react-router-dom';
import MainMenu from './MainMenu';

const App = () => (
	<div>
		<MainMenu />
	</div>
);

export default withRouter(App);
