import React from 'react';
//import MenuItem from './MenuItem';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

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

const MainMenu = ({history}) => (
    <Menu className="main_menu">
        <Menu.Menu className="main_menu__options">
            {menu_items.map(menu_item =>
                <Menu.Item 
                    onClick={(()=>history.push(menu_item.ext))}
                    key={menu_item.name}
                    className="menu_item">
                    <img className={`menu_item__image--${menu_item.name}`} src={menu_item.image} alt={menu_item.name} />
                    {menu_item.name}
                </Menu.Item>

            )}
        </Menu.Menu>
    </Menu>
);

export default withRouter(MainMenu);