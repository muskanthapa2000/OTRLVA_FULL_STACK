import React, { useState, useEffect } from "react";
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
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

function Payments() {
  const [data, setData] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomCount, setRoomCount] = useState(1);

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
  };

  const handleIncrement = () => {
    setRoomCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setRoomCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
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
            </CardBody>

            <CardFooter>
              {selectedRoom === item.id ? (
                <ButtonGroup size="sm" isAttached variant="outline">
                  <IconButton
                    aria-label="Decrement"
                    icon={<AddIcon />}
                    onClick={handleDecrement}
                    disabled={roomCount === 1}
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
                >
                  Select Room
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
