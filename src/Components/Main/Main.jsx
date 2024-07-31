import React from 'react';
import Hero from '../Hero/Hero';
import Tecno from '../Tecno/Tecno';
import About from '../About/About';
import Services from '../Services/Services';
import Skills from '../Skills/Skills';
import Proyects from '../Proyects/Proyects';
import Portafolio from '../Portafolio/Portafolio';
import Contact from '../Contact/Contact';
import { Box } from '@chakra-ui/react';

const Main = () => {
    return (
        <Box as='main'>
            <Hero></Hero>
            <Tecno></Tecno>
            <About></About>
            <Services></Services>
            <Skills></Skills>
            <Proyects></Proyects>
            <Portafolio></Portafolio>
            <Contact></Contact>
        </Box>
        
    );
}

export default Main;
