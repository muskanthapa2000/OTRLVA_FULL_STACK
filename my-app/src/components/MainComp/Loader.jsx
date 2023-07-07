import { motion } from "framer-motion";
// import logo from '../images/logo.png'
import { useColorModeValue } from "@chakra-ui/react";
import { Logo } from '../../Logo';
import { ImAirplane } from "react-icons/im";
export default function PreLoader() {
  return (
    <div
      style={{
        height: "90vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <motion.div
        style={{
          width: "5%",
          borderRadius: "50%",
        //   boxShadow: useColorModeValue("0px 0px 13px #b3b3b3ad", "0px 0px 13px #11151d"),
          padding: "10px"
        }}
        initial={{ x: '50%', y: '50%' }} // Initial position at the center of the viewport
        animate={{ x: -500, y: -500 }} // Target position at the top-left diagonal
        transition={{ duration: 3, repeat: Infinity }}
        // src={Logo}
      ><ImAirplane size={50} color='#104c36' /></motion.div>
      <p
        style={{
          fontWeight: "bold",
          color: useColorModeValue("#4A5568", "white"),
          marginTop: "10px",
          fontSize: "20px"
        }}
      >
        Follow your ❤️
      </p>
    </div>
  );
}