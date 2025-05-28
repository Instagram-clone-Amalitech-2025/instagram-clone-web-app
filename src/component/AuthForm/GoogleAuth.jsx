import { Button, useToast } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { auth, firestore } from "../../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import useAuthStore from "../../store/authStore";
import { useNavigate } from "react-router-dom";

const GoogleAuth = ({ prefix = "Log in" }) => {
  const loginUser = useAuthStore((state) => state.login);
  const toast = useToast();
  const navigate = useNavigate();

  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user exists in Firestore
      const userRef = doc(firestore, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        // New user, create document
        const userDoc = {
          uid: user.uid,
          email: user.email,
          username: user.displayName?.replace(/\s+/g, "").toLowerCase(),
          fullName: user.displayName || "",
          bio: "",
          profilePicURL: user.photoURL || "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(userRef, userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
        toast({
          title: "Account created successfully!",
          description: "You have signed up with Google. Please log in.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        // Redirect to login page or switch form if needed
        navigate("/auth");
      } else {
        // Existing user, log in
        const userDoc = userSnap.data();
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
        toast({
          title: "Login successful!",
          description: "You have logged in with Google.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/home");
      }
    } catch (error) {
      toast({
        title: "Google Auth Error",
        description: error.message,
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  return (
    <Button
      w={"full"}
      colorScheme="gray"
      leftIcon={<FcGoogle />}
      onClick={handleGoogleAuth}
      variant="outline"
      fontWeight="medium"
    >
      {prefix} with Google
    </Button>
  );
};

export default GoogleAuth;
