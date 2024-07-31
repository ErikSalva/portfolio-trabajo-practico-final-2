import { Box, Flex, Heading, HStack, Link, Text, Stack } from '@chakra-ui/react';
import React from 'react';
import heroimage from '/img/hero-image.png'

import { Link as ScrollLink } from 'react-scroll';


const Hero = () => {
    return (
        <Flex as='section'
            p={{md:'0 0 0 15%', base:'0 15% 0 15%'}}
            height= '80vh'
            justifyContent={'center'}
            alignItems={'center'}
            bg='#fcfbf2'
        
        >
             <Flex 
                height={'100%'}
                width={'100%'}
                alignItems={'center'}
                justifyContent={'flex-start'}
                backgroundImage={{base: 'none', xl: `url(${heroimage})`}}
                bgRepeat={'no-repeat'}
                backgroundPosition={{xl:'150% center','2xl': '80% center'}}
                bgSize={{'2xl': '75%' , xl:'90%'}}
             >

                <Box>
                    <Heading
                        as='h1'
                        size='4xl'
                        fontSize={{sm:'6xl', md:'8xl', base:'4xl'}}
                        color={'rgb(50,51,51)'}
                        fontWeight={'bold'}
                        m={'0'}
                        noOfLines={2}
                    >
                        Hola, soy <br/>Erik
                    </Heading>
                    
                    <Text
                        color={'rgb(50,51,51)'}
                        fontSize={{lg:'2xl'}}
                        fontWeight={'800'}
                        as='h2'
                        mt='5%'
                    
                    >Soy estudiante de desarrollo web <Text as='span'color={'#18e738'}>.</Text></Text>
                    <Stack
                        direction={{base:'column', sm:'row'}}
                        fontSize={{base:'md'}}
                        spacing={10}
                        mt={'5%'}
                    >
                        <ScrollLink to="contact" smooth={true} duration={500} >
                            <Link variant={'v1'} as='button'>CONTACTO</Link>
                        </ScrollLink>

                        <ScrollLink to="experience" smooth={true} duration={500} >
                            <Link variant={'v2'} as='button'>SKILLS</Link>
                        </ScrollLink>
                    </Stack>
                    
                </Box> 
            </Flex>
        </Flex>
    );
}

export default Hero;
