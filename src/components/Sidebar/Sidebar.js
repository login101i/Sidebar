import React, { useState, useEffect } from 'react';
import * as s from './Sidebar.styles';

const Sidebar = ({ backgroundImage = '', sideBarHeader = { longHeader: '', shortHeader: '' }, menuItems = [], fonts = { header: '', menu: '' } }) => {

    const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
    const [isSidebarOpen, setSidebarState] = useState(true);
    const [header, setHeader] = useState(sideBarHeader.longHeader);
    const [subMenusStates, setSubmenus] = useState({})

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

    // Add index of items that contain sub menu items
    useEffect(() => {
        const newSubmenus = {};

        menuItems.forEach((item, index) => {
            const hasSubmenus = !!item.subMenuItems.length;

            if (hasSubmenus) {
                newSubmenus[index] = {};
                newSubmenus[index]['isOpen'] = false;
                newSubmenus[index]['selected'] = null;
            }
        })

        setSubmenus(newSubmenus);
    }, [menuItems]);

    console.log(subMenusStates)

    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;
        const hasSubmenus = !!item.subMenuItems.length;

        const subMenusJSX = item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {
            return (
                <s.SubMenuItem key={subMenuItemIndex}>{subMenuItem.name}</s.SubMenuItem>
            )
        })


        return (
            <s.ItemContainer key={index}>
                <s.MenuItem
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
                <s.SubMenuItemContainer
                 isSidebarOpen={isSidebarOpen}>{subMenusJSX}</s.SubMenuItemContainer>
            </s.ItemContainer>
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