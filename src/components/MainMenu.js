import React from 'react';
//import MenuItem from './MenuItem';
import { Menu } from 'semantic-ui-react';

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
}];

const MainMenu = () => (
    <Menu className="main_menu">
        {menu_items.map(menu_item =>
            <Menu.Menu key={menu_item.name}>
                <Menu.Item 
                    className="menu_item">
                    <img className={`menu_item__image--${menu_item.name}`} src={menu_item.image} alt={menu_item.name} />
                    {menu_item.name}
                </Menu.Item>
            </Menu.Menu>

        )}
    </Menu>
);

export default MainMenu;