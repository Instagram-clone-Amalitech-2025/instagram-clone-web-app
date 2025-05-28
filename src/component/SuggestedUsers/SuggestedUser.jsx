import { Avatar, Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";

const SuggestedUser = ({followers,name,avatar}) => {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar name={name} size={"md"} src={avatar} />
        <VStack spacing={2} alignItems={"flex-start"}>
        <Box fontSize={12} fontWeight={"bold"}>{name}</Box>
        <Box fontSize={11} color={"gray.500"}>{followers} followers</Box>
        </VStack>
      </Flex>
      <Button
        onClick={() => setIsFollowed(!isFollowed)}
        fontSize={13}
        fontWeight={"medium"}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        color={"blue.400"}
        _hover={{ color: "white" }}
        cursor={"pointer"}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>

    </Flex>
  )
}

export default SuggestedUser;