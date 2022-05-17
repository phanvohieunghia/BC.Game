import React from 'react'

import './style.scss'
import Sidebar from 'components/common/Sidebar'
import Header from 'components/common/Header'

const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="right">{/* <Main /> */}Main</div>
    </>
  )
}

export default Home
