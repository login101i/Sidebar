import React, { useState, useEffect } from 'react';
import * as s from './Sidebar.styles';

const Sidebar = ({ backgroundImage = '', sideBarHeader = { longHeader: '', shortHeader: '' }, menuItems = [], fonts = { header: '', menu: '' } }) => {

    const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
    const [isSidebarOpen, setSidebarState] = useState(true);


    const handleMenuItemClick = name => {
        setSelectedMenuItem(name)
    }

    console.log(isSidebarOpen)

    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;
        return (
            <s.MenuItem
                key={index}
                font={fonts.header}
                selected={isItemSelected}
                onClick={() => handleMenuItemClick(item.name)}
            >
                <s.Icon src={item.icon} />
                <s.Text>{item.name}</s.Text>
            </s.MenuItem>
        )
    })


    return (
        <s.SidebarContainer
            backgroundImage={backgroundImage}
            isSidebarOpen={isSidebarOpen}
        >
            <s.SideBarHeader font={fonts.menu} >{isSidebarOpen ? sideBarHeader.longHeader : sideBarHeader.shortHeader}</s.SideBarHeader>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
            <s.TogglerContainer
                onClick={() => setSidebarState(!isSidebarOpen)}
            ><s.Toggler /></s.TogglerContainer>
        </s.SidebarContainer>
    )

}

export default Sidebar 