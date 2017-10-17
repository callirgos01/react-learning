import React from 'react';
import App from './App';
import Login from './Login';
import Signup from './Signup';
import Resume from './Resume';
import Home from './Home';
import Sabnzbd from './Sabnzbd';
import Sickbeard from './Sickbeard';
import Sickbeardkids from './Sickbeardkids';
import Couchpotato from './Couchpotato';
import Headphones from './Headphones';
import Comics from './Comics';
import Books from './Books';

import { BrowserRouter, Route } from 'react-router-dom';
import Particles from 'react-particles-js';

const Root = () => (
    <div>
        <Particles className="particle"/>
        <BrowserRouter >
            <div className="rootComponent">
                <App/>  
                <Route exact path='/' component={Home}/>
                <Route path='/sabnzbd' component={Sabnzbd}/>
                <Route path='/sickbeard' component={Sickbeard}/>
                <Route path='/sickbeardkids' component={Sickbeardkids}/>
                <Route path='/couchpotato' component={Couchpotato}/>
                <Route path='/headphones' component={Headphones}/>
                <Route path='/comics' component={Comics}/>
                <Route path='/books' component={Books}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>
                <Route path='/resume' component={Resume}/>
            </div>
        </BrowserRouter>
    </div>
);

export default Root;