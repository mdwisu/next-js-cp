"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.alert("hello");
  }, []);
  console.log("hello");

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
