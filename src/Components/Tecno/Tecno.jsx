import { Box, HStack, Image, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

const techs = [
  { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
];

const Tecno = () => {
  return (
    <Box
      as="section"
      backgroundColor={'rgb(50,51,51)'}
      color="white"
      p={{ base: '20px', md: '40px 15%' }}
    >
      <Wrap spacing={5} justify="center">
        {techs.map((tech, idx) => (
          <WrapItem key={idx}>
            <HStack
              width={{ base: '120px', sm: '140px', md: '160px' }}
              padding={'20px 10px 20px 0'}
              fontWeight="600"
              spacing={3}
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width="40%"
                maxW="40px"
                _hover={{ transform: 'scale(1.1)', transition: '0.2s' }}
              />
              <Text fontSize={{ base: 'xs', sm: 'sm' }}>{tech.name}</Text>
            </HStack>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default Tecno;
