import React, { useState } from 'react';

import { Box, Heading, Text, Button, Center,  Image, Grid, GridItem, Flex } from '@chakra-ui/react';
import { BiLockAlt, BiWifi, BiWind, BiCoffee, BiDollarCircle, BiBed, BiCar, BiDroplet, BiCreditCard, BiTime, BiGame, BiWorld, BiDoughnutChart, BiWater, BiGroup,  BiCube,  } from 'react-icons/bi';
import details from './details.css';
import { useParams } from 'react-router-dom';
import {useState} from 'react'

function Details() {
  const [data,setData]= useState([]);
  const {id}= useParams();

  axios
      .get(`https://trevelioussite.onrender.com/destination/${id}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });

  console.log(id)
  return (
    <div>
       <div style={{ position: 'relative' }}>
        <Image
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-46761225/original/11058c0d-fac8-4035-8f16-8b3abe7441cd.jpeg?im_w=960"
          alt="N"
          style={{width:'100%'}}
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
            TITLE YEH RHA
          </Heading>
        </Box>
      </div>
     

  
    <div style={{ width: '80%', margin: '0 auto' }}>
     
      <Text fontSize="l" textAlign="center" mb="4" width="70%" margin="auto" paddingBottom="30px">
        YE DISCRIPTION HO GYA CHOTE VALA Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, quis neque
        temporibus sed enim saepe maiores voluptatem qui illo. Eaque delectus autem debitis ratione soluta est
        reprehenderit expedita veritatis velit.
      </Text>

      <Center>
        <div style={{ display: 'flex' }}>
          <div style={{  marginRight: '5px' }}>
            <Image
              src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-46761225/original/11058c0d-fac8-4035-8f16-8b3abe7441cd.jpeg?im_w=960"
              alt="N"
              style={{ width: '800px', height: '520px', borderRadius: '10px 0px 0px 10px' }}
            />
          </div>
          <div style={{  display: 'flex', flexDirection: 'column' }}>
            <Image
              src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-46761225/original/11058c0d-fac8-4035-8f16-8b3abe7441cd.jpeg?im_w=960"
              alt="N"
              style={{ marginBottom: '5px', borderRadius: '0px 10px 0px 0px', width: '300px', height: '170px' }}
            />
            <Image
              src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-46761225/original/11058c0d-fac8-4035-8f16-8b3abe7441cd.jpeg?im_w=960"
              alt="N"
              style={{ marginBottom: '5px', borderRadius: '0px 10px 0px 0px', width: '300px', height: '170px' }}
            />
            <Image
              src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-46761225/original/11058c0d-fac8-4035-8f16-8b3abe7441cd.jpeg?im_w=960"
              alt="N"
              style={{ marginBottom: '5px', borderRadius: '0px 10px 0px 0px', width: '300px', height: '170px' }}
            />
          </div>
        </div>
      </Center>

      <Heading as="h1" size="xl" mb="4" color="rgb(241, 88, 36)" fontWeight="bold" marginTop="30px">
       PER NIGHT :- COST YHA HAI
      </Heading>
      <div>
        <p>
          BDE VALA DISCRIPTION Lorem ipsum dolorsit amet consectetur adipisicing elit. Explicabo nemo asperiores, tempore optio assumenda dicta perferendis consectetur commodi itaque molestias perspiciatis! Laboriosam, illo. Aut dicta facere unde, dignissimos soluta suscipit quos. Obcaecati, veniam ab! Quaerat quisquam veritatis minus maxime temporibus.
        </p>
      </div>

      <Box className="facility">
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
```jsx
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
      <Box textAlign="right" marginTop="20px">
        <Button position="relative" _before={{
          content: "''",
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          borderRadius: 'md',
          border: '2px solid',
          borderColor: 'rgb(241, 88, 36)',
          animation: 'button-pulse 2s infinite linear',
        }}>
          BOOK NOW
        </Button>
      </Box>
    </div>
    </div>
  );
}

export default Details;
