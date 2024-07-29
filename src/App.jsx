import { useState } from 'react'
import './App.css'

import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { Box } from '@chakra-ui/react'



function App() {
  return (
    <Box bg='white'>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Box>
  )
}

export default App
