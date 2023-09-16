import React, { useRef, useState } from "react"
import "./accountpage.css"
import {
    FormLabel,
    Input,
    Heading,
    Checkbox,
    Button,
    ButtonGroup,
    InputGroup,
    InputRightElement,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    useDisclosure,
    Box, Link, Text, FormControl, useToast
}
    from "@chakra-ui/react";
import { Signup } from "./Signup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { getCurrentUser } from "../Redux/action";
import { ALL_ROUTE } from "../Redux/actionTypes";




export const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")

    
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    // const AllUsers = useSelector((store) => store.accountReducer.AllUsers)
    // const isLogin = useSelector((store) => store.accountReducer.isLogin)
    

   const toast = useToast()
  const toastIdRef = useRef()


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            email,
            password,
        }
        
        fetch("https://prussian-blue-harp-seal-coat.cyclic.cloud/login", {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(payload)
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res.msg)
            localStorage.setItem("token", res.token)
        })
        .catch((err) => console.log(err))
       
    }

    return (
        <Box style={{marginBottom:"30px"}}>
            <Box className="main_form_div"  w={{base:"90%",sm:"80%", md:'60%', lg:"40%"}} m='10px auto' p={{base:"25px"}}
             bg={null} boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} >
                <Heading fontWeight="600" fontSize="32px" >Sign in to your Account</Heading>
                <br />
                <form onSubmit={handleSubmit}
                 >
                <FormControl>
                    <FormLabel mb={'5px'}> Email </FormLabel>
                    <Input mb={'10px'} type="email" placeholder="Email" focusBorderColor='yellow.600'  required onChange={(e) => setemail(e.target.value)} />
                    <br />

                    <FormLabel mb={'5px'}> Password </FormLabel>
                    <InputGroup size='md' >
                        <Input
                            type={show ? 'text' : 'password'}
                            placeholder='Password'
                            focusBorderColor='yellow.600'
                            required
                           
                            onChange={(e) => setpassword(e.target.value)}
                        />
                        <InputRightElement width='4.5rem' >
                            <Button h='1.75rem' size='sm' backgroundColor="#e4640d" color={'white'} onClick={handleClick} >
                                {show ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>

                    <br />
                    <br />
                    <Box className="item_display_corner" mb={'10px'} fontSize={{base:"sm", sm:'md'}}>
                        <div>
                            <Checkbox colorScheme='yellow'  fontSize={{base:"sm", sm:'md'}}>Remember Me</Checkbox>
                        </div>
                        <div><Link>Forgot your password?</Link> </div>
                    </Box>


                    <Box className="item_center" my={'10px'}>
                        <Text className="small_font" color={'grey'}>
                            I accept the Specialized <Link className="hover_text_color">Terms of Use</Link> and acknowledge Specialized will use my information in accordance with its <a href="https://www.specialized.com/sg/en/privacy-policy" className="hover_text_color">Privacy Policy.</a>
                        </Text>
                    </Box>
                    <br />
                    <Link to = "/">
                    <ButtonGroup variant='outline' width="100%" >
                        <Button
                         onClick={()=>{navigate("/")}}
                        type="submit" className="btn" colorScheme="darkorange"
                        >  Sign In  </Button>
                    </ButtonGroup>
                    </Link>
                 

                    <br />
                    <br />
                    <ButtonGroup variant='outline' width="100%" >
                        <Button 
                        onClick={()=>{navigate("/register")}}
                         className="btn" colorScheme="darkorange">Create Account</Button>
                    </ButtonGroup>
                    </FormControl>
                </form>
                <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false} size={{base:'xs', sm:'sm',md:'lg'}}>
                    <ModalOverlay />
                    <ModalContent bg='rgb(38,38,38)' borderRadius={'20px'}>
                        <ModalCloseButton color={'white'} />
                        <Signup onClose={onClose} />
                    </ModalContent>
                </Modal>

            </Box>
        </Box>
    )
}