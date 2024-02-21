import React from "react";
import { Box, Heading, Container } from "@chakra-ui/react";

const GetStarted = () => {
  return (
    <Container maxW="container.xl">
      <Box py={10} textAlign="center">
        <Heading as="h1" size="2xl">
          Welcome to the Get Started Page
        </Heading>
        <p>Get ready to take your business to the next level!</p>
      </Box>
    </Container>
  );
};

export default GetStarted;
