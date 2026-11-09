"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="text-7xl font-bold text-red-500 mb-4">500</div>

        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          Oops! Something went wrong
        </h1>

        <p className="text-gray-500 mb-6">{error.message}</p>

        <button
          onClick={() => reset()}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
