import React from 'react';

import { 
    Box, 
    HStack, 
    VStack, 
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem, 
    Button, 
    IconButton, 
    Text, 
    useBreakpointValue, 
    Link } from '@chakra-ui/react';


import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HamburgerIcon } from '@chakra-ui/icons';

import { HiMenu } from 'react-icons/hi';


const Social = () => {

    // Determina si estamos en una pantalla pequeña (menor o igual a md)
    const isMobile = useBreakpointValue({ base: true, md: false });
    return (
        <Box 
            p={'3% 15% 2% 15%'}
            bg={'#fcfbf2'}

        >   
        <VStack alignItems='center' justifyContent={'center'}>


            {/* Menú de Navegación para pantallas grandes */}
            {!isMobile && (
                <HStack spacing={5}>
                    <Link variant='nav'>Acerca de</Link>
                    <Link variant='nav'>Servicios</Link>
                    <Link variant='nav'>Experiencia</Link>
                    <Link variant='nav'>Currículum</Link>
                    <Link variant='nav'>Contacto</Link>
                </HStack>
            )}

            {/* Menú Desplegable para pantallas pequeñas */}
            {isMobile && (
                <Menu>
                    <MenuButton
                        as={IconButton}
                        icon={<HiMenu />}
                        aria-label="Open Menu"
                        bg={'#fcfbf2'}
                        border={'1px'}
                        borderColor={'black'}
                        variant='outline'

                    >
                        Menú
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Acerca de</MenuItem>
                        <MenuItem>Servicios</MenuItem>
                        <MenuItem>Experiencia</MenuItem>
                        <MenuItem>Currículum</MenuItem>
                        <MenuItem>Contacto</MenuItem>
                    </MenuList>
                </Menu>
            )}



            <HStack
                spacing={10}
                mt={'3%'}

            >
                <Link>
                    <Box
                        as={FaFacebookSquare}
                        color='#ff6253'
                        size='30px'
                        transition='all 0.5s'
                        _hover={{
                            color: '#18e738'
                        }}
                    />
                </Link>

                <Link>
                    <Box
                        as={FaLinkedin}
                        color='#ff6253'
                        size='30px'
                        transition='all 0.5s'
                        _hover={{
                            color: '#18e738'
                        }}
                    />
                 </Link>

                <Link>
                    <Box
                        as={FaInstagram}
                        color='#ff6253'
                        size='30px'
                        transition='all 0.5s'
                        _hover={{
                            color: '#18e738'
                        }}
                    />
                </Link>
            </HStack>

            <Text fontSize={{md:'sm', base:'xs'}} mt={'2%'}>@Copyright 2024 - Erik Salvatierra</Text>
               



        </VStack>
            
        </Box>
    );
}

export default Social;
