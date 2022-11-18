import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserContext from "./contexts/UserContext";

function App(){

  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  return (
    <UserContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="sign-up" element={<SignUp/>}/>
              <Route path="sign-in" element={<SignIn/>}/>
          </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;