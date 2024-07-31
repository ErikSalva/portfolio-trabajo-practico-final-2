import React from 'react';
import { Box, Flex, Text, VStack, Stack } from '@chakra-ui/react';
import FormContact from './FormContact';
const Contact = () => {
    return (
        <Box bg='#fcfbf2'  p='5% 15%' as='section' id='contact'>
            <Stack 
            w={'100%'} 
            justifyContent={'space-between'} 
            direction={{base:'column', lg:'row'}} 
            spacing={{base:'5', lg:'0'}}
            >
                <Box >
                    <Text
                        color={'rgb(50,51,51)'}
                        fontSize={{base:'xl', sm:'2xl', lg:'3xl'}}
                        fontWeight={'800'}
                        as='h2'
                        m={'1% 0'}
                        
                    > Hagamos algo <br/>increíble juntos</Text>
                    <Text>¡Puedes contactarme <Text as='span' color='#ff6253'>aquí!</Text></Text>  
                </Box>
                <FormContact></FormContact>
            </Stack>
        </Box>
    );
}

export default Contact;
