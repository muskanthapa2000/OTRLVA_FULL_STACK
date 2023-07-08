import React, { useState, useEffect } from "react";
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
import { Link as Rlink} from "react-router-dom";

function PaymentSummary({
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

  useEffect(() => {
    const updatedPayableAmount = totalAmount * roomCount * dayCount;
    setDiscountedTotalAmount(updatedPayableAmount);
  }, [roomCount, dayCount]);

  const applyCoupon = () => {
    if (couponCode === "OFF30") {
      const discountPercentage = 0.7; // 70% discount
      const discountedAmount = payableAmount * discountPercentage;
      setDiscountedTotalAmount(parseFloat(discountedAmount.toFixed(2)));
      setIsCouponApplied(true);
    }
  };

  return (
    <Box mr="4" width="400px">
      <Card variant="unstyled" p="4" bg="inherit">
        <Heading size="md">Summary</Heading>
        <Flex align="center" mb="4">
          <Text>
            Room × {roomCount} × {dayCount} night
          </Text>
          <Spacer />
          <Text py="2">₹{totalPrice}</Text>
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
          <>
            <Flex align="center" mb="4">
              <Text>Payable Amount</Text>
              <Spacer />
              <Text>₹{discountedTotalAmount.toFixed(2)}</Text>
            </Flex>
            <Rlink to="/payment-details" style={{ textDecoration: "none" }}>
             <Button colorScheme="green" bg="#e4640d">
                Pay now
              </Button>
            </Rlink>
          </>
        )}
      </Card>
    </Box>
  );
}

export default PaymentSummary;
