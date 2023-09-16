import React, { useState, useEffect } from 'react';
import { Box, Text, Select, Flex, Button, Image, SimpleGrid, IconButton, Center, Heading } from '@chakra-ui/react';
import { SearchIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FcCustomerSupport, FcOvertime, FcApproval } from 'react-icons/fc';
import { FontAwesomeIcon } from 'react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
import Carousel from "./carousel";






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
        const response = await fetch('https://prussian-blue-harp-seal-coat.cyclic.cloud/data');
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
      <Box position="relative" display="inline-block" width="100%" height="auto">
        <img
          src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
          alt="Travel"
          style={{ height: '100%', width: '100%' }}
        />

        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          bg="rgba(0, 0, 0, 0)"
          padding="1rem"
        >
          <div>
            <Text fontSize="5xl" fontWeight="bold" fontFamily="Helvetica" color="#306754">
              LIVE YOUR <Text as="span" color="darkorange">ADVENTURE</Text>
            </Text>
          </div>

          <div style={{ marginTop: '15%' }}>
            <Flex direction="row" alignItems="center" marginTop="2rem">
              <Box marginBottom="1rem" marginTop="20%" marginRight="5%" marginLeft="10%">
                <Text fontSize="4xl" fontWeight="bold" color="white">
                  Location
                </Text>
                <Flex alignItems="center" marginTop="0.5rem">
                  <Select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: 'darkorange',
                      border: 'none',
                      padding: '0.5rem',
                      fontWeight: 'bold',
                      outline: 'none',
                      marginRight: '0.5rem',
                    }}
                  >
                    <option value="" disabled>
                      Select location
                    </option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.name}>
                        {location.name}
                      </option>
                    ))}
                  </Select>
                </Flex>
              </Box>

              <Box marginBottom="1rem" marginTop="20%" marginRight="5%">
                <Text fontSize="4xl" fontWeight="bold" color="white">
                  Date
                </Text>
                <Flex alignItems="center" marginTop="0.5rem">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    style={{
                      backgroundColor: 'rgba(0, 0, 0, 0.5)',
                      color: 'darkorange',
                      border: 'none',
                      padding: '0.5rem',
                      fontWeight: 'bold',
                      outline: 'none',
                      borderRadius: '8px',
                    }}
                  />
                </Flex>
              </Box>

              <Button colorScheme="orange" variant="solid" size="md" marginTop="26%" leftIcon={<SearchIcon />}>
                Search
              </Button>
            </Flex>
          </div>

          <div style={{ marginTop: '35%' }}>
            <Box
              fontSize="3xl"
              fontFamily="Helvetica"
              color="white"
              backgroundColor="rgba(0, 0, 0, 0.5)"
              padding="1rem"
              borderRadius="10px"
              fontStyle="italic"
            >
              Don't wait until tomorrow, discover your adventure now and feel the sensation of closeness of nature around you
            </Box>
          </div>
        </Box>
      </Box>
      
      <Box marginTop="5rem">
        <Text fontSize="5xl" fontWeight="bold" color="#306754" paddingLeft="2%">
          FIND POPULAR  <Text as="span" color="darkorange">DESTINATIONS</Text>
        </Text>
        <SimpleGrid columns={3} spacing={4} marginTop="2rem">
          {currentLocations.map((location) => (
            <Box
              key={location.id}
              backgroundColor="white"
              borderRadius="md"
              padding="1rem"
              boxShadow="md" 
            >
              <Image
                src={location.url}
                alt={location.name}
                maxHeight={200} 
                width="100%"
                objectFit="cover"
                borderRadius="md"
              />
              <Text fontSize="xl" fontWeight="bold" marginTop="1rem">
                {location.name}
              </Text>
              <Text>{location.heading}</Text>
              <Flex justifyContent="space-between" alignItems="center" marginTop="1rem">
                <Text fontWeight="bold" color="darkorange">
                  ₹{location.cost}
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

      
      <Box   mt="30px" display={"flex"}>

  <Image src="https://i.pinimg.com/564x/36/6b/bc/366bbc12485e490971e0012335effdd5.jpg"
   h="100%" w="60%" />

<Box bg="white" p="10px" w="55%" justifyContent={"center"}>
<Text
  fontSize="5xl" fontWeight="bold" fontFamily="Helvetica" color="#306754" paddingLeft="20%">
 OUR
  <Text as="span" color={"darkorange"}> STORIES </Text>
  WITH <Text>ADVENTURERS</Text>
  </Text>
<Center>
<Text w="55%" fontFamily="Helvetica" textAlign={"center"} justifyContent={"center"} display={["none","none","flex"]}>
  We are experienced in bringing adventures to
   start their journey, all outdoor destinations in
    the world are specialities .  So don't hesitate to start your adventure right
 now, nature has already called you!
</Text>
</Center>


<Flex gap={["7px","7px","15px"]} mb="3%" mt="5%" justifyContent={"center"}>
  <Box bg="rgba(0, 0, 0, 0.25)" p={["4px","5px","15px"]} mt="20px">
    <Heading color="darkorange" fontFamily="Helvetica" fontSize={["sm","xl","3xl"]}>12K+</Heading>
    <Text align={"left"} color={"#306754"} fontSize={["10px","15px"]}>Success
    <Text>Journey</Text></Text>
  </Box>
  <Box bg="rgba(0, 0, 0, 0.25)" p={["4px","5px","15px"]} mt="20px">
    <Heading color="darkorange" fontFamily="Helvetica" fontSize={["sm","xl","3xl"]}>16+</Heading>
    <Text  align={"left"} color={"#306754"}  fontSize={["10px","15px"]}>Awards
    <Text>Winning</Text></Text>
  </Box>
  <Box bg="rgba(0, 0, 0, 0.25)" p={["4px","5px","15px"]} mt="20px">
    <Heading color="darkorange" fontFamily="Helvetica" fontSize={["sm","xl","3xl"]}>20+</Heading>
    <Text  align={"left"} color={"#306754"}  fontSize={["10px","15px"]}>Years Of
    <Text>Experience</Text></Text>
  </Box>
</Flex>
<Box bg="#9cacbe" p="20px" mt="10px"  display={["none","none","flex"]}>
<Box display={"flex"} alignItems={"center"} >
<FcCustomerSupport size={32} />
  <Text ml="10px" fontWeight={"500"} fontSize={["8px","8px","10px","13px","15px"]}>100% customizable</Text>
</Box>
<div class="vertical-line"></div>
<Box display={"flex"} alignItems={"center"}>
<FcOvertime size={32} />
  <Text ml="10px" fontWeight={"500"} fontSize={["8px","8px","10px","13px","15px"]}>Instant booking in real time</Text>
</Box>
<div class="vertical-line"></div>
<Box display={"flex"} alignItems={"center"}>
<FcApproval size={32}/>
  <Text ml="10px" fontWeight={"500"} fontSize={["8px","8px","10px","13px","15px"]}>One stop experiential travel platform</Text>
</Box>

</Box>
</Box>

</Box>

<Carousel/>


<Box bg={"#ffe5d1"} p={["20px","30px","80px"]} marginLeft="10px" marginRight="10px" marginTop="10px" marginBottom="10px" borderRadius={"20px"} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
  <Heading fontFamily="Helvetica" fontWeight={'bold'} fontSize={["20px","25px","30px","35px","40px"]}>GET STARTED WITH<Text textAlign="center" color="#e2660f">TRAVELIOUS</Text></Heading>
  <Text textAlign="center" color={"#d9ac8b"} mt="20px" mb="20px" fontWeight={"600"} fontSize={["12px","15px","17px"]}>
    <Text>Subscribe and find super attractive price quotes</Text>
    <Text>from us, we wait for you at the best destinations</Text>
  </Text>
  <Button
    variant='solid' boxShadow={"dark-lg"} bg="#e2660f" color="white" _hover={{ color: "#e2660f","bg":"white",border:"2px solid #e2660f"}}
  >
    Get Started
  </Button>
</Box>



    </div>
  );
};

export default HomePage;