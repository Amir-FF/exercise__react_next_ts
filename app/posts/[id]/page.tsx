import { notFound } from "next/navigation";

type Post = {
  id: string;
  title: string;
  body: string;
};

const getPost = async (id: string): Promise<Post | undefined> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`);

  if (!res.ok) {
    throw new Error(`The URL has a problem. ${res.status}`);
  } else {
    if (res.status === 404) {
      notFound();
    }
  }

  return await res.json();
};

export async function generateStaticParams() {
  const res = await fetch("http://localhost:3001/posts");

  if (!res.ok) {
    throw new Error(`The URL has a problem. ${res}`);
  } else {
    if (res.status === 404) {
      notFound();
    }
  }

  const posts: Post[] = await res.json();

  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post: Post | undefined = await getPost(id);

  return (
    <>
      <h1 className="text-2xl">post {id}</h1>

      <h3>{post && post.title}</h3>
    </>
  );
}
