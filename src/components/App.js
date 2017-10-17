
import React from 'react';
import '../styles/styles.css'
import { withRouter } from 'react-router-dom';
import MainMenu from './MainMenu';
import Particles from 'react-particles-js';

const App = () => (
	<div>
		<div className="container">
			<MainMenu />
		</div>
		<Particles className="particle"/>
	</div>
);

export default withRouter(App);
