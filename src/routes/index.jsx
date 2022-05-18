import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Homepage from 'feature/home'
import CrashPage from 'feature/crash'
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/crash" element={<CrashPage />} />
    </Routes>
  )
}

export default Router
