import { Route, Routes, Navigate } from "react-router-dom"; // Import Navigate
import HomePage from "./pages/HomePage/HomePage"; 
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { auth } from "./firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function App() {
  const [authUser] = useAuthState(auth); // Get the authenticated user from the store
  return (
    <PageLayout>
      <Routes>
        {/* Redirect the root path ("/") to the authentication page ("/auth") */}
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/auth" />} />
        <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/" />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
