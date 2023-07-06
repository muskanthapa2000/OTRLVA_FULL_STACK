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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
    </ChakraProvider>
  );
}

export default App;
