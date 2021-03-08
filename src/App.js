import React from 'react'
import * as s from './App.styles'
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView'
import * as Palette from './colors'


const backgroundImage = 'images/mountains.jpg';
const sideBarHeader =
{
  longHeader: "Podróżuj dużo",
  shortHeader: "Go go"
}

const shortHeader = "Go go"

const menuItems = [
  { name: 'Home', to: '/', icon: 'icons/home.svg', subMenuItems: [] },
  { name: 'About me', to: '/about', icon: 'icons/about.svg', subMenuItems: [] },
  {
    name: 'Destinations', to: '/destinations', icon: 'icons/destinations.svg',
    subMenuItems: [
      { name: 'Canada', to: '/canada' },
      { name: 'Brazil', to: '/brazil' },
      { name: 'India', to: '/india' },
      { name: 'Australia', to: '/australia' },
      { name: 'Kenya', to: '/kenya' },
      { name: 'Moldova', to: '/moldova' }
    ]
  },
  { name: 'Blog', to: '/blog', icon: 'icons/blog.svg', subMenuItems: [] },
  { name: 'Services', to: '/services', icon: 'icons/services.svg', subMenuItems: [] },
  { name: 'Contacts', to: '/contacts', icon: 'icons/contacts.svg', subMenuItems: [] }
];

const fonts = {
  header: 'ZCOOL KuaiLe',
  menu: 'Poppins'
}

function App() {
  return (

    <s.App>
      <Sidebar
        backgroundImage={backgroundImage}
        sideBarHeader={sideBarHeader}
        shortHeader={shortHeader}
        menuItems={menuItems}
        fonts={fonts}
        colorPalette={Palette.pinkAndBlue}

      />
      <MainView />
    </s.App>
  );
}

export default App;
