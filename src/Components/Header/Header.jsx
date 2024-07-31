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
import { Link as ScrollLink } from 'react-scroll';


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
                        alignItems={'center'}
                    >
                        <ScrollLink to="about" smooth={true} duration={500}>
                            <Link as='button' variant={'nav'} >Acerca de</Link>
                        </ScrollLink>       

                        <ScrollLink to="services" smooth={true} duration={500} >
                            <Link as='button' variant={'nav'}>Servicios</Link>
                        </ScrollLink>   

                        <ScrollLink to="experience" smooth={true} duration={500} >
                            <Link as='button' variant={'nav'}>Experiencia</Link>
                        </ScrollLink>   

                        <ScrollLink to="curriculum" smooth={true} duration={500} >
                            <Link as='button' variant={'nav'}>Currículum</Link>
                        </ScrollLink>   

                        <ScrollLink to="contact" smooth={true} duration={700} >
                            <Link as='button' variant={'nav'}>Contacto</Link>
                        </ScrollLink>  

                    </HStack>
                </Flex>

                {/* Mobile menu */}
                {isOpen && (
                    <Box 
                    pb={4} 
                    display={{ md: 'none' }} 
                    >
                        <Stack as={'nav'} spacing={4} align={'center'}>
                
                            <ScrollLink to="about" smooth={true} duration={500} >

                                <Link 
                                variant={'nav2'} 
                                onClick={onClose}  
                                textAlign='center' 
                                p={4}
                                as='button'                                
                                >Acerca de</Link>

                                
                            </ScrollLink> 

                            <ScrollLink to="services" smooth={true} duration={500} >
                                <Link 
                                variant={'nav2'} 
                                onClick={onClose}  
                                textAlign='center' 
                                p={4}
                                as='button'
                                >Servicios</Link>

                            </ScrollLink>

                            <ScrollLink to="experience" smooth={true} duration={500} >
                                <Link 
                                variant={'nav2'} 
                                onClick={onClose}  
                                textAlign='center' 
                                p={4}
                                as='button'
                                >Experiencia</Link>
                            </ScrollLink>
                            
                            <ScrollLink to="curriculum" smooth={true} duration={500} >
                                <Link 
                                variant={'nav2'} 
                                onClick={onClose}  
                                textAlign='center' 
                                as='button'
                                p={4}>Currículum</Link>

                            </ScrollLink>

                            <ScrollLink to="contact" smooth={true} duration={500}>

                                <Link 
                                variant={'nav2'} 
                                onClick={onClose}  
                                textAlign='center' 
                                as='button'
                                p={4}>Contacto</Link>

                            </ScrollLink>      

                        </Stack>
                    </Box>
                )}
            </Box>
        </>
    );
};

export default Header;
