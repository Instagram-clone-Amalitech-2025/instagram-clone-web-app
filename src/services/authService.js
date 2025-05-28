// const BASE_URL = "https://instaclone-backend-79yc.onrender.com/auth";

// export const register = async (username, email, full_name, password) => {
//   const response = await fetch(`${BASE_URL}/register/`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ username, email, full_name, password }),
//   });

//   const data = await response.json();
//   if (!response.ok) {
//     // Log the error for debugging
//     console.error("Register error:", data);
//     throw new Error(data.message || JSON.stringify(data) || "Registration failed");
//   }

//   return data;
// };

// export const login = async (username, password) => {
//   const response = await fetch(`${BASE_URL}/login/`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ username, password }),
//   });

//   const data = await response.json();
//   if (!response.ok) {
//     // Log the error for debugging
//     console.error("Login error:", data);
//     throw new Error(data.message || JSON.stringify(data) || "Login failed");
//   }

//   return data;
// };