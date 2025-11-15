// ApiProvider.jsx
// Provides all CRUD + PUT + PATCH functions using Context API and Axios

import React, { useState, useEffect } from "react";
import axios from "axios";
import ApiContext from "./ApiContext";

export const ApiProvider = ({ children }) => {
  const BaseUrl = "https://jsonplaceholder.typicode.com/posts";

  // state variables
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // GET: Fetch posts
  const getPosts = async () => {
    setLoading(true);
    try {
      const res = await axios.get(BaseUrl);
      setPosts(res.data.slice(0, 5));
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // POST: Add new post
  const addPost = async (newPost) => {
    setLoading(true);
    try {
      const res = await axios.post(BaseUrl, newPost);
      setPosts((prev) => [res.data, ...prev]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // PUT: Update entire post
  const updatePost = async (id, updatedPost) => {
    setLoading(true);
    try {
      const res = await axios.put(`${BaseUrl}/${id}`, updatedPost);
      setPosts((prev) =>
        prev.map((p) => (p.id === id ? res.data : p))
      );
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // PATCH: Update only part of post
  const patchPost = async (id, partialData) => {
    setLoading(true);
    try {
      const res = await axios.patch(`${BaseUrl}/${id}`, partialData);
      setPosts((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...res.data } : p))
      );
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // DELETE: Remove post
  const deletePost = async (id) => {
    setLoading(true);
    try {
      await axios.delete(`${BaseUrl}/${id}`);
      setPosts((prev) => prev.filter((p) => p.id !== id));
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <ApiContext.Provider
      value={{
        posts,
        loading,
        error,
        addPost,
        deletePost,
        updatePost,
        patchPost,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
