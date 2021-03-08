import React from 'react'
import * as s from './App.styles'
import Sidebar from './components/Sidebar/Sidebar';
import MainView from './components/MainView/MainView'

const backgroundImage = 'images/mountains.jpg';




function App() {
  return (

    <s.App>
      <Sidebar backgroundImage={backgroundImage}/>
      <MainView />
    </s.App>
  );
}

export default App;
