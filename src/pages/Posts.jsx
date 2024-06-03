import { useLoaderData } from "react-router-dom";
import { PostCards } from "../components/posts/PostCards";

export function Posts() {
  const posts = useLoaderData();

  return (
    <>
      <h1 className="page-title">Posts</h1>
      <PostCards posts={posts} />
    </>
  );
}
