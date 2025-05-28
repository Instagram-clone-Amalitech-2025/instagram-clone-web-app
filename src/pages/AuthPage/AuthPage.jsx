import { Box, Container, Flex, Image, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import AuthForm from "../../component/AuthForm/AuthForm";

const AuthPage = () => {
  const images = [
    "/auth-1r.png",
    "/auth-2rr.png",
    "/auth-3rr.png",
    "/auth-2r.png",
    "/auth-4r.png",
    "/auth-7r.png",
    "/auth-8r.png",
    "/auth-9r.png",
  ]; // Array of image URLs

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.lg"} padding={0}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          {/* Left hand-side */}
          <Box flex={2} display={{ base: "none", md: "block" }}>
            <Image
              src={images[currentImageIndex]} // Dynamically set the image source
              h={700} // Adjusted height
              w={"100%"} // Adjusted width to take full space
              objectFit="contain" // Ensures the image maintains its aspect ratio
              alt="Phone img"
            />
          </Box>

          {/* Right hand-side */}
          <VStack flex={1} spacing={4} align={"stretch"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the app.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={"10"} alt="PlayStore logo" />
              <Image src="/apple.png" h={"10"} alt="Microsoft logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;