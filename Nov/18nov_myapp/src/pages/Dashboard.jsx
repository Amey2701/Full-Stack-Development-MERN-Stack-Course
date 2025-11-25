import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { posts } from "../data/posts";
import PostCard from "../components/PostCard";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <main style={{ padding: "20px" }}>
        <DarkModeToggle />
        <Header />

        <div className="posts-container">
          {posts.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </main>
    </div>
  );
}
