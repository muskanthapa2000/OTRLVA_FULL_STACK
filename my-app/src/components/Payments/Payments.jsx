import React, { useState, useEffect } from "react";
import { BiKey, BiWifi, BiCloset } from "react-icons/bi";
import { AiOutlineCoffee } from "react-icons/ai";
import { MdLocalParking } from "react-icons/md";
import axios from "axios";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  ButtonGroup,
  IconButton,
  Button,
  Flex,
  Spacer,
  Icon,
  Box,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

function Payments() {
  const [data, setData] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomCount, setRoomCount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://trevelioussite.onrender.com/destination"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    setRoomCount(1);
  };

  const handleIncrement = () => {
    setRoomCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (roomCount === 1) {
      setSelectedRoom(null);
      setRoomCount(0);
    } else {
      setRoomCount((prevCount) => prevCount - 1);
    }
  };

  // total price based on room count
  const totalPrice = data
    .filter((item) => item.id === selectedRoom)
    .map((item) => item.cost * roomCount)[0] || 0;

  return (
    <Box bg="#e8f0f2" p="4">
       <Flex>
      <Box flex="1 0 auto">
      <h1>Book your stay</h1>

        {data.map((item) => (
          <Card
            key={item.id}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            maxW="800px"
            mb="4"
            mt="2"
            ml="24"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={item.url}
              alt={item.name}
            />

            <Stack>
              <CardBody>
                <Flex>
                  <Heading size="md">{item.guestDetail}</Heading>
                  <Spacer />
                  <Heading size="md">₹{item.cost}</Heading>
                </Flex>
                <Text py="2">{item.description}</Text>
                <Text>
                  <Icon as={BiKey} mr="2" />
                  <Icon as={BiWifi} mr="2" />
                  <Icon as={BiCloset} mr="2" />
                  <Icon as={AiOutlineCoffee} />
                  <Icon as={MdLocalParking} />
                </Text>
              </CardBody>

              <CardFooter>
                {selectedRoom === item.id && roomCount > 0 ? (
                  <ButtonGroup size="sm" isAttached variant="outline">
                    <IconButton
                      aria-label="Decrement"
                      icon={<MinusIcon />}
                      onClick={handleDecrement}
                    />
                    <Button>{roomCount}</Button>
                    <IconButton
                      aria-label="Increment"
                      icon={<AddIcon />}
                      onClick={handleIncrement}
                    />
                  </ButtonGroup>
                ) : (
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    bg="#ff6347"
                    onClick={() => handleRoomSelect(item.id)}
                    display={selectedRoom === item.id ? "none" : "block"}
                  >
                    Select Rooms
                  </Button>
                )}
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </Box>

      <Box ml="4" width="500px">
        <Card variant="unstyled" p="4" bg="inherit">
          <Heading size="md">Summary</Heading>
          <Text py="2">₹{totalPrice}</Text>
        </Card>
      </Box>
    </Flex>
    </Box>
   
  );
}

export default Payments;
