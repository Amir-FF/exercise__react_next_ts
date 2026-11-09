"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <h2>Something went wrong!</h2>
      <p className="text-red-600">{error.message}</p>

      <br />

      <button
        onClick={() => reset()}
        className="bg-blue-500 hover:bg-blue-300 active:bg-blue-700 rounded-2xl p-3 cursor-pointer"
      >
        Try again
      </button>
    </>
  );
}
