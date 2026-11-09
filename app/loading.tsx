export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />

      {/* Loading Text */}
      <p className="text-gray-600 text-lg font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
}
