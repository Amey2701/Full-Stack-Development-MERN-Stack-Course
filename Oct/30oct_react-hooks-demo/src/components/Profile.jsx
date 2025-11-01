// 👉 Concepts Used: useContext, useEffect, useLayoutEffect, useRef

import React, { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  // useContext: get data from global context
  const { user } = useContext(UserContext);

  // useRef: to directly access DOM element
  const titleRef = useRef(null);

  // useLayoutEffect: runs before browser paints the screen (synchronous)
  useLayoutEffect(() => {
    console.log("Layout effect runs before screen is painted");
  }, []);

  // useEffect: runs after component appears on screen (asynchronous)
  useEffect(() => {
    // Change color of title after rendering
    titleRef.current.style.color = "blue";
  }, []);

  return (
    <div>
      <h2 ref={titleRef}>👤 Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default Profile;
