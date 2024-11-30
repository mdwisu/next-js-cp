import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
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
      <PostCard
        title={"Belajar Next.js"}
        href={"/blog/belajar-nextjs"}
        image={
          "https://raw.githubusercontent.com/lunadiotic/learn-nextjs/refs/heads/master/public/images/image-1.jpg"
        }
        description={"Belajar Next.js"}
        date={"2023-01-01"}
        author={"Luna"}
      />
      <PostCard
        title={"belajar Route Next.js"}
        href={"/blog/latihan-route-nextjs"}
        image={
          "https://raw.githubusercontent.com/lunadiotic/learn-nextjs/refs/heads/master/public/images/image-2.jpg"
        }
        description={"Belajar Next.js"}
        date={"2023-01-01"}
        author={"Luna"}
      />
    </>
  );
}
