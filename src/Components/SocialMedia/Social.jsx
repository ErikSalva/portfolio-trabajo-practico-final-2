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
import { Link as ScrollLink } from 'react-scroll';
import { FaGithub } from "react-icons/fa";


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
                    <ScrollLink to="about" smooth={true} duration={500}>
                        <Link variant={'nav'} as='button'>Acerca de</Link>
                    </ScrollLink>       

                    <ScrollLink to="services" smooth={true} duration={500} >
                        <Link variant={'nav'} as='button'>Servicios</Link>
                    </ScrollLink>   

                    <ScrollLink to="experience" smooth={true} duration={500} >
                        <Link variant={'nav'} as='button'>Experiencia</Link>
                    </ScrollLink>   

                    <ScrollLink to="curriculum" smooth={true} duration={500} >
                        <Link variant={'nav'} as='button'>Currículum</Link>
                    </ScrollLink>   

                    <ScrollLink to="contact" smooth={true} duration={500} >
                        <Link variant={'nav'} as='button'>Contacto</Link>
                    </ScrollLink> 
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
                        <ScrollLink to="about" smooth={true} duration={700}>
                            <MenuItem as='button' >Acerca de</MenuItem>
                        </ScrollLink>    

                        <ScrollLink to="services" smooth={true} duration={500}>
                            <MenuItem as='button'>Servicios</MenuItem>
                        </ScrollLink>

                        <ScrollLink to="experience" smooth={true} duration={500}>
                            <MenuItem as='button'>Experiencia</MenuItem>
                        </ScrollLink>       

                        <ScrollLink to="curriculum" smooth={true} duration={500}>
                            <MenuItem as='button'>Currículum</MenuItem>
                        </ScrollLink>       

                        <ScrollLink to="contact" smooth={true} duration={500}>
                            <MenuItem as='button'>Contacto</MenuItem>
                        </ScrollLink>       


                    </MenuList>
                </Menu>
            )}



            <HStack
                spacing={10}
                mt={'3%'}

            >
                <Link href='https://www.facebook.com/Erikshalva/' isExternal>
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

                <Link href='https://www.linkedin.com/in/eriksalvatierra/' isExternal>
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

                <Link href='https://www.instagram.com/erik_shalva/' isExternal>
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

                <Link href='https://github.com/ErikSalva' isExternal>
                    <Box
                        as={FaGithub}
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
