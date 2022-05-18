import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from 'layout'
import Homepage from 'feature/home'
import CrashPage from 'feature/crash'
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/crash" element={<CrashPage />} />
      </Route>
    </Routes>
  )
}

export default Router
