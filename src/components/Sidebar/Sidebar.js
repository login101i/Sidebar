import React, { useState, useEffect } from 'react';
import * as s from './Sidebar.styles';
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom';



const Sidebar = ({ backgroundImage = '', sideBarHeader = { longHeader: '', shortHeader: '' }, menuItems = [], fonts = { header: '', menu: '' }, colorPalette = {
    bgColor1: 'rgba(11, 171, 100, 0.8)',
    bgColor2: 'rgba(59, 183, 143, 0.8)',
    fontColor: 'rgba(22, 46, 39)',
    fontColorSelected: 'rgba(255, 255, 255)',
    dividerColor: 'rgba(122, 204, 178)',
    selectedBackgroundCollapsedMode: 'dark'
} }) => {

    const [selected, setSelectedMenuItem] = useState(menuItems[0].name);
    const [isSidebarOpen, setSidebarState] = useState(true);
    const [header, setHeader] = useState(sideBarHeader.longHeader);
    const [subMenusStates, setSubmenus] = useState({})

    const handleMenuItemClick = (name, index) => {
        console.log(index)
        setSelectedMenuItem(name)
        // poniższy obiekt nie ma referencji do  submenusStates i dobrze
        const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));

        if (subMenusStates.hasOwnProperty(index)) {
            subMenusCopy[index]['isOpen'] = !subMenusStates[index]['isOpen']
            setSubmenus(subMenusCopy)
        }
        else {
            // objects używają for in loop !!!!!!
            for (let item in subMenusStates) {
                subMenusCopy[item]['isOpen'] = false;
                subMenusCopy[item]['selected'] = null
            }
            setSubmenus(subMenusCopy)

        }
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

    const handleSubMenuItemClick = (menuItemIdx, subMenuItemIdx) => {
        const subMenusCopy = JSON.parse(JSON.stringify(subMenusStates));

        subMenusCopy[menuItemIdx]['selected'] = subMenuItemIdx;
        setSubmenus(subMenusCopy);


    }


    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name;
        const hasSubmenus = !!item.subMenuItems.length;
        const isOpen = subMenusStates[index]?.isOpen;


        const subMenusJSX = item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {
            const isSubmenuItemSelected = subMenusStates[index]?.selected === subMenuItemIndex;

            return (
                <Link
                    to={`${item.to}${subMenuItem.to}`}
                    style={{ textDecoration: 'none' }}
                    key={subMenuItemIndex}>

                    <s.SubMenuItem
                        onClick={() => handleSubMenuItemClick(index, subMenuItemIndex)}
                        selected={isSubmenuItemSelected}
                        colorPalette={colorPalette}

                    >{subMenuItem.name}</s.SubMenuItem>
                </Link>
            )
        })


        return (
            <Link to={item.to} style={{ textDecoration: 'none' }}>
                <s.ItemContainer key={index}>
                    <s.MenuItem
                        font={fonts.header}
                        selected={isItemSelected}
                        onClick={() => handleMenuItemClick(item.name, index)}
                        isSidebarOpen={isSidebarOpen}
                        isOpen={isOpen}
                        colorPalette={colorPalette}


                    >

                        <s.Icon
                            src={item.icon}
                            isSidebarOpen={isSidebarOpen}
                        />

                        <s.Text
                            isSidebarOpen={isSidebarOpen}
                        >{item.name}</s.Text>
                        {hasSubmenus && (
                            <s.DropdownIcon
                                isOpen={isOpen}
                                colorPalette={colorPalette}

                            />
                        )}
                    </s.MenuItem>
                    <AnimatePresence>
                        {hasSubmenus && isOpen && (
                            <motion.nav
                                initial={{ opacity: 0, y: -15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35 }}
                                exit={{ opacity: 0, x: -30 }}
                            >
                                <s.SubMenuItemContainer
                                    isSidebarOpen={isSidebarOpen}
                                    colorPalette={colorPalette}
                                >{subMenusJSX}</s.SubMenuItemContainer>
                            </motion.nav>
                        )}
                    </AnimatePresence>

                </s.ItemContainer>
            </Link>
        )
    })

    return (
        <s.SidebarContainer
            backgroundImage={backgroundImage}
            isSidebarOpen={isSidebarOpen}
            colorPalette={colorPalette}
        >
            <s.SideBarHeader font={fonts.menu} >{header}</s.SideBarHeader>
            <s.MenuItemContainer
            >{menuItemsJSX}</s.MenuItemContainer>
            <s.TogglerContainer
                onClick={() => setSidebarState(!isSidebarOpen)}
            ><s.Toggler /></s.TogglerContainer>
        </s.SidebarContainer>
    )

}

export default Sidebar 