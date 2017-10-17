import { combineReducers } from 'redux';

const menu_items = [{
    name:'Home',
    ext:'',
    link:'root',
    image: require('../assets/logo.svg')
},{
    name:'Resume',
    ext:'/resume',
    link:'root',
    image: require('../assets/logo.svg')
},{
    name:'Sab',
    ext:'/sabnzbd',
    link:'root',
    image: require('../assets/sabnzbd/sabnzbd16_32.ico')
},{
    name:'TV',
    ext:'/sickbeard',
    link:'root',
    image: require('../assets/sickbeard/favicon.ico')
},{
    name:'TV Kids',
    ext:'/sickbeardkids',
    link:'root',
    image: require('../assets/sickbeard/favicon.ico')
},{
    name:'Movies',
    ext:'/couchpotato',
    link:'root',
    image: require('../assets/couchpotato/favicon.ico')
},{
    name:'Music',
    ext:'/headphones',
    link:'root',
    image: require('../assets/headphones/headphoneslogo.png')
},{
    name:'Comics',
    ext:'/comics',
    link:'root',
    image: require('../assets/comics/favicon.ico')
},{
    name:'Books',
    ext:'/books',
    link:'root',
    image: require('../assets/book/lazylibrarian.png')
},{
    name:'Sign Up',
    ext:'/signup',
    link:'root',
    image: require('../assets/logo.svg')
},{
    name:'Log In',
    ext:'/login',
    link:'root',
    image: require('../assets/logo.svg')
}];



const main_menu = (state=menu_items, action) => {
    return state;
};

export default combineReducers({main_menu});