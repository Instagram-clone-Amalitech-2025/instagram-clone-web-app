import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    fullName: "",
    password: "",
  });

  const handleAuth = () => {
    if (isLogin) {
      // Login validation
      if (!inputs.username || !inputs.password) {
        alert("Please fill all the fields");
        return;
      }
    } else {
      // Sign Up validation
      if (!inputs.username || !inputs.email || !inputs.fullName || !inputs.password) {
        alert("Please fill all the fields");
        return;
      }
    }

    navigate("/");
  };

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack>
          <Image src='/logo.png' h={24} cursor={"pointer"} alt='Instagram' />
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
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
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