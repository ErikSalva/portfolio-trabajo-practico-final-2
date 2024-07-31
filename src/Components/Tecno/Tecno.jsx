import { Box, HStack, VStack, Image, Text, Flex } from '@chakra-ui/react';
import React from 'react';

const Tecno = () => {
    return (

        <Box as='section'
            backgroundColor={'rgb(50,51,51)'}
            color={'white'}
            p={'0 15%'}
        >
            <HStack width={{base: '100%', lg:'50%'}} justifyContent={'space-between'}>
                <HStack 
                    width={'20%'}
                    padding={'20px 10px 20px 0'}
                    fontWeight={'600'}
                >
                    <Image 
                        src='/img/1200px-HTML5_Badge.svg.png'
                        width={'40%'}
                    > </Image>
                    <Text as='p' fontSize={{base:'xs', sm:'sm'}}>Html</Text>
                </HStack>

                <HStack 
                    width={'20%'}
                    padding={'20px 10px 20px 0'}
                    fontWeight={'600'}

                >
                    <Image 
                        src='/img/CSS3_logo.svg.png'
                        width={'40%'}
                    > </Image>
                    <Text as='p' fontSize={{base:'xs', sm:'sm'}} >Css</Text>
                </HStack>

                <HStack 
                    width={'20%'}
                    padding={'20px 10px 20px 0'}
                    fontWeight={'600'}

                >
                    <Image 
                        src='/img/python-5-logo-svg-vector.svg'
                        width={'40%'}
                    > </Image>
                    <Text as='p' fontSize={{base:'xs', sm:'sm'}}>Python</Text>
                </HStack>

                <HStack 
                    width={'20%'}
                    padding={'20px 10px 20px 0'}
                    fontWeight={'600'}

                >
                    <Image 
                        src='/img/csharp-logo.svg'
                        width={'40%'}
                    > </Image>
                    <Text as='p' fontSize={{base:'xs', sm:'sm'}}>C#</Text>
                </HStack>
            </HStack>

        </Box>

    );
}

export default Tecno;
