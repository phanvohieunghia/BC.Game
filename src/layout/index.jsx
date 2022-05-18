import React from 'react'
import { Outlet } from 'react-router-dom'

import './style.scss'
import Header from 'components/header'
import Sidebar from 'components/sidebar'

const Layout = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Layout
