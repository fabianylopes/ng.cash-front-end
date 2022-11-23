import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserContext from "./contexts/UserContext";

function App() {
  const initialToken = localStorage.getItem("token");
  const initialUserData = localStorage.getItem("userData");
  const [token, setToken] = useState(initialToken);
  const [userData, setUserData] = useState(JSON.parse(initialUserData));

  return (
    <UserContext.Provider value={{ token, setToken, userData, setUserData }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
