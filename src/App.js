import React from 'react';

import Header from './components/Header'
import Home from './components/Home';
import Recommended from './components/Recommended'
import Upcoming from './components/Upcoming';
import './App.css'

const App = () => {

  return(
    <div className='app-container'>
      <Header/>
      <Home/>
      <Recommended/>
      <Upcoming/>

    </div>
  )
}

export default App;