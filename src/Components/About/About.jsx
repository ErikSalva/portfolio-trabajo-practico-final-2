import { Box, Flex, HStack, Stack, Text, Image } from '@chakra-ui/react';
import React from 'react';

const About = () => {
    return (
        <Flex as='section'
            bg={'white'}
            p='5% 15%'
            alignItems={'center'}
            justifyContent={'center'}
            id='about'
        >
            <Stack direction={['column', 'row']} justifyContent={'space-between'}>
                <Box width={{base:'100%', md:'50%'}} textAlign={'justify'}>
                    <Text

                        color={'rgb(50,51,51)'}
                        fontSize={{base:'xl', sm:'2xl', lg:'3xl'}}
                        fontWeight={'800'}
                        as='h2'
                        m={'3% 0'}
                    >Sobre mí</Text>

                    <Text 
                        color={'rgb(50,51,51)'}
                        fontSize={{lg:'xl'}}
                        fontWeight={'600'}
                        as='h3'
                        mb={'1%'}
                    >Introducción</Text>

                    <Text fontSize={'sm'}>¡Hola! Soy Erik, un apasionado estudiante de Ingeniería en Sistemas en la UTN FRC, con un ferviente deseo de explorar y dominar el mundo del desarrollo de software. Actualmente, estoy inmerso en un emocionante curso de Desarrollo Full Stack, donde estoy expandiendo mis habilidades y conocimientos para convertirme en un desarrollador versátil y eficiente.</Text>
                </Box>
                
                <Box display={{base:'none', md:'Block'}} width={'35%'}>
                    <Image 
                        src='../../../public/img/about-image.jpg'
                    > </Image>
                </Box>


        

            </Stack>
        
        </Flex>
    );
}

export default About;
