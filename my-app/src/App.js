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

// import Details from './components/Products/Details';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      
     {/* <Details></Details> */}

    </ChakraProvider>
  );
}

export default App;
