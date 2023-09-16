import React, { useState, useEffect } from "react";
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
import { BiKey, BiWifi, BiCloset } from "react-icons/bi";
import { AiOutlineCoffee } from "react-icons/ai";
import { MdLocalParking } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PaymentSummary from "./PaymentSummary";
import { AddIcon, MinusIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useParams } from "react-router-dom";

function Payments() {
  const [data, setData] = useState([]);
  console.log(data);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomCount, setRoomCount] = useState(0);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const { id } = useParams();

  // useEffect(() => {
  //   fetchData();
  //   setDefaultDates();
  // }, []);
  useEffect(() => {
    axios
      .get(`https://prussian-blue-harp-seal-coat.cyclic.cloud/data/${id}`)
      .then((response) => {
        console.log(response.data); // Log the entire response
        setData(response.data); // Access data within the response
        setDefaultDates();
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);
  

  console.log(data);

  const setDefaultDates = () => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setSelectedStartDate(today);
    setSelectedEndDate(tomorrow);
  };

  const calculateDayCount = () => {
    if (selectedStartDate && selectedEndDate) {
      const start = new Date(selectedStartDate);
      const end = new Date(selectedEndDate);
      const timeDiff = Math.abs(end.getTime() - start.getTime());
      const dayCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return dayCount;
    }
    return 0;
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

  // const selectedItem = Array.isArray(data) ? data.find((item) => item.id === id) : null;
  // console.log(selectedItem)
  const roomCost = data?.cost || 0;
  const taxRate = 0.18;
  const dayCount = calculateDayCount();
  const totalPrice = roomCount * roomCost * dayCount;
  const taxAmount = totalPrice * taxRate;
  const totalAmount = totalPrice + taxAmount;
  const payableAmount = totalAmount;

  return (
    <Box bg="#e8f0f2" p="4">
      <Flex>
        <Box flex="1 0 auto">
          <Flex ml= {280}>
            <Box>
              <Heading size="lg" ml="24" mb="4">
                Book Your stay
              </Heading>
              <Text ml="24" mb="10">
                Select from a range of beautiful rooms
              </Text>
            </Box>
            <Flex mt="5" ml="2">
              <Box mr="2">
                <DatePicker
                  selected={selectedStartDate}
                  onChange={(date) => setSelectedStartDate(date)}
                />
              </Box>
              <ArrowForwardIcon />
              <Box ml="2">
                <DatePicker
                  selected={selectedEndDate}
                  onChange={(date) => setSelectedEndDate(date)}
                />
              </Box>
            </Flex>
          </Flex>
          <Flex ml={280}>
            {data && (
              <Card
                key={data.id}
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
                  src={data.url}
                  alt={data.name}
                />

                <Stack>
                  <CardBody>
                    <Flex>
                      <Heading size="md">{data.name}</Heading>
                      <Spacer />
                      <Heading size="md">₹{data.cost}</Heading>
                    </Flex>
                    <Text py="2">{data.description}</Text>
                    <Text>
                      <Icon as={BiKey} mr="2" />
                      <Icon as={BiWifi} mr="2" />
                      <Icon as={BiCloset} mr="2" />
                      <Icon as={AiOutlineCoffee} />
                      <Icon as={MdLocalParking} />
                    </Text>
                  </CardBody>

                  <CardFooter>
                    {selectedRoom === data.id && roomCount > 0 ? (
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
                        colorScheme="green"
                        bg="#e4640d;"
                        onClick={() => handleRoomSelect(data.id)}
                      >
                        Select Rooms
                      </Button>
                    )}
                  </CardFooter>
                </Stack>
              </Card>
            )}

            {roomCount > 0 && (
              <PaymentSummary
                roomCount={roomCount}
                totalPrice={totalPrice}
                taxRate={taxRate}
                taxAmount={taxAmount}
                totalAmount={totalAmount}
                payableAmount={payableAmount}
                dayCount={dayCount}
              />
            )}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Payments;
