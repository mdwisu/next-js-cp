"use client";

export default function ShareLinkButoon() {
  function handleCLick() {
    console.log("clicked");
  }
  return (
    <button
      onClick={handleCLick}
      className="border px-2 py-1 rounded text-gray-500 text-sm hover:bg-gray-200 hover:text-gray-700"
    >
      Copy Link
    </button>
  );
}
