import React from 'react';
import { Box, HStack, VStack, Image, Text, Flex, Progress, Center, Stack, Heading } from '@chakra-ui/react';
import ProjectGallery from './ProyectGallery';

const Portafolio = () => {
    return (
        <Box as='section' bg={'white'} p={'3% 15%'} id='portafolio'>
            <ProjectGallery></ProjectGallery>
        </Box>
    );
}

export default Portafolio;
