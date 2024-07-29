import { Box, Flex, HStack, Link, Text } from '@chakra-ui/react';
import React from 'react';
import heroimage from '../../../public/img/hero-image.png'


const Hero = () => {
    return (
        <Flex as='section'
            p='0 0 0 15%'
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
                    <Text
                        fontSize={{lg:'8xl'}}
                        color={'rgb(50,51,51)'}
                        fontWeight={'bold'}
                        as='h1'
                        m={'0'}
                    >
                        Hola, soy <br/>Erik
                    </Text>
                    <Text
                        color={'rgb(50,51,51)'}
                        fontSize={{lg:'2xl'}}
                        fontWeight={'800'}
                        as='h2'
                    
                    >Soy estudiante de desarrollo web <Text as='span'color={'#18e738'}>.</Text></Text>
                    <HStack
                        spacing={'50px'}
                        mt={'5%'}
                    >
                        <Link variant={'v1'}>CONTACTO</Link>
                        <Link variant={'v2'}>SKILLS</Link>
                    </HStack>
                    
                </Box> 
            </Flex>
        </Flex>
    );
}

export default Hero;
