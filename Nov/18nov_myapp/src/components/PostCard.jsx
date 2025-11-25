export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <h2>{post.title}</h2>
      <p>✍️ {post.author} • 📅 {post.date}</p>
      <p>{post.content}</p>
      <button className="btn">Read More</button>
    </div>
  );
}
