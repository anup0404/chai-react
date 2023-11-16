import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>please log in the profile</div>;
  return <div>welcome to {user.username}</div>;
}

export default Profile;
