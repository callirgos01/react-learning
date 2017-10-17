import React from 'react';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

const Root = () => (
        <BrowserRouter>
            <Route path='/' component={App}/>
        </BrowserRouter>
);

export default Root;