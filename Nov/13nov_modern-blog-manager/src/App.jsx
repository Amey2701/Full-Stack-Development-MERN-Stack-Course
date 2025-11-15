// App.jsx
// Main app combining all components with beautiful UI

import React from "react";
import "./App.css";
import { ApiProvider } from "./context/ApiProvider";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

const App = () => {
  return (
    <ApiProvider>
      <h1>Modern Blog Manager</h1>
      <PostForm />
      <PostList />
    </ApiProvider>
  );
};

export default App;
