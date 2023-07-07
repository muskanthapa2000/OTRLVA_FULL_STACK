import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FormLabel,
  Input,
  Heading,
  Checkbox,
  Button,
  ButtonGroup,
  InputGroup,
  InputRightElement,
  Link,
  Box,
  useToast,
} from "@chakra-ui/react";
import "./accountpage.css";
import { useDispatch } from "react-redux";
import { postNewUser } from "../Redux/action";
import { useNavigate } from "react-router-dom";

export const Signup = ({ onClose }) => {
  const form = useRef();
  const [email, setemail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setpassword] = useState("");

//   const [randomNumber, setRandomNumber] = useState(0);
//   useEffect(() => {
//     // Generate a random number between 1 and 100
//     const newRandomNumber = Math.floor(100000 + Math.random() * 900000);
//     setRandomNumber(newRandomNumber);
//   }, []);
//   console.log(randomNumber);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  let userDetails = {
    email,
    firstName,
    lastName,
    contact,
    password,
  };

  const toast = useToast()
  const toastIdRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(userDetails);
    // console.log(">>>>>>>>>>>>>>>>>>>>");
    emailjs.sendForm('service_m3g8gtd', 'template_bfckf1l', form.current, 'NfmCzzCkrTdkBOvHr')
    // emailjs.sendForm('service_fkfregs', 'template_n8ly4bv', form.current, 'wfw69oML3MWqQ0Srh')
    // emailjs.sendForm('sdasf', 'dsfsd', form.current, 'wfw69oML3MWqQ0Srh')
    // emailjs
    //   .sendForm(
    //     "service_m3g8gtd",
    //     "template_bfckf1l",
    //     form.current,
    //     "40ZEcegptxkkeCq57"
    //   )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    dispatch(postNewUser(userDetails));
    toast({
        title: 'ACCOUNT CREATED',
        status: 'success',
        position: 'top-left',
        isClosable: true,
      })
      setTimeout(()=>{
        toast({
            title: 'CREDENTIALS SENT TO YOUR EMAIL',
            status: 'info',
            position: 'top-left',
            isClosable: true,
          })
      }, 1000)
      
    navigate("/login");
    if (onClose) {
      onClose();
    }
  };

//   useEffect(()=>{
//      localStorage.setItem("userEmail",userDetails.firstName)
//   },[])

  return (
    <Box className="model_signup" maxW={"40%"}
    boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
    //  w={{base:'90%', md:'100%'}} m='auto'
     >
      <Heading fontWeight="600" fontSize="32px" >
        Create an Account
      </Heading>
      <br />
      <form ref={form} onSubmit={sendEmail}
       >
        <FormLabel mb={"2px"}> Email </FormLabel>
        <Input
          mb={"10px"}
          type="email"
          name="user_email"
          placeholder="Email"
          focusBorderColor="orange.600"
        
          required
          onChange={(e) => setemail(e.target.value)}
        />
        <br />

        <FormLabel mb={"2px"}> First Name </FormLabel>
        <Input
          mb={"10px"}
          type="text"
          name="user_name"
          placeholder="First Name"
          focusBorderColor="orange.600"
       
          required
          onChange={(e) => setfirstName(e.target.value)}
        />
        <br />

        <FormLabel mb={"2px"}> Last Name </FormLabel>
        <Input
          mb={"10px"}
          type="text"
          placeholder="Last Name"
      
          required
          focusBorderColor="orange.600"
          onChange={(e) => setlastName(e.target.value)}
        />
        <br />

        <FormLabel mb={"2px"}> Contact Info </FormLabel>
        <Input
          mb={"10px"}
          type="text"
          placeholder="Contact Info"
          required
        
          focusBorderColor="orange.600"
          onChange={(e) => setcontact(e.target.value)}
        />
        <br />

        {/* <Input display={'none'} type="number" name='otp' focusBorderColor='orange.600' value={randomNumber}/> */}
        <FormLabel mb={"2px"}> Create Password </FormLabel>
        <InputGroup size="md">
          <Input
            type={show ? "text" : "password"}
            placeholder="Create Password"
            required
            
            name="user_password"
            focusBorderColor="orange.600"
            onChange={(e) => setpassword(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={handleClick}
         
              colorScheme="orange"
            
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <br />
        <br />
        <div>
          <div className="item_center">
            <Checkbox colorScheme="orange" required fontSize={{base:"xs", sm:'sm', md:'md'}}
            >
              I Accept The{" "}
              <Link className="hover_text_color" fontSize={{base:"xs", sm:'sm', md:'md'}}>
                Specialized Terms & Conditions
              </Link>{" "}
            </Checkbox>
          </div>
          <Box style={{ textAlign: "center", color: "grey" }} py="10px">
            <p>
              I acknowledge Specialized will use my information in accordance
              with its{" "}
              <Link className="hover_text_color"> Privacy Policy.</Link>
            </p>
          </Box>
        </div>
        <br />
        <ButtonGroup variant="outline" width="100%">
          <Button type="submit" colorScheme="orange" className="btn"
        //   onClick={()=>{navigate('/login')}}
     
          >
            {" "}
            Create Account{" "}
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
};