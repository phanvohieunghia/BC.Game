import React from 'react'

import './style.scss'
import Sidebar from './sidebar'
import Header from './header'
import Main from './main'

const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
    </>
  )
}

export default Home
