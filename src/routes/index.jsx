import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Homepage from 'feature/Home'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  )
}

export default Router
