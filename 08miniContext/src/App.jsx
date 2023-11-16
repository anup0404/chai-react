import React from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1> welcome to profole page of react aur chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
