import CreatePost from "@/components/CreatePost";
import Link from "next/link";
import { notFound } from "next/navigation";

type Post = {
  id: string;
  title: string;
  body: string;
};

const getPosts = async (): Promise<Post[] | undefined> => {
  const res = await fetch("http://localhost:3001/posts");

  // const res = await fetch("http://localhost:3001/posts", {
  //   cache: "force-cache",
  // });

  // const res = await fetch("http://localhost:3001/posts", {
  //   cache: "no-cache",
  // });

  // const res = await fetch("http://localhost:3001/posts", {
  //   next: { revalidate: 5 },
  // });

  if (!res.ok) {
    throw new Error(`The URL has a problem. ${res}`);
  } else {
    if (res.status === 404) {
      notFound();
    }
  }

  return await res.json();
};

export default async function Posts() {
  const posts = await getPosts();

  return (
    <>
      <CreatePost />

      <h1 className="text-2xl">posts</h1>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <Link
                className="underline text-blue-500"
                href={`/posts/${post.id}`}
              >
                Post: {post.id}
              </Link>{" "}
              title:
              {post.title}
            </li>
          ))}
      </ul>
    </>
  );
}
