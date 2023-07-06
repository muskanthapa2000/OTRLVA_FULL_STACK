

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
  Button,
} from "@chakra-ui/react";

function Payments() {
  const [data, setData] = useState([]);

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
              <Heading size="md">{item.name}</Heading>

              <Text py="2">{item.description}</Text>
            </CardBody>

            <CardFooter>
              <Button variant="solid" colorScheme="white" bg="#ff6347">
                {/* Book{item.name} */}
                Select Room
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </div>
  );
}

export default Payments;
