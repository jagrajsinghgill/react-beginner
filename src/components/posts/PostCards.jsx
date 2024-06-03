import { PostCard } from "./PostCard";

export function PostCards({ posts }) {
  return (
    <div className="card-grid">
      {posts &&
        posts.length > 0 &&
        posts.map((item) => <PostCard key={item.id} {...item} />)}
    </div>
  );
}
