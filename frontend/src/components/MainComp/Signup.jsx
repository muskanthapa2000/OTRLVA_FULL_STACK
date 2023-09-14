import React, { useState } from "react";
import {
  Box,
  Input,
  Heading,
  Checkbox,
  Button,
  ButtonGroup,
  InputGroup,
  InputRightElement,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export const Signup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const toast = useToast();

  const sendRegistrationRequest = async () => {
    try {
      const payload = {
        email,
        first_name: firstName,
        second_name: lastName,
        contact,
        password,
      };

      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("User registered successfully");
        navigate("/login");
        if (onClose) {
          onClose();
        }
      } else {
        console.error("User registration failed");
        toast({
          title: "Registration Error",
          description: "User registration failed. Please try again.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error registering user:", error);
      toast({
        title: "Error",
        description: "An error occurred while registering. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Box className="model_signup" maxW={"40%"} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}>
      <Heading fontWeight="600" fontSize="32px">
        Create an Account
      </Heading>
      <br />
      <form onSubmit={sendRegistrationRequest}>
        <Box mb={"10px"}>
          <Input
            type="email"
            name="user_email"
            placeholder="Email"
            focusBorderColor="orange.600"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        <Box mb={"10px"}>
          <Input
            type="text"
            name="user_name"
            placeholder="First Name"
            focusBorderColor="orange.600"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Box>

        <Box mb={"10px"}>
          <Input
            type="text"
            placeholder="Last Name"
            required
            focusBorderColor="orange.600"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Box>

        <Box mb={"10px"}>
          <Input
            type="text"
            placeholder="Contact Info"
            required
            focusBorderColor="orange.600"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </Box>

        <InputGroup size="md">
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Create Password"
            required
            name="user_password"
            focusBorderColor="orange.600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={togglePasswordVisibility}
              colorScheme="orange"
            >
              {showPassword ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Checkbox
          colorScheme="orange"
          required
          fontSize={{ base: "xs", sm: "sm", md: "md" }}
        >
          I Accept The{" "}
          <Link className="hover_text_color" fontSize={{ base: "xs", sm: "sm", md: "md" }}>
            Specialized Terms & Conditions
          </Link>{" "}
        </Checkbox>

        <Box style={{ textAlign: "center", color: "grey" }} py="10px">
          <p>
            I acknowledge Specialized will use my information in accordance
            with its{" "}
            <Link className="hover_text_color"> Privacy Policy.</Link>
          </p>
        </Box>

        <Link to="/login">
          <ButtonGroup variant="outline" width="100%">
            <Button 
            onClick={()=>{navigate("/login")}}
            type="submit" colorScheme="orange" className="btn">
              Create Account
            </Button>
          </ButtonGroup>
        </Link>
      </form>
    </Box>
  );
};
