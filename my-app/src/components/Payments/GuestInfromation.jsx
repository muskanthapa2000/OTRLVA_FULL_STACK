import React, { useState } from "react";
import { Link as Rlink} from "react-router-dom";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  HStack,
} from "@chakra-ui/react";


function GuestInformation() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      name,
      gender,
      email,
      phoneNumber,
      address,
    });
    setMessage("Your address has been saved please continue with payment ");
    


    setName("");
    setGender("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
  };

  return (
    <Flex justify="flex-start">
      <Box ml="24" p={4} width="600px">
        <form onSubmit={handleSubmit}>
          <FormControl mb={4} isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel>Gender</FormLabel>
            <Select
              placeholder="Select gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Select>
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </FormControl>
          <FormControl mb={4} isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </FormControl>
          <Button type="submit" colorScheme="green" bg="#e4640d;" mt={4}>
            Submit
          </Button>
          {message && <Box color="green" mt={2}>{message}</Box>}
        </form>
      </Box>
      <Box maxW="400px" m="auto">
        <FormControl id="cardNumber" mb="4">
          <FormLabel>Card Number</FormLabel>
          <Input type="text" placeholder="Card Number" maxLength={10} />
        </FormControl>
        <HStack spacing="4" mb="4">
          <FormControl id="expiryDate">
            <FormLabel>Expiration Date</FormLabel>
            <Input type="text" placeholder="MM/YYYY" maxLength={7} />
          </FormControl>
          <FormControl id="cvv">
            <FormLabel>CVV</FormLabel>
            <Input type="text" placeholder="CVV" maxLength={3} />
          </FormControl>
        </HStack>
        <Rlink to="/thankyou" style={{ textDecoration: 'none' }}>
        <Button colorScheme="green" bg="#e4640d;" size="lg" w="100%">
          Pay Now
        </Button>
        </Rlink>
        
      </Box>
    </Flex>
  );
}

export default GuestInformation;
