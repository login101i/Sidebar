import React from 'react';
import * as s from './Sidebar.styles';

const Sidebar = ({ backgroundImage = '', header = '', menuItems = [], fonts = { header: '', menu: '' } }) => {



    const menuItemsJSX = menuItems.map((item, index) => {
        return (
            <s.MenuItem key={index} font={fonts.header}>
                <s.Icon src={item.icon} />
                <s.Text>{item.name}</s.Text>
            </s.MenuItem>
        )
    })


    return (
        <s.SidebarContainer
            backgroundImage={backgroundImage}>
            <s.SideBarHeader font={fonts.menu} >{header}</s.SideBarHeader>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
        </s.SidebarContainer>
    )

}

export default Sidebar 