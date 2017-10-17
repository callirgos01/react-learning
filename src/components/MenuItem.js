import React from 'react';
//import { NavLink } from 'react-router-dom';
/*
const isActiveFunc = (match, location) => {
    let result = false;
    console.log("match",match);    
    console.log("location",location);
    if( match !== null ){
        result = match.isExact
    }
    return result;
};*/
const MenuItem = ({ name, ext, link, image }) => (
    <div className="menu_item" >
        <img 
        className="menu_item__image"
        src={image} 
        alt={name}/>

        <button
        className="menu_item__button"
        >
            {name}

        </button>
        
    </div>
);

export default MenuItem;