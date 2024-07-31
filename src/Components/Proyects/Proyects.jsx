import React from 'react';
import { Box, Flex, Text, Link, Heading } from '@chakra-ui/react';
import Carousel from './Carousel';
import Carouselb from './Carouselb';

const Proyects = () => {
    return (
        <Flex bg='#fcfbf2'  p='5% 15%' as='section'>
            <Box w='100%'>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Heading
                        color={'rgb(50,51,51)'}
                        fontSize={{lg:'3xl'}}
                        fontWeight={'800'}
                        as='h2'
                        m={'3% 0'}
                    >Proyectos Recientes</Heading>
                    <Link variant={'v4'} >Ver Todos</Link>
                </Flex>
                <Carousel></Carousel>
            </Box>
            
        </Flex>
    );
}

export default Proyects;
