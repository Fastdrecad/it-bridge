export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-28 h-28 border-4 border-warning-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-3 text-lg font-semibold text-gray-600">Loading...</p>
    </div>
  );
}
