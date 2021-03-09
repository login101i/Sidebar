import React, { useState, useEffect } from 'react'
import * as s from './Sidebar.styles'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Sidebar = ({ backgroundImage = '', header = { shortHeader: '', longHeader: '' }, menuItems = [], fonts = { header: "", menuItem: "" } }) => {

    const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0].name)
    const [isSideBarOpen, setIsSideBarOpen] = useState(true)
    const [sideBarHeader, setSideBarHeader] = useState(header.longHeader)
    const [subMenusStates, setSubmenus] = useState({})

    useEffect(() => {
        isSideBarOpen ? setTimeout(() => { setSideBarHeader(header.longHeader) }, 400) : setSideBarHeader(header.shortHeader)
    }, [isSideBarOpen])


    useEffect(() => {
        const updateWindowWidth = () => {
            if (window.innerWidth < 1200) setIsSideBarOpen(false)
            else setIsSideBarOpen(true)
        }
        window.addEventListener('resize', updateWindowWidth)
    }, [isSideBarOpen])

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


    const selectItem = (name, index) => {
        setSelectedMenuItem(name)

        const subMenuCopy = JSON.parse(JSON.stringify(subMenusStates))
        if (subMenusStates.hasOwnProperty(index)) {
            subMenuCopy[index]['isOpen'] = !subMenuCopy[index]['isOpen']
        }
        setSubmenus(subMenuCopy)

    }




    const menuItemJSX = menuItems.map((item, index) => {

        const selectedItem = selectedMenuItem === item.name
        const hasSumbenus = !!item.subMenuItems.length
        const subMenuJSX = item.subMenuItems.map((subMenuItem, subMenuIndex) => {
            return (
                <Link to={`${item.to}${subMenuItem.to}`} style={{ textDecoration: 'none' }}>
                    <s.SubmenuItem
                        key={subMenuIndex}>
                        {subMenuItem.name}
                    </s.SubmenuItem>
                </Link>
            )
        })

        const isOpen = subMenusStates[index]?.isOpen

        return (
            <s.MenuItemContainer>
                <Link to={item.to}
                    style={{ textDecoration: 'none' }}
                >
                    <s.MenuItem
                        key={index}
                        font={fonts.header}
                        selected={selectedItem}
                        onClick={() => selectItem(item.name, index)}
                        isSideBarOpen={isSideBarOpen}
                        isOpen={isOpen}
                    >
                        <s.Icon
                            src={item.icon}
                            isSideBarOpen={isSideBarOpen}

                        />
                        <s.Text isSideBarOpen={isSideBarOpen}>{item.name}</s.Text>
                        {hasSumbenus && isSideBarOpen &&
                            <s.DropDownIcon isSelected={selectedItem} isOpen={isOpen} />
                        }
                    </s.MenuItem>
                    <AnimatePresence>
                        {hasSumbenus && isOpen &&
                            <motion.nav
                                initial={{ opacity: 0, y: -15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.35 }}
                                exit={{ opacity: 0, x: -30 }}
                            >
                                <s.SubmenuContainer isSideBarOpen={isSideBarOpen}>{subMenuJSX}
                                </s.SubmenuContainer>
                            </motion.nav>
                        }
                    </AnimatePresence>
                </Link>
            </s.MenuItemContainer>
        )
    })


    return (
        <s.SidebarContainer
            backgroundImage={backgroundImage}
            isSideBarOpen={isSideBarOpen}
        >
            <s.SidebarHeader
                font={fonts.menuItem}
            >
                {sideBarHeader}
            </s.SidebarHeader>
            <s.MenuItemContainer>
                {menuItemJSX}
            </s.MenuItemContainer>
            <s.TogglerContainer
                onClick={() => setIsSideBarOpen(!isSideBarOpen)}>
                <s.Toggler />
            </s.TogglerContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
