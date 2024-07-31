import React from 'react';
import {

    Box,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    ButtonGroup,
    Divider,
    Center,
    Link,
    Flex
  } from '@chakra-ui/react';

import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Link as ScrollLink } from 'react-scroll';


const CardServices = ({title, description, imageUrl, color }) => {
    return (
        <Card 
            maxW='sm' border={'solid black 4px;'} 
            boxShadow={'8px 0 0 0 #000;'} 
            borderRadius={'2xl'} 
            bg={color}
            mb={{base:'30px', lg:'0'}}
        >
            <CardBody   >
                <Box display='flex' justifyContent='center'>
                    <Image
                    src= {imageUrl} //'../../../public/img/website-maintenance.svg'
                    height={'150px'}
                    />

                </Box>
            
                <Stack mt='6' >
                    <Heading size='md' color={'black'}>{title}</Heading>
                    <Text color={'black'}>
                        {description}
                    </Text>
                </Stack>


            </CardBody>
            <CardFooter justifyContent={'center'}>

            <ScrollLink to="curriculum" smooth={true} duration={500} >
                <Link variant={'v3'}>
                    COMENZAR<ArrowForwardIcon />
                </Link>
            </ScrollLink>
                
            </CardFooter>
        </Card>
    );
}

export default CardServices;
