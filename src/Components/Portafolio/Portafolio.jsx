import React from 'react';
import { Box, HStack, VStack, Image, Text, Flex, Progress, Center, Stack, Heading } from '@chakra-ui/react';
import ProjectGallery from './ProyectGallery';

const Portafolio = () => {
    return (
        <Box as='section' bg={'white'} p={'5% 15%'}>
            <ProjectGallery></ProjectGallery>
        </Box>
    );
}

export default Portafolio;
