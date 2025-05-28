import { Box, Flex, Spinner } from "@chakra-ui/react";
import Sidebar from "../../component/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../../component/Navbar/Navbar";
import { auth } from "../../firebase/firebase";


// instead of adding the sidebar component to every page, we can add it only once to the PageLaout component ad wrap the childern with it. This way, we can have a sidebar on every page except the AuthPage without having to add it to every page individually. This is a good way to keep the code DRY (Don't Repeat Yourself) and make it easier to maintain.

const PageLayout = ({children}) => {
  const {pathname} = useLocation();
  const [user,loadiing] = useAuthState(auth);
  const canRenderSidebar = pathname !== '/auth' && user;
  const canRenderNavbar = !user && !loadiing && pathname !== '/auth';
  
  const checkingUserIsAuth = !user && loadiing
  if(checkingUserIsAuth) return <PageLayoutSpinner />

  return (
    
    <Flex flexDirection={canRenderNavbar ? "column" : "row"}>
      {/* sidebar on the left of the page */}
      {canRenderSidebar ? (

      <Box w={{base: "70px", md: "240px"}}>
        <Sidebar />
      </Box>
     ) : null}
     {canRenderNavbar ? <Navbar /> : null}
      {/* the page content on the right */}
      <Box flex={1} w={{base: "calc(100% - 70px)", md: "calc(100% - 240px)"}} mx={"auto"}>
        {children}
      </Box>
    </Flex>
  )
};


export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex flexDir="column" h="100vh" alignItems="center" justifyContent="center">
      <Spinner size="xl" />
    </Flex>
  )
}

