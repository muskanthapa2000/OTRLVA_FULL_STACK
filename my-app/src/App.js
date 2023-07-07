import React from 'react';
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



function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>

      <Footer/>



    </ChakraProvider>
  );
}

export default App;
