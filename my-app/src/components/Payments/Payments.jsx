import React, { useState, useEffect } from "react";
import { BiKey, BiWifi, BiCloset } from "react-icons/bi";
import { AiOutlineCoffee } from "react-icons/ai";
import { MdLocalParking } from "react-icons/md";
import axios from "axios";
import {
  Box,
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

  //  total price and tax amount based on room count
  const selectedItem = data.find((item) => item.id === selectedRoom);
  const roomCost = selectedItem?.cost || 0;
  const taxRate = 0.18;
  const totalPrice = roomCount * roomCost;
  const taxAmount = totalPrice * taxRate;
  const totalAmount = totalPrice + taxAmount;
  const payableAmount= (totalAmount)/2;
  return (
    <Box bg="#e8f0f2" p="4">
      <Flex>
        <Box flex="1 0 auto">
        <Heading size='lg'ml="24"mb="4">Book Your stay</Heading>
        <Text ml="24" mb="10">Select from a range of beautiful rooms</Text>
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

        {selectedRoom && (
          <Box ml="4" width="500px">
            <Card variant="unstyled" p="4" bg="inherit">
              <Heading size="md">Summary</Heading>
              <Flex align="center" mb="4">
                {selectedItem && (
                  <>
                    <Text>
                      {selectedItem.guestDetail} × {roomCount}
                    </Text>
                    <Spacer />
                    <Text py="2">₹{totalPrice}</Text>
                  </>
                )}
              </Flex>
              <Flex align="center" mb="4">
                <Text>Tax ({taxRate * 100}%)</Text>
                <Spacer />
                <Text>₹{taxAmount.toFixed(2)}</Text>
              </Flex>
              <Flex align="center" mb="4">
                <Text>Total Amount</Text>
                <Spacer />
                <Text>₹{totalAmount.toFixed(2)}</Text>
              </Flex>
              <Flex align="center" mb="4">
                <Text>Coupon</Text>
                <Spacer />
                <Text>OFF50</Text>
              </Flex>
              <Flex align="center" mb="4">
                <Text>Payable Amount</Text>
                <Spacer />
                <Text>₹{payableAmount.toFixed(2)}</Text>
              </Flex>

              <Button colorScheme="blue" bg="#ff6347">
                Pay now
              </Button>
            </Card>
          </Box>
        )}
      </Flex>
    </Box>
  );
}

export default Payments;
