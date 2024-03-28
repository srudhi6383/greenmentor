import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { signup } from "../Redux/Register/action";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Flex,
  Center,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const isAuth = useSelector((store) => store.signupReducer.isAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      dispatch(signup({ name, email, password }));
    }
  };

  if (isAuth) navigate("/");

  return (
    <Flex align="center" justify="center" h="100vh">
      <Center>
        <Box
          p={10}
          maxW="md"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Heading as="h2" size="lg" mb={4}>
            Register
          </Heading>
          <form onSubmit={handleSubmit}>
            <FormControl mb={4} isInvalid={!!nameError}>
              <FormLabel>
                Name<span style={{ color: "red" }}>*</span>
              </FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                size="md"
              />
              <FormErrorMessage>{nameError}</FormErrorMessage>
            </FormControl>
            <FormControl mb={4} isInvalid={!!emailError}>
              <FormLabel>
                Email<span style={{ color: "red" }}>*</span>
              </FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                size="md"
              />
              <FormErrorMessage>{emailError}</FormErrorMessage>
            </FormControl>
            <FormControl mb={6} isInvalid={!!passwordError}>
              <FormLabel>
                Password<span style={{ color: "red" }}>*</span>
              </FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                size="md"
              />
              <FormErrorMessage>{passwordError}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="teal" size="md" width="100%">
              Sign Up
            </Button>
          </form>
          <Flex justify="center" mt={4}>
            <Text>Already have an account? </Text>
            <Button
              as={Link}
              to="/"
              variant="link"
              colorScheme="blue"
              ml={1}
            >
              Login
            </Button>
          </Flex>
        </Box>
      </Center>
    </Flex>
  );
};

export default Register;
