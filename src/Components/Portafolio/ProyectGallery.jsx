import React, { useState } from 'react';
import { Box, Button, Flex, Grid, Heading, Image } from '@chakra-ui/react';
import { motion} from 'framer-motion';

const projects = [
  {
    id: 1,
    category: 'FRONTEND',
    title: 'Project 1',
    img: '../../../public/img/proyecto-form2.png',
  },
  {
    id: 2,
    category: 'DESARROLLO CON C#',
    title: 'Project 2',
    img: '../../../public/img/proyecto-carrito.png',
  },
  {
    id: 3,
    category: 'FRONTEND',
    title: 'Project 3',
    img: '../../../public/img/proyecto-navbar.png',
  },
  {
    id: 4,
    category: 'FRONTEND',
    title: 'Project 4',
    img: '../../../public/img/proyecto-login.png',
  },
  {
    id: 5,
    category: 'DESARROLLO CON C#',
    title: 'Project 5',
    img: '../../../public/img/proyecto-pav.png',
  },
  {
    id: 6,
    category: 'GESTION DE BASE DE DATOS',
    title: 'Project 6',
    img: '../../../public/img/proyecto-pav.png',
  },
  {
    id: 7,
    category: 'FRONTEND',
    title: 'Project 7',
    img: '../../../public/img/proyecto-servicios.png',
  },

];

const categories = ['TODOS LOS PROYECTOS', 'FRONTEND', 'DESARROLLO CON C#', 'GESTION DE BASE DE DATOS'];

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
    <Box>
      <Heading textAlign="center" mb={5}
        color={'rgb(50,51,51)'}
        fontSize={{lg:'3xl'}}
        fontWeight={'800'}
        as='h2'
        m={'1% 0'}
      >
        Mira mi portafolio
      </Heading>
      <Flex justifyContent="center" mb={5} direction={{base: 'column', lg:'row'}}>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => handleCategoryClick(category)}
            mx={2}
            bg={selectedCategory === category ? '#18e738' : 'white'}
            color={selectedCategory === category ? 'white' : 'black'}            
            border={'none'}
            fontSize={'xs'}
            transition={'all 0.3s'}
            _hover={{
                backgroundColor: '#18e738',
                color:'white',

              }}

          >
            {category}
          </Button>
        ))}
      </Flex>
      <Grid templateColumns={{base:"1fr", lg:"repeat(2, 1fr)"}} gap={10}>
        {filteredProjects.slice(0, visibleProjects).map((project) => (
          <Box
            key={project.id}
            h={{lg:'350x', sm: '250px', base: '150px', md:'400px', xl:'400px', '2xl':'450px'}}
            bg="white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition='0.7s linear'
            as={motion.div}
     
          >
            <Image
              src={project.img}
              alt={project.title}
              boxSize="full"
              objectFit="cover"
              borderRadius="xl"
              _hover={{
                border: 'solid 4px #18e738;'
            }}
            />
          </Box>
        ))}
      </Grid>
      {filteredProjects.length > 4 && (
        <Flex justifyContent="center" mt={5}>
          <Button onClick={handleLoadMore} variant={'loadmore'} mt={'3%'}>
            {visibleProjects >= filteredProjects.length ? 'MOSTRAR MENOS' : 'CARGAR MÁS PROYECTOS'}
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default ProjectGallery;