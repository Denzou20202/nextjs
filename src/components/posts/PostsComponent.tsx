import Link from "next/link";
import {getAllPosts} from "@/src/services/api.service";

export const PostsComponent = async () => {

  const posts = await getAllPosts();

  return (
    <div>
      {
        posts.map((post) => (
          <div key={post.id}>
            <Link href={{pathname:`/posts/${post.id}`, query:{data:JSON.stringify(post)}}}>{post.id} - {post.title}</Link>
          </div>
        ))
      }
    </div>
  );
};