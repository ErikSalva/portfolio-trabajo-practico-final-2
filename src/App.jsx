import { useState } from 'react'

import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import { Box } from '@chakra-ui/react'
import Header from './Components/Header/Header'



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
