import React, { useState } from 'react';
import { Box, Button, Flex, Grid, Heading, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    category: 'FRONTEND',
    title: 'Petshop E‑commerce',
    img: '/img/proyecto-ecommerce.png',
    repo: 'https://github.com/ErikSalva/petshop-ecommerce',
  },
  {
    id: 2,
    category: 'BACKEND',
    title: 'Petshop E‑commerce',
    img: '/img/proyecto-ecommerce.png',
    repo: 'https://github.com/ErikSalva/petshop-ecommerce',
  },
  {
    id: 3,
    category: 'FRONTEND',
    title: 'Login Page',
    img: '/img/proyecto-login.png',
    repo: 'https://github.com/ErikSalva/image-based-web-project-login-page',
  },
  {
    id: 4,
    category: 'FRONTEND',
    title: 'What We Offer Section',
    img: '/img/proyecto-servicios.png',
    repo: 'https://github.com/ErikSalva/image-based-web-project--what-we-offer-section-design',
  },
  {
    id: 5,
    category: 'DESARROLLO CON C#',
    title: 'ABMC YPF',
    img: '/img/proyecto-pav.png',
    repo: 'https://github.com/ErikSalva/TPPAV2022',
  },
  {
    id: 6,
    category: 'FRONTEND',
    title: 'Star Wars Explorer',
    img: '/img/proyecto-star-wars.png',
    repo: 'https://github.com/ErikSalva/starwars-explorer',
  },

  {
    id: 7,
    category: 'FRONTEND',
    title: 'Formulario de Registro',
    img: '/img/proyecto-form2.png',
    repo: 'https://github.com/ErikSalva/tp-opcional-form2',
  },
];

const categories = ['TODOS LOS PROYECTOS', 'FRONTEND', 'BACKEND', 'DESARROLLO CON C#'];

const ProjectGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('TODOS LOS PROYECTOS');
  const [visibleProjects, setVisibleProjects] = useState(4);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setVisibleProjects(4);
  };

  const handleLoadMore = () => {
    if (visibleProjects >= filteredProjects.length) {
      setVisibleProjects(4);
    } else {
      setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 2);
    }
  };

  const filteredProjects =
    selectedCategory === 'TODOS LOS PROYECTOS'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Box p={{ base: 4, md: 8 }}>
      <Heading 
        textAlign="center" 
        mb={5}
        color={'rgb(50,51,51)'}
        fontSize={{base:'xl', sm:'2xl', lg:'3xl'}}
        fontWeight={'800'}
        as='h2'
        m='4%'
      >
        Mira mi portafolio
      </Heading>
      
      <Flex justifyContent="center" mb={5} direction={{base: 'column', lg:'row'}} wrap="wrap">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => handleCategoryClick(category)}
            mx={2}
            my={1}
            bg={selectedCategory === category ? '#18e738' : 'white'}
            color={selectedCategory === category ? 'white' : 'black'}            
            border={'none'}
            fontSize={'xs'}
            transition={'all 0.3s'}
            _hover={{
              backgroundColor: '#18e738',
              color: 'white',
            }}
          >
            {category}
          </Button>
        ))}
      </Flex>
      
      <Grid templateColumns={{base:"1fr", lg:"repeat(2, 1fr)"}} gap={6}>
        {filteredProjects.slice(0, visibleProjects).map((project) => (
          <Box
            key={project.id}
            h={{base: '200px', sm: '250px', md: '300px', lg: '350px', xl: '400px'}}
            bg="white"
            borderRadius="xl"
            overflow="hidden"
            position="relative"
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            _hover={{
              boxShadow: '0 5px 15px rgba(24, 231, 56, 0.3)',
              transform: 'translateY(-5px)'
            }}
            transition="all 0.3s ease"
          >
            <Image
              src={project.img}
              alt={project.title}
              boxSize="full"
              objectFit="cover"
            />
            <Box
              position="absolute"
              bottom="0"
              left="0"
              right="0"
              bg="rgba(0, 0, 0, 0.7)"
              color="white"
              p={3}
            >
              <Heading as="h3" fontSize="lg" mb={1}>{project.title}</Heading>
              <Flex justifyContent="space-between" alignItems="center">
                <Box fontSize="sm" color="#18e738">{project.category}</Box>
                <Button 
                  as="a"
                  href={project.repo}
                  target="_blank"
                  size="sm"
                  bg="#18e738"
                  color="white"
                  _hover={{ bg: '#12b52e' }}
                >
                  Ver código
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>
      
      {filteredProjects.length > 4 && (
        <Flex justifyContent="center" mt={8}>
          <Button 
            onClick={handleLoadMore} 
            bg="transparent"
            border="2px solid #18e738"
            color="#18e738"
            _hover={{
              bg: '#18e738',
              color: 'white'
            }}
            px={8}
            py={2}
            borderRadius="full"
            fontWeight="bold"
          >
            {visibleProjects >= filteredProjects.length ? 'MOSTRAR MENOS' : 'CARGAR MÁS PROYECTOS'}
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default ProjectGallery;