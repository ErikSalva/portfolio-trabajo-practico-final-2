import React from 'react';
import { Box, Flex, Text, Stack, InputGroup, Input, Button, InputRightElement, VStack } from '@chakra-ui/react';
import { HiMiniPaperAirplane } from "react-icons/hi2";


const InputNews = () => {
    return (
        <InputGroup size={'lg'} width={{lg:'30%', base: '100%'}} >
            <Input
                placeholder='Tu correo'
                bg={'white'}
                borderRadius={'2xl'}
                p={8}
                border={'0'}
            ></Input>


            <InputRightElement width='4.5rem' >
                <Button 
                h='2.5rem'      
                size='sm'
                borderRadius={'full'}
                bg={'#ff6253'}
                transition = 'all 0.5s'
                _hover={{
                    bg: '#18e738',
                }}
                mt={4}
            ><HiMiniPaperAirplane color='white' style={{ transform: 'rotate(-45deg)' }}/></Button>
            </InputRightElement>
    
        </InputGroup>
    
    );
}

export default InputNews;
