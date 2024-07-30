
import React, { useState } from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';


const Carouselb = () => {
  const slides = [
    {
      img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    },
    {
      img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
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

  const getSlideStyle = (index) => {
    const offset = (index - currentSlide + slidesCount) % slidesCount;

    if (offset === 0) {
      return {
        transform: 'scale(0.9)',
        zIndex: 2,
        transition: 'all 0.8s',
        position: 'absolute',
        left: '20%',
        width: '60%',
        height: '400px',
        filter: 'none',
      };
    } else if (offset === 1 || offset === slidesCount - 1) {
      return {
        transform: 'scale(0.8)',
        zIndex: 1,
        transition: 'all 0.8s',
        position: 'absolute',
        left: offset === 1 ? '60%' : '0',
        width: '40%',
        height: '300px',
        filter: 'blur(2px)',
      };
    } else {
      return {
        transform: 'scale(0.5)',
        zIndex: 0,
        transition: 'all 0.8s',
        position: 'absolute',
        left: offset === 2 || offset === slidesCount - 2 ? '80%' : '-20%',
        width: '20%',
        height: '200px',
        filter: 'blur(2px)',
      };
    }
  };

  return (
    <Flex
      w="full"
      bg="#fcfbf2"
      p={10}
      alignItems="center"
      justifyContent="center"
      border={'solid'}
    >
      <Flex w="full" overflow="hidden" pos="relative" height="400px" alignItems={'center'} >
        {slides.map((slide, index) => (
          <Box
            key={index}
            style={getSlideStyle(index)}
            boxSize="full"


          >
            <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
                borderRadius={'2xl'} 
                bg="#fcfbf2"
                boxShadow={'0 0 4px -1px #898989'}
            />
          </Box>
        ))}
        <Text
          cursor="pointer"
          pos="absolute"
          top="50%"
          left="0"
          transform="translateY(-50%)"
          p="16px"
          fontSize="24px"
          color="black"
          zIndex="10"
          onClick={prevSlide}
        >
          &#10094;
        </Text>
        <Text
          cursor="pointer"
          pos="absolute"
          top="50%"
          right="0"
          transform="translateY(-50%)"
          p="16px"
          fontSize="24px"
          color="black"
          zIndex="10"
          onClick={nextSlide}
        >
          &#10095;
        </Text>
      </Flex>
    </Flex>
  );
};

export default Carouselb;