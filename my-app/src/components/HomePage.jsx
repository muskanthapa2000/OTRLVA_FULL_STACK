import React, { useState, useEffect } from 'react';
import { Box, Text, Select, Flex, Button, Image, SimpleGrid, IconButton } from '@chakra-ui/react';
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const HomePage = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerPage = 3;

  // Fetch locations from JSON server
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch('https://trevelioussite.onrender.com/destination');
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  const totalSlides = Math.ceil(locations.length / slidesPerPage);
  const startSlide = currentSlide * slidesPerPage;
  const endSlide = startSlide + slidesPerPage;
  const currentLocations = locations.slice(startSlide, endSlide);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  return (
    <div>
      {/* Existing code */}
      
      <Box marginTop="5rem">
        <Text fontSize="4xl" fontWeight="bold" color="white">
          FIND POPULAR DESTINATIONS
        </Text>
        <SimpleGrid columns={3} spacing={4} marginTop="2rem">
          {currentLocations.map((location) => (
            <Box
              key={location.id}
              backgroundColor="white"
              borderRadius="md"
              padding="1rem"
              boxShadow="md" // Add boxShadow property for shadow border
            >
              <Image
                src={location.image}
                alt={location.name}
                maxHeight={200} // Set the maxHeight property
                width="100%" // Set the width property
                objectFit="cover"
                borderRadius="md"
              />
              <Text fontSize="xl" fontWeight="bold" marginTop="1rem">
                {location.name}
              </Text>
              <Text>{location.description}</Text>
              <Flex justifyContent="space-between" alignItems="center" marginTop="1rem">
                <Text fontWeight="bold" color="darkorange">
                  ${location.price}
                </Text>
                <Button colorScheme="orange" variant="solid" size="sm">
                  Book Now
                </Button>
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
        {totalSlides > 1 && (
          <Flex justifyContent="center" alignItems="center" marginTop="2rem">
            <IconButton
              icon={<ChevronLeftIcon />}
              onClick={handlePrevSlide}
              disabled={currentSlide === 0}
              colorScheme="orange"
              variant="solid"
              size="lg"
              marginRight="1rem"
            />
            <IconButton
              icon={<ChevronRightIcon />}
              onClick={handleNextSlide}
              disabled={currentSlide === totalSlides - 1}
              colorScheme="orange"
              variant="solid"
              size="lg"
            />
          </Flex>
        )}
      </Box>
    </div>
  );
};

export default HomePage;
