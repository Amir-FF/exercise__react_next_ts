"use client";

import { addPost } from "@/actions/post";
import { useActionState } from "react";

export default function CreatePost() {
  const [state, formAction, pending] = useActionState(addPost, null);

  return (
    <div className="mb-2 p-4">
      <form
        action={formAction}
        className="w-full max-w-md p-8 rounded-2xl shadow-lg space-y-6"
      >
        <div>
          <label
            htmlFor="title"
            className="block font-medium text-gray-700 mb-2 text-2xl"
          >
            Title
          </label>

          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />

          {state && <p className="text-red-700">{state.errTitle}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer"
          disabled={pending}
        >
          {pending ? "Loading..." : "Create Post"}
        </button>
      </form>
    </div>
  );
}
