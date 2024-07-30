import React from 'react';
import { Box, HStack, VStack, Image, Text, Flex, Progress, Center, Stack, Heading } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion'



const Skills = () => {

    const skills = [
        { name: 'Html', level: '70%', color: '#ffd400' },
        { name: 'Css', level: '65%', color: '#18e738' },
        { name: 'Python', level: '45%', color: '#18e738' },
        { name: 'C#', level: '80%', color: '#18e738' },
    ];
    return (
        <Box
            as='section'
            bg={'white'}
            p='5% 15%'

        >
             <Stack direction={['column', 'row']} justifyContent={'space-between'} width={'100%'}>
                <Box width={{base:'100%', md:'50%'}}>
                    <Heading
                        color={'rgb(50,51,51)'}
                        fontSize={{lg:'3xl'}}
                        fontWeight={'800'}
                        as='h2'
                        m={'3% 0'}
                    >Skills</Heading> 

                    {skills.map(skill => (
                        <Box key={skill.name}>
                            <Text m='2% 0' fontWeight={'600'} fontSize={'sm'}>{skill.name}</Text>
                            <Box bg={'#e0e0e0'} borderRadius={'xl'} height={'8px'} width={'100%'}>
                                <Box
                                    bg={skill.color}
                                    height={'100%'}
                                    borderRadius={'xl'}
                                    initial={{ width: '0%' }}
                                    animate={{ width: skill.level }}
                                    transition={{ duration: 1 }}
                                    as={motion.div}
                                />
                            </Box>
                        </Box>
                    ))}

                </Box>
                <Box display={{base:'none', md:'Block'}} width={'35%'}>
                    <Image src='../../../public/img/skills-image.jpg' width={'100%'}></Image>
                </Box>
            </Stack>
        </Box>
    );
}

export default Skills;