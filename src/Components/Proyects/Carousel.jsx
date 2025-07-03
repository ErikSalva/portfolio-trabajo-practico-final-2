import React, { useState } from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';

const Carousel = () => {

    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "black",
        fontWeight: "bold",
        fontSize: "4xl",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
          opacity: 0.8,
          bg: "yellow",
        },
      };
      const slides = [
        {
          img: "/img/proyecto-ecommerce.png",
        },
                {
          img: "/img/proyecto-star-wars.png",
        },
        {
          img: "/img/proyecto-login.png",
        },

        {
          img: "/img/proyecto-servicios.png",
        },
        
        {
          img: "/img/proyecto-pav.png",
        },
      ];
      const [currentSlide, setCurrentSlide] = useState(0);
      const slidesCount = slides.length;
    
      const prevSlide = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
      };
    
      const nextSlide = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
      };
    
      const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
      };
      
    return (
        <Flex
            w="full"
            bg='#fcfbf2'
            _dark={{
            bg: "#3e3e3e",
            }}
            p={{lg:10, base:0}}
            alignItems="center"
            justifyContent="center"
            
        >
            <Flex w="full" overflow="hidden" pos="relative" borderRadius={'2xl'} boxShadow={'0 0 4px -1px #898989'}>
                <Flex h={{lg:'500px', md:'350px', base:'150px', sm:'250px'}} w="full" {...carouselStyle}>
                    {slides.map((slide, sid) => (
                    <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                        <Text
                        color="black"
                        bg={'white'}
                        fontSize="xs"
                        fontWeight={'bold'}
                        p="8px 12px"
                        pos="absolute"
                        top="0"
                        >
                        {sid + 1} / {slidesCount}
                        </Text>
                        <Image
                        src={slide.img}
                        alt="carousel image"
                        boxSize="full"
                        backgroundSize="cover"
                        objectFit="cover"

                        />
                    </Box>
                    ))}
                </Flex>

                <Text {...arrowStyles} left="0" onClick={prevSlide} fontSize={{lg:'4xl', sm:'2xl', base:'xl'}}>
                    &#10094;
                </Text>
                <Text {...arrowStyles} right="0" onClick={nextSlide} fontSize={{lg:'4xl', sm:'2xl', base:'xl'}}>
                    &#10095;
                </Text>
            </Flex>

        </Flex>
    );
}

export default Carousel;
