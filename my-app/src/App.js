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
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import Navbar from './components/MainComp/Navbar';
// import Details from './components/Products/Details';
import Discover from './components/Products/Discover';
// import Details from './components/Products/Details';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      
     <Discover></Discover>
     {/* <Details></Details> */}

    </ChakraProvider>
  );
}

export default App;
