import React from 'react';
import './Header.css'

import {
    Box,
    Flex,
    Spacer,
    Link,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'



const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Box bg='#fcfbf2' as='header' pl='35%'>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} m='3% 15% 0 15%'>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Flex
                        width='40%'
                        justifyContent='space-between'
                        display={{base:'none', md:'flex'}}
                    >
                        <Link>Acerca de</Link>
                        <Link>Servicios</Link>
                        <Link>Experiencia</Link>
                        <Link>Currículum</Link>
                        <Link>Contacto</Link>
                    </Flex>
                    

                </Flex>
          
                   

            </Box>
           
        </>
    );
}

export default Header;
