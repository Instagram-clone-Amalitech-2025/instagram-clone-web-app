import { Box, Button, Flex, Image, Input, Text, VStack, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register, login } from '../../services/authService'; // Import the API functions

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const toast = useToast(); // Initialize Chakra UI's toast
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    full_name: "",
    password: "",
  });

  const handleAuth = async () => {
    try {
      if (isLogin) {
        // Login
        if (!inputs.username || !inputs.password) {
          toast({
            title: "Missing Fields",
            description: "Please fill all the fields.",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top-right", // Set the position to top-right
          });
          return;
        }
        const data = await login(inputs.username, inputs.password);
        console.log("Login Response:", data); // Debugging: Log the response
        toast({
          title: "Login Successful",
          description: "Welcome back!",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right", // Set the position to top-right
        });
        navigate("/home"); // Redirect to the homepage
      } else {
        // Sign Up
        if (!inputs.username || !inputs.email || !inputs.full_name || !inputs.password) {
          toast({
            title: "Missing Fields",
            description: "Please fill all the fields.",
            status: "warning",
            duration: 3000,
            isClosable: true,
            position: "top-right", // Set the position to top-right
          });
          return;
        }
        const data = await register(inputs.username, inputs.email, inputs.full_name, inputs.password);
        console.log("Registration Response:", data); // Debugging: Log the response
        toast({
          title: "Registration Successful",
          description: "Your account has been created. Please log in.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right", // Set the position to top-right
        });
        setIsLogin(true); // Switch to login mode after successful registration
      }
    } catch (error) {
      console.error("Error:", error.message); // Debugging: Log the error
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right", // Set the position to top-right
      });
    }
  };

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack>
          <Image src='/logo-colored.png' h={32} w={32} cursor={"pointer"} alt='Instagram' />
          <Input
            placeholder='Username'
            fontSize={14}
            type='text'
            value={inputs.username}
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
          />
          {!isLogin && (
            <>
              <Input
                placeholder='Email'
                fontSize={14}
                type='email'
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              />
              <Input
                placeholder='Full Name'
                fontSize={14}
                type='text'
                value={inputs.full_name}
                onChange={(e) => setInputs({ ...inputs, full_name: e.target.value })}
              />
            </>
          )}
          <Input
            placeholder='Password'
            fontSize={14}
            type='password'
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />

          <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
            {isLogin ? "Login" : "Sign Up"}
          </Button>

          {/* ---------------OR--------------- */}
          <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
            <Box flex={2} h={"1px"} bg={"grey.400"} />
            <Text mx={1} color={"white"}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"grey.400"} />
          </Flex>

          <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
            <Image src='/google.png' w={5} alt='Google logo' />
            <Text mx="2" color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
            {isLogin ? "Sign up" : "Login"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;