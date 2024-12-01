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

      {listPost.map((post) => {
        return (
          <PostCard
            key={post.slug}
            title={post.data.title}
            href={`/blog/${post.slug}`}
            date={post.data.date}
            author={post.data.author}
            image={post.data.image}
          />
        )
      })}
    </>
  );
}
