import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Center, Container, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaCloud, FaRocket } from "react-icons/fa";

const Index = () => {
  const navigate = useNavigate();

  return (
    <Container maxW="container.xl">
      <Stack spacing={10}>
        {/* Hero Section */}
        <Flex alignItems="center" justifyContent="space-between" py={16} flexDirection={{ base: "column", md: "row" }}>
          <VStack align="start" spacing={5}>
            <Heading as="h1" size="2xl">
              Elevate Your Business with Our Cloud Solutions
            </Heading>
            <Text fontSize="lg" color="gray.600">
              Harness the power of cloud computing to streamline operations, enhance productivity, and drive growth.
            </Text>
            <Button rightIcon={<FaArrowRight />} colorScheme="teal" size="lg" onClick={() => navigate("/get-started")}>
              Get Started
            </Button>
          </VStack>
          <Box w={{ base: "full", md: "50%" }} mt={{ base: 10, md: 0 }}>
            <Image src="https://images.unsplash.com/photo-1533812451773-f2b04c2bdeb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGNvbmNlcHR8ZW58MHx8fHwxNzA4NTIzNTE5fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Cloud Computing Concept" borderRadius="lg" boxShadow="xl" />
          </Box>
        </Flex>

        {/* Features Section */}
        <Box py={10}>
          <Heading as="h2" size="xl" textAlign="center" mb={6}>
            Why Choose Our Platform?
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} spacing={10} justifyContent="center">
            <FeatureCard icon={FaCloud} title="Reliable Cloud Infrastructure" text="Our state-of-the-art cloud infrastructure ensures high availability and performance." />
            <FeatureCard icon={FaRocket} title="Scalable Solutions" text="Grow your business without worrying about scaling your IT resources." />
            <FeatureCard icon={FaArrowRight} title="Seamless Integration" text="Easily integrate with existing systems to create a cohesive IT environment." />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

const FeatureCard = ({ icon, title, text }) => {
  const IconComponent = icon;
  return (
    <Center p={6} boxShadow="lg" borderRadius="lg" flexDir="column" bg="white" minW="sm" textAlign="center" borderWidth="1px" borderColor="gray.200">
      <IconComponent size="3em" color="teal.500" />
      <Heading as="h3" size="md" mt={4} mb={2}>
        {title}
      </Heading>
      <Text fontSize="md" color="gray.600">
        {text}
      </Text>
    </Center>
  );
};

export default Index;
