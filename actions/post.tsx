"use server";

import { revalidatePath } from "next/cache";

export type Data = {
  id: number;
  title: string;
};

export type err = {
  errTitle: string;
};

const addPost = async (
  state: err | null | undefined,
  formData: FormData,
): Promise<err | undefined> => {
  const title = formData.get("title") as string;

  if (title === "") {
    return {
      errTitle: "Title is request",
    };
  }

  const res = await fetch("http://localhost:3001/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });

  if (!res.ok) {
    throw new Error(`${res.status}`);
  }

  // const data: Data = await res.json();

  revalidatePath("/posts");
};

export { addPost };
