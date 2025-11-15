// PostList.jsx
// Displays list of posts and allows DELETE, PUT, PATCH operations with stylish UI

import React, { useContext } from "react";
import ApiContext from "../context/ApiContext";

const PostList = () => {
  // Destructure all needed values from context
  const { posts, deletePost, updatePost, patchPost, loading, error } =
    useContext(ApiContext);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="post-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                {/* Updated section: Stylish action buttons */}
                <div className="action-buttons">
                  <button
                    className="patch"
                    onClick={() =>
                      patchPost(post.id, { title: "Updated Title" })
                    }
                  >
                    Patch
                  </button>

                  <button
                    className="put"
                    onClick={() =>
                      updatePost(post.id, {
                        title: "Full Update Title",
                        body: "This post was fully replaced.",
                      })
                    }
                  >
                    Put
                  </button>

                  <button
                    className="delete"
                    onClick={() => deletePost(post.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostList;
