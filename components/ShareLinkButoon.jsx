"use client";

import { useState } from "react";

export default function ShareLinkButoon() {
  const [copied, setCopied] = useState(false);
  function handleCLick() {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      onClick={handleCLick}
      className="border px-2 py-1 rounded text-gray-500 text-sm hover:bg-gray-200 hover:text-gray-700"
    >
      {copied ? "Link Copied" : "Share Link"}
    </button>
  );
}
