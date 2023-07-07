import React, { useState } from "react";
import {
  Box,
  Card,
  Heading,
  Text,
  Flex,
  Spacer,
  Button,
  FormControl,
  Input,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function PaymentSummary({
  selectedItem,
  roomCount,
  totalPrice,
  taxRate,
  taxAmount,
  totalAmount,
  payableAmount,
  dayCount,
}) {
  const [couponCode, setCouponCode] = useState("");
  const [discountedTotalAmount, setDiscountedTotalAmount] = useState(totalAmount);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const applyCoupon = () => {
    if (couponCode === "OFF30") {
      const discountPercentage = 0.7; // 70% discount
      const discountedAmount = payableAmount * discountPercentage;
      setDiscountedTotalAmount(discountedAmount);
      setIsCouponApplied(true);
    }
  };

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
          <FormControl w="230px">
            <Input 
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              placeholder="Enter coupon code"
            />
          </FormControl>
          <Button ml="2" onClick={applyCoupon}>
            Apply
          </Button>
        </Flex>
        {isCouponApplied && (
          <Text color="green.500" mb="4">
            Coupon is applied!
          </Text>
        )}
        <Flex align="center" mb="4">
          <Text>Payable Amount</Text>
          <Spacer />
          <Text>₹{discountedTotalAmount.toFixed(2)}</Text>
        </Flex>
        <Link to="/details" style={{ textDecoration: "none" }}>
          <Button colorScheme="blue" bg="#ff6347">
            Pay now
          </Button>
        </Link>
      </Card>
    </Box>
  );
}

export default PaymentSummary;
