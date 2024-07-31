import React from 'react';
import {
    Box,
    Flex,
    Link,
    HStack,
    IconButton,
    Menu,
    MenuList,
    MenuItem,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={{md:'#fcfbf2', base:'rgb(50,51,51)'}}  as='header' pl={{ base: '0', md: '20%', lg: '35%' }}>
                <Flex
                    h={16}
                    alignItems={'center'}
                    justifyContent={{ md: 'space-between', base: 'center' }}
                    m={{ base: '0', md:'3% 15% 0 15%' }}
                >
                    {/* IconButton for mobile menu */}
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon color='white' /> : <HamburgerIcon color='white'/>}
                        aria-label={'Open Menu'}
                        display={{md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                        bg='rgb(50,51,51)'
                        variant='outline'
                        

                    />

                    {/* Desktop navigation */}
                    <HStack
                        spacing={2}
                        display={{ base: 'none', md: 'flex' }}
                    >
                        <Link variant={'nav'}>Acerca de</Link>
                        <Link variant={'nav'}>Servicios</Link>
                        <Link variant={'nav'}>Experiencia</Link>
                        <Link variant={'nav'}>Currículum</Link>
                        <Link variant={'nav'}>Contacto</Link>
                    </HStack>
                </Flex>

                {/* Mobile menu */}
                {isOpen && (
                    <Box 
                    pb={4} 
                    display={{ md: 'none' }} 
                    >
                        <Stack as={'nav'} spacing={4} align={'center'}>
                            <Link variant={'nav2'} onClick={onClose}  textAlign='center' p={4}>Acerca de</Link>
                            <Link variant={'nav2'} onClick={onClose}  textAlign='center' p={4}>Servicios</Link>
                            <Link variant={'nav2'} onClick={onClose}  textAlign='center' p={4}>Experiencia</Link>
                            <Link variant={'nav2'} onClick={onClose}  textAlign='center' p={4}>Currículum</Link>
                            <Link variant={'nav2'} onClick={onClose}  textAlign='center' p={4}>Contacto</Link>
                        </Stack>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default Header;
