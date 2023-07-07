import {React,useEffect} from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './components/MainComp/Navbar';

import Footer from './components/MainComp/Footer';
import MainRoutes from './MainRoutes';
import Loader from './components/MainComp/Loader';
import{ Login} from './components/MainComp/Login';
import { Signup } from './components/MainComp/Signup';
import { Route, Routes ,useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';




function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const store= useSelector((state)=>state)

   console.log(store)

  return (
    <ChakraProvider theme={theme}>

      {
        store.loginReducer.isLogin?
        <Routes><Route path='/login'element={<Login/>}/></Routes>:<><Navbar/>
      <MainRoutes/>
      <Footer/></>
      }
      
      {
        store.loginReducer.isLogin?
        <Routes><Route path='/register'element={<Signup/>}/></Routes>:<><Navbar/>
      <MainRoutes/>
      <Footer/></>
      }

    </ChakraProvider>
  );
}

export default App;
