import { useState } from 'react'
import './App.css'

import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { Box } from '@chakra-ui/react'
import Header2 from './Components/Header/Header2'



function App() {
  return (
    <Box bg='white'>
      <Header2></Header2>
      <Main></Main>
      <Footer></Footer>
    </Box>
  )
}

export default App
