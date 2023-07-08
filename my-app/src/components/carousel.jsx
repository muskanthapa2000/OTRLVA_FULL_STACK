import React, { useState } from 'react';
import { Box, Text, Button, Flex, Image, HStack, Stack } from '@chakra-ui/react';



const Carousel = () => {
    const arrowStyles = {
        cursor: "pointer",
        pos: "absolute",
        top: "50%",
        w: "auto",
        mt: "-22px",
        p: "16px",
        color: "white",
        fontWeight: "bold",
        fontSize: "18px",
        transition: "0.6s ease",
        borderRadius: "0 3px 3px 0",
        userSelect: "none",
        _hover: {
          opacity: 0.8,
          bg: "black",
        },
      };
      const slides = [
        {
          img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          label:  "Travelious really helped me in finding the best location for my first adventure trip. Their respinse was very fast and able to tell in detail about the ceita or the history of the place I was going to visit ",
          description: "Alice Agasta, Entrepreneur",
        },
        {
          img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          label:  "I recently booked a trip through this travel website and I must say, the experience was amazing! The website was user-friendly, the booking process was seamless, and the customer service was top-notch. Highly recommended!",
          description: "Prakhar Sharma, Entrepreneur",
        },
        {
          img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          label:  "I've been using this travel website for years now, and it never disappoints. They offer a wide range of destinations and options, and their prices are always competitive. I've had incredible travel experiences thanks to this website.",
          description: "Megha Meena, Entrepreneur",
        },
        {
          img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          label: "The travel website made it so easy for me to plan my vacation. I could compare different flights, hotels, and activities all in one place. Plus, they provided detailed information and reviews, which helped me make informed decisions. I'll definitely be using this website again!",
          description: "Khushi Sharma, Entrepreneur",
        },
        {
          img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          label:  "I stumbled upon this travel website while searching for a last-minute getaway, and I'm so glad I did. They had fantastic deals on flights and accommodations, and I was able to find a perfect package within my budget. I had a fantastic trip thanks to this website.",
          description: "Ashi Jain, Entrepreneur",
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
    
      const setSlide = (slide) => {
        setCurrentSlide(slide);
      };
    
      const carouselStyle = {
        transition: "all .5s",
        ml: `-${currentSlide * 100}%`,
      };
      return (
        <Flex
          w="100%"
          borderRadius={'10px'}
          _dark={{
            bg: "#3e3e3e",
          }}
          
          alignItems="center"
          justifyContent="center"
        >
          <Flex w="100%" pos="relative" overflow="hidden" >
            <Flex h="500px" w="full" {...carouselStyle} marginTop={'2.5%'} marginBottom={'2.5%'} >
              {slides.map((slide, sid) => (
                <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
                  <Text
                 
                    color="white"
                    fontSize="md"
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
                  />
                  <Stack
                    p="8px 12px"
                    pos="absolute"
                    bottom="24px"
                    textAlign="center"
                    w="full"
                    mb="8"
                    color="white"
                  >
                    <Text fontSize="2xl"  bgColor='rgb(0,0,0,0.5)'
                  fontStyle="italic"
                  fontFamily="Helvetica"
                  padding="1rem"
                  textAlign={'center'} borderRadius={'10px'}>{slide.label}</Text>
                    <Text fontSize="lg" >{slide.description}</Text>
                  </Stack>
                </Box>
              ))}
            </Flex>
            <Text {...arrowStyles} left="0" onClick={prevSlide}>
              &#10094;
            </Text>
            <Text {...arrowStyles} right="0" onClick={nextSlide}>
              &#10095;
            </Text>
            <HStack justify="center" pos="absolute" bottom="8px" w="full">
              {Array.from({
                length: slidesCount,
              }).map((_, slide) => (
                <Box
                  key={`dots-${slide}`}
                  cursor="pointer"
                  boxSize={["7px", null, "15px"]}
                  m="0 2px"
                  bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
                  rounded="50%"
                  display="inline-block"
                  transition="background-color 0.6s ease"
                  _hover={{
                    bg: "blackAlpha.800",
                  }}
                  onClick={() => setSlide(slide)}
                ></Box>
              ))}
            </HStack>
          </Flex>
        </Flex>
      );
    };
  export default Carousel;






