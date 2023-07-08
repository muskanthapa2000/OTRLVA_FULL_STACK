import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Discover from './components/Products/Discover'
import Details from './components/Products/Details'

import HomePage from './components/HomePage'
import { Login } from './components/MainComp/Login'
import { Signup } from './components/MainComp/Signup'


const MainRoutes = () => {
 
   {/*const store= useSelector((state)=>state)

console.log(store)*/}
=======
import HomePage from "./components/HomePage"
// import Discover from './components/Products/Discover'
import { Login } from './components/MainComp/Login'
import { Signup } from './components/MainComp/Signup'
import Payments from './components/Payments/Payments'
import GuestInfromation from './components/Payments/GuestInfromation'

const MainRoutes = () => {
 
  //  const store= useSelector((state)=>state)

  //  console.log(store)



  return (
    <div>


        <Routes>
 
           <Route path='/'element={<HomePage/>}/>
            <Route path='/discover'element={<Discover/>}/>
            <Route path='/discover/:id'element={<Details/>}/>
            <Route path='/payment/:id'element={<Payments/>}/>
            <Route path='/payment-details'element={<GuestInfromation/>}/>
            <Route path='/login'element={<Login/>}/>
            <Route path='/register'element={<Signup/>}/>
            <Route path="*" element={<HomePage/>}/>

        </Routes>
      
    </div>
  )
}

export default MainRoutes
