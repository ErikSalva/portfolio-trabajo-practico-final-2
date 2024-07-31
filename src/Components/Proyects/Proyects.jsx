import React from 'react';
import { Box, Flex, Text, Link, Heading } from '@chakra-ui/react';
import Carousel from './Carousel';
import { Link as ScrollLink } from 'react-scroll';


const Proyects = () => {
    return (
        <Flex bg='#fcfbf2'  p='5% 15%' as='section' id='curriculum'>
            <Box w='100%'>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Heading
                        color={'rgb(50,51,51)'}
                        fontSize={{lg:'3xl'}}
                        fontWeight={'800'}
                        as='h2'
                        m={'3% 0'}
                    >Proyectos Recientes</Heading>
                    <ScrollLink to="portafolio" smooth={true} duration={500} >
                        <Link variant={'v4'} >Ver Todos</Link>
                    </ScrollLink>

                    
                </Flex>
                <Carousel></Carousel>
            </Box>
            
        </Flex>
    );
}

export default Proyects;
