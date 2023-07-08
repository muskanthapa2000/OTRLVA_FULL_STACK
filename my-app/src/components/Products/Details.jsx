import React, { useEffect, useState } from 'react';

import { Box, Heading, Text, Button, Center, Image, Grid, GridItem, Flex, textDecoration } from '@chakra-ui/react';
import { BiLockAlt, BiWifi, BiWind, BiCoffee, BiDollarCircle, BiBed, BiCar, BiDroplet, BiCreditCard, BiTime, BiGame, BiWorld, BiDoughnutChart, BiWater, BiGroup, BiCube, } from 'react-icons/bi';
import details from './details.css';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Link as Rlink} from 'react-router-dom';
import PreLoader from "../MainComp/Loader";

const style = {
  marginTop:"35px",
  overflow: "hidden",
  width: "100%",
  paddingBottom: "46%",
  //    border:"2px solid red",
  position: "relative",
  height: "0px",
  };

function Details() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [loading, setloding]=useState(false);

  useEffect(() => {
    setloding(true);
    axios
      .get(`https://trevelioussite.onrender.com/destination/${id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        setloding(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    console.log(id);
  }, [id]);
  console.log("Data:", data);

  if(loading){
    return  <PreLoader/>
   
  }
  return (
    <div marginBottom={'30px'} >
   

      
      <div style={{ position: 'relative' }}>
        <Image
          src={data.url}
          alt="N"
          style={{ width: '100%', height: "500px"}}
        />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          bg="rgba(0, 0, 0, 0.6)"
          p="4"
          borderRadius="md"
        >
          <Heading as="h1" size="xl" color="white" fontWeight="bold">
           {data.name}
          </Heading>
        </Box>
      </div>


      <div style={{ width: '80%', margin: '0 auto' , color:'#746d72', fontWeight:'700' }}>

        <div marginTop="30px">
        <Text fontSize="40" textAlign="center" mb="4" width="70%" margin="auto" mt={10}   >
         Welcome To  <span style={{color:"rgb(241, 88, 36)"}} >Travelious</span>
        </Text>
        <Text fontSize="l" textAlign="center" mb={10} width="70%" margin="auto"    >
         {data.description}
        </Text>
        </div>
        <Center>
          <div style={{ display: 'flex', marginTop:'30px' }}>
            <div style={{ marginRight: '5px' }}>
              <Image
                src={data.urls}
                alt="N"
                style={{ width: '800px', height: '520px', borderRadius: '10px 0px 0px 10px' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Image
                src={data.url1}
                alt="N"
                style={{ marginBottom: '5px', borderRadius: '0px 10px 0px 0px', width: '300px', height: '170px' }}
              />
              <Image
                src={data.url2}
                alt="N"
                style={{ marginBottom: '5px', borderRadius: '0px 10px 0px 0px', width: '300px', height: '170px' }}
              />
              <Image
                src={data.url3}
                alt="N"
                style={{ marginBottom: '5px', borderRadius: '0px 10px 0px 0px', width: '300px', height: '170px' }}
              />
            </div>
          </div>
        </Center>

        <Heading as="h1" size="xl" mb="4" color="rgb(241, 88, 36)" fontWeight="bold" marginTop="30px">
         COST PER NIGHT :- &#8377; {data.cost}
        </Heading>
        <div>
          <p color='grey'>
           {data.description1}
          </p>
        </div>

        <Box className="facility" color={"black"}>
          <Heading as="h2" size="md" mt="8" mb="4" color="rgb(241, 88, 36)" fontWeight="bold">
            Amenities
          </Heading>
          <Grid templateColumns="repeat(4, 1fr)" gap={4}>
            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiLockAlt size={20} />
                </Box>
                <Text>Lockers</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiWifi size={20} />
                </Box>
                <Text>Free Wi-Fi</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiWind size={20} />
                </Box>
                <Text>Air-Conditioning</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiCoffee size={20} />
                </Box>
                <Text>Cafe</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiDollarCircle size={20} />
                </Box>
                <Text>Breakfast (Extra)</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiBed size={20} />
                </Box>
                <Text>Linen Included</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiCar size={20} />
                </Box>
                <Text>Parking</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiDroplet size={20} />
                </Box>
                <Text>Hot Water</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiCreditCard size={20} />
                </Box>
                <Text>Card Payment Accepted</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiTime size={20} />
                </Box>
                <Text>24/7 Reception</Text>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiGame size={20} />
                </Box>
                <Text>In-house Activities</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiWorld size={20} />
                </Box>
                <Text>Sea-View</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiDoughnutChart size={20} />
                </Box>
                <Text>UPI Payment Accepted</Text>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiWater size={20} />
                </Box>
                <Text>Water Dispenser</Text>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiGroup size={20} />
                </Box>
                <Text>Common Hangout Area</Text>
              </Flex>
            </GridItem>

            <GridItem>
              <Flex align="center">
                <Box mr={2}>
                  <BiCube size={20} />
                </Box>
                <Text>Storage Facilities</Text>
              </Flex>
            </GridItem>

          </Grid>
        </Box>


 <Box>
 <div style={style}>
          <iframe
            className="iframe"
            style={{
              height: "450px",
              border: "0  px",
              loading: "lazy",
              left: "0px",
              //   position:"absolute",
              top: "0px",
              width: "100%",
            }}
            id="iframe"
            //   width="600"
            //   height="450"
            //   style="border: 0"
            //   loading="lazy"
            allowfullscreen
            referrerpolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCJ50P3i-sk5hbxpI4mwppCAkio4ATadi0
                    &q=${data.name}`}
          ></iframe>
        </div>
 </Box>

        <Box textAlign="right" marginBottom={5}>
       <Rlink to={`/payment/${id}`}> <button className="button">
      Book Now
    </button></Rlink> 
</Box>

      </div>
            
      </div>
    
  );
}

export default Details;
