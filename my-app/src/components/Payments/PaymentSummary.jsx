import React from "react";
import { Box, Card, Heading, Text, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function PaymentSummary({
  selectedItem,
  roomCount,
  totalPrice,
  taxRate,
  taxAmount,
  totalAmount,
  payableAmount,
  dayCount={dayCount}

}) {
  return (
    <Box ml="4" width="500px">
      <Card variant="unstyled" p="4" bg="inherit">
        <Heading size="md">Summary</Heading>
        <Flex align="center" mb="4">
          {selectedItem && (
            <>
              <Text>
                {selectedItem.guestDetail} × {roomCount} × {dayCount} night
              </Text>
              <Spacer />
              <Text py="2">₹{totalPrice}</Text>
            </>
          )}
        </Flex>
        <Flex align="center" mb="4">
          <Text>Tax ({taxRate * 100}%)</Text>
          <Spacer />
          <Text>₹{taxAmount.toFixed(2)}</Text>
        </Flex>
        <Flex align="center" mb="4">
          <Text>Total Amount</Text>
          <Spacer />
          <Text>₹{totalAmount.toFixed(2)}</Text>
        </Flex>
        <Flex align="center" mb="4">
          <Text>Coupon</Text>
          <Spacer />
          <Text>OFF50</Text>
        </Flex>
        <Flex align="center" mb="4">
          <Text>Payable Amount</Text>
          <Spacer />
          <Text>₹{payableAmount.toFixed(2)}</Text>
        </Flex>
        <Link to="/details" style={{ textDecoration: 'none' }}>

        <Button colorScheme="blue" bg="#ff6347">
          Pay now
        </Button>
        </Link>
      </Card>
    </Box>
  );
}

export default PaymentSummary;
