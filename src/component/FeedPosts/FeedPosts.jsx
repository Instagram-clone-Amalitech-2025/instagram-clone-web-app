import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import FeedPost from './FeedPost'
import { useEffect, useState } from 'react'

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"constainer.sm"} py={10} px={2}>
      {isLoading && [0,1,2,3].map((_,idx) => (
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap="2">
            <SkeletonCircle size="10" />
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height="10px" w={"200px"} />
              <Skeleton height="10px" w={"200px"} />

            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"500px"}>contents wrapped</Box>
          </Skeleton>

        </VStack>
        ))}

        {!isLoading && (
          <>
            <FeedPost img="/kofi.jpg" username="Kofi" avatar="/kofi.jpg" />
            <FeedPost img="/vincent1.jpeg" username="Vincent" avatar="/vincent1.jpeg" />
            <FeedPost img="/kingsley.jpg" username="Kingsley" avatar="/kingsley.jpg" />
            <FeedPost img="/ray.jpg" username="Raymond" avatar="/ray.jpg" />
            <FeedPost img="/vincent2.jpeg" username="Vincent" avatar="/vincent2.jpeg" />
            <FeedPost img="/vincent3.jpg" username="Vincent" avatar="/vincent3.jpg" />
            <FeedPost img="/img1.png" username="Selina" avatar="/img1.png" />
            <FeedPost img="/img2.png" username="James" avatar="/img2.png" />
          </>
        )}

    </Container>
  )
}

export default FeedPosts