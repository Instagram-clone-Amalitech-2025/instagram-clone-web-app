import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

// instead of adding the sidebar component to every page, we can add it only once to the PageLaout component ad wrap the childern with it. This way, we can have a sidebar on every page except the AuthPage without having to add it to every page individually. This is a good way to keep the code DRY (Don't Repeat Yourself) and make it easier to maintain.

const PageLayout = ({children}) => {
  const {pathname} = useLocation()
  return (
    
    <Flex>
      {/* sidebar on the left of the page */}
      {pathname !== '/auth' ? (
      <Box w={{base: "70px", md: "240px"}}>
        <Sidebar />
      </Box>
     ) : null}
      {/* the page content on the right */}
      <Box flex={1} w={{base: "calc(100% - 70px)", md: "calc(100% - 240px)"}} >
        {children}
      </Box>
    </Flex>
  )
};

export default PageLayout;