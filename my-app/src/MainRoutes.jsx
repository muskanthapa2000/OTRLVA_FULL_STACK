import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Discover from './components/Products/Discover'
import Details from './components/Products/Details'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/discover'element={<Discover/>}/>
            <Route path='/discover/:id'element={<Details/>}/>
        </Routes>
      
    </div>
  )
}

export default MainRoutes
