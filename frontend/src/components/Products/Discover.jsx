import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Image,
  Text,
  useStyleConfig,
  Button,
  HStack,
  Center,
  Flex,
  Input,
} from "@chakra-ui/react";
import { Link as Rlink } from "react-router-dom";
import PreLoader from "../MainComp/Loader";

function Discover() {
  const [data, setData] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortOrder, setSortOrder] = useState(""); // Added sorting state
  const cardStyles = useStyleConfig("Card");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchKey, currentPage, sortOrder]);

  const fetchData = () => {
    setLoading(true);
    const queryParameters = `search=${searchKey}&_page=${currentPage}&_limit=9&_sort=cost&_order=${sortOrder}`; // Updated _sort parameter to "cost"
    const apiUrl = `https://prussian-blue-harp-seal-coat.cyclic.cloud/data?${queryParameters}`;

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        setData(response.data);

        const totalCount = Number(response.headers["x-total-count"]);
        const calculatedTotalPages = Math.ceil(totalCount / 9);
        setTotalPages(calculatedTotalPages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  if (loading) {
    return <PreLoader />;
  }

  const handleSearchChange = (event) => {
    setSearchKey(event.target.value);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    fetchData();
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleAscendingSort = () => {
    setSortOrder("asc");
  };

  const handleDescendingSort = () => {
    setSortOrder("desc");
  };

  const handleNoOrderSort = () => {
    setSortOrder("");
  };

  return (
    <div style={{ width: "95%", margin: "auto" }}>
      <Flex direction="column" align="center" py={6}>
        <HStack spacing={2} mb={4}>
          <Input
            data-testid="search_key"
            type="text"
            placeholder="Search Place"
            value={searchKey}
            onChange={handleSearchChange}
            width="300px"
          />
          <Button
            style={{ color: "white", backgroundColor: "orange" }}
            onClick={handleSearch}
            isLoading={loading}
          >
            Search
          </Button>
        </HStack>
        <Center>
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "rgb(15,73,53)",
              padding: "10px",
            }}
          >
            Sort By Price:{" "}
          </h3>
          <HStack spacing={4}>
            <Button
              style={{ color: "white", backgroundColor: "orange" }}
              onClick={handleAscendingSort}
            >
              Low To High
            </Button>
            <Button
              style={{ color: "white", backgroundColor: "orange" }}
              onClick={handleDescendingSort}
            >
              High To Low
            </Button>
            <Button
              style={{ color: "white", backgroundColor: "orange" }}
              onClick={handleNoOrderSort}
            >
              Default
            </Button>
          </HStack>
        </Center>
      </Flex>

      <div>
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={6}>
          {data.map((e) => (
            <Box
              key={e._id}
              className="destination-card"
              cursor="pointer"
              borderRadius="md"
              overflow="hidden"
              transition="transform 0.3s ease-in-out"
              _hover={{
                transform: "scale(1.1)",
              }}
            >
              <Rlink to={`/discover/${e._id}`}>
                <Image
                  src={e.url}
                  alt="not pic"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  sx={cardStyles}
                />
              </Rlink>
              <Text
                position="absolute"
                bottom="0"
                left="0"
                width="100%"
                padding="4"
                color="white"
                fontWeight="bold"
              >
                {e.name}
              </Text>
              <Text
                position="absolute"
                bottom="0"
                right="0"
                padding="4"
                color="white"
                fontWeight="bold"
                opacity={0.9}
                fontSize="xl"
                bg="rgba(0, 0, 0, 0.5)"
              >
                &#8377; {e.cost}
              </Text>
            </Box>
          ))}
        </Box>
      </div>
      <Center className="pagination">
        <Box paddingTop="30px" paddingBottom={8}>
          <HStack spacing={4}>
            <Button
              disabled={currentPage === 1}
              onClick={handlePreviousPage}
              backgroundColor="orange"
              color="white"
              _hover={{
                backgroundColor: "green",
                color: "white",
              }}
            >
              Previous
            </Button>
            <Button> {currentPage}</Button>
            <Button
              disabled={totalPages === currentPage}
              onClick={handleNextPage}
              backgroundColor="orange"
              color="white"
              _hover={{
                backgroundColor: "green",
                color: "white",
              }}
            >
              Next
            </Button>
          </HStack>
        </Box>
      </Center>
    </div>
  );
}

export default Discover;
