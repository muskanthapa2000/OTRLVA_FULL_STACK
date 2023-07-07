import React, { useState, useEffect } from "react";
import { BiKey,BiWifi,BiCloset} from "react-icons/bi";
import {AiOutlineCoffee} from "react-icons/ai";
import {MdLocalParking} from "react-icons/md";



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
  Icon
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
      const response = await axios.get("https://trevelioussite.onrender.com/destination");
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

  return (
    <div>
      {data.map((item) => (
        <Card
          key={item.id}
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
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
              <Icon as={BiKey} mr="2"  /> 
              <Icon as={BiWifi} mr="2"/>
              <Icon as={BiCloset} mr="2"/>
              <Icon as={AiOutlineCoffee} />
              <Icon as={MdLocalParking}/>

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
    </div>
  );
}

export default Payments;
