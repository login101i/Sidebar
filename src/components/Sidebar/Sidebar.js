import React, { useState, useEffect } from 'react';
import * as s from './Sidebar.styles';

const Sidebar = ({ backgroundImage = '', sideBarHeader = { longHeader: '', shortHeader: '' }, menuItems = [], fonts = { header: '', menu: '' } }) => {

    const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
    const [isSidebarOpen, setSidebarState] = useState(true);
    const [header, setHeader] = useState(sideBarHeader.longHeader);

    const handleMenuItemClick = name => {
        setSelectedMenuItem(name)
    }

    // Update of header state
    useEffect(() => {
        isSidebarOpen ? setTimeout(() => setHeader(sideBarHeader.longHeader), 200) : setHeader(sideBarHeader.shortHeader);
    }, [isSidebarOpen, sideBarHeader])


    // Update of sidebar state
    useEffect(() => {
        const updateWindowWidth = () => {
            if (window.innerWidth < 1280) setSidebarState(false);
            else setSidebarState(true)
        }
        window.addEventListener('resize', updateWindowWidth);

        return () => window.removeEventListener('resize', updateWindowWidth);
    }, []);



    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;
        const hasSubmenus = !!item.subMenuItems.length;

        return (
            <s.MenuItem
                key={index}
                font={fonts.header}
                selected={isItemSelected}
                onClick={() => handleMenuItemClick(item.name)}
                isSidebarOpen={isSidebarOpen}
            >
                <s.Icon src={item.icon}
                    isSidebarOpen={isSidebarOpen}
                />
                <s.Text
                    isSidebarOpen={isSidebarOpen}
                >{item.name}</s.Text>
                {hasSubmenus && (
                    <s.DropdownIcon />
                )}
            </s.MenuItem>
        )
    })

    return (
        <s.SidebarContainer
            backgroundImage={backgroundImage}
            isSidebarOpen={isSidebarOpen}
        >
            <s.SideBarHeader font={fonts.menu} >{header}</s.SideBarHeader>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
            <s.TogglerContainer
                onClick={() => setSidebarState(!isSidebarOpen)}
            ><s.Toggler /></s.TogglerContainer>
        </s.SidebarContainer>
    )

}

export default Sidebar 