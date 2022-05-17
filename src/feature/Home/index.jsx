import React from 'react'

import './style.scss'
import Sidebar from 'components/common/sidebar'
import Header from 'components/common/header'

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
