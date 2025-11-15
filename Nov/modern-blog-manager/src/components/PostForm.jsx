// PostForm.jsx
// Form to add new posts to API

import React, { useContext, useState } from "react";
import ApiContext from "../context/ApiContext";

const PostForm = () => {
  const { addPost } = useContext(ApiContext);
  const [form, setForm] = useState({ title: "", body: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(form);
    setForm({ title: "", body: "" });
  };

  return (
    <div className="form">
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Enter Post Title"
      />
      <input
        type="text"
        name="body"
        value={form.body}
        onChange={handleChange}
        placeholder="Enter Post Description"
      />
      <button onClick={handleSubmit}>Add Post</button>
    </div>
  );
};

export default PostForm;
