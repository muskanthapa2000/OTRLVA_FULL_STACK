import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Discover from './components/Products/Discover'
import Details from './components/Products/Details'

const MainRoutes = () => {
 
   const store= useSelector((state)=>state)

   console.log(store)


  return (
    <div>


        <Routes>
 
           <Route path='/'element={<HomePage/>}/>
            <Route path='/discover'element={<Discover/>}/>
            <Route path='/discover/:id'element={<Details/>}/>


        </Routes>
      
    </div>
  )
}

export default MainRoutes
