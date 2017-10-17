import React from 'react';
//import MenuItem from './MenuItem';
import { Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const MainMenu = ({menu_items, history, dispatch}) => { 
    return(
    <Menu className="main_menu">
        <Menu.Menu className="main_menu__options">
            {menu_items.map(menu_item =>
                <Menu.Item 
                    onClick={()=> {
                        dispatch({type:'SET_SCREEN', screen: menu_item.ext })
                        history.push(menu_item.ext)}
                    }
                    key={menu_item.name}
                    className="menu_item">
                    <img className={`menu_item__image--${menu_item.name}`} src={menu_item.image} alt={menu_item.name} />
                    {menu_item.name}
                </Menu.Item>
            )}
        </Menu.Menu>
    </Menu>
);
}
const mapStateToProps = ( { main_menu } ) => {
    return {
        menu_items:main_menu.menu_items        
    }
}
export default withRouter(connect(mapStateToProps)(MainMenu));
