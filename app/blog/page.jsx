import Heading from "@/components/Heading";
import Link from "next/link";
import React from "react";

export default function BlogPage() {
  return (
    <>
      <Heading>Blog</Heading>
      <p>list of posts</p>
      <ul>
        <li>
          <Link href="/blog/belajar-nextjs">Belajar Next.js</Link>
        </li>
        <li>
          <Link href="/blog/latihan-route-nextjs">Belajar route next.js</Link>
        </li>
      </ul>
    </>
  );
}
