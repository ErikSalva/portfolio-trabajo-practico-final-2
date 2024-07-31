import React from 'react';
import { Box, Flex, Text, Stack, InputGroup, Input, Button, InputRightElement, VStack } from '@chakra-ui/react';

import InputNews from './InputNews';

const Newsletter = () => {
    return (
        <Box bg='#fff6ca'  p='5% 15%' as='section' >
            <Stack
            direction={{lg:'row', base:'column'}}
            justifyContent={'center'} 
            alignItems={'center'} 
            spacing={{base: '5', lg:'10'}}
            w={'100%'}
            >

                <Text
                    color={'rgb(50,51,51)'}
                    fontWeight={'600'}
                >Boletín de Noticias</Text>
                
                <InputNews></InputNews>
            </Stack>

           
        </Box>
    );
}

export default Newsletter;
