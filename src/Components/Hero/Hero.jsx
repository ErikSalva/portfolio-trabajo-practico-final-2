import { Box } from '@chakra-ui/react';
import React from 'react';

const Hero = () => {
    return (
        <Box as='section'>
             <Box class="hero-content">
                <div class="hero-text">
                    <h1 class="hero-title color-title">Hola, soy <br/>Erik</h1>
                    <h2 class="hero-subtitle color-title">Soy estudiante de desarrollo web<span class="hero-subtitle-punto">.</span></h2>
                    <div class="hero-button-container">
                        <a href="" class="hero-button-contact">CONTACTO</a>
                        <a href="" class="hero-button-skills">SKILLS</a>
                    </div>
                    
                </div> 
            </Box>
        </Box>
    );
}

export default Hero;
