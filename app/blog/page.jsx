import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";
import Link from "next/link";
import React from "react";

export default async function BlogPage() {
  const listPost = await getAllPosts();
  console.log(listPost);

  return (
    <>
      <Heading>Blog</Heading>
      <p>list of posts</p>
    </>
  );
}
