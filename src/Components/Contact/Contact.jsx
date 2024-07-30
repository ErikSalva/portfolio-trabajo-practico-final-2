import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

const Contact = () => {
    return (
        <Box bg='#fcfbf2'  p='5% 15%' as='section'>
            <Flex w={'100%'} justifyContent={'space-between'} >
                <Box>
                    <Text
                        color={'rgb(50,51,51)'}
                        fontSize={{lg:'3xl'}}
                        fontWeight={'800'}
                        as='h2'
                        m={'1% 0'}
                    > Hagamos algo <br/>increíble juntos</Text>
                    <Text>¡Puedes contactarme <Text as='span' color='#ff6253'>aquí!</Text></Text>

                </Box>
            </Flex>
        </Box>
    );
}

export default Contact;
