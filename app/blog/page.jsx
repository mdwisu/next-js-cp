import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";
import React from "react";

export default async function BlogPage() {
  const listPost = await getAllPosts();

  return (
    <>
      <Heading>Blog</Heading>
      <p>list of posts</p>

      {listPost.map((post) => {
        return (
          <PostCard
            key={post.slug}
            title={post.title}
            description={post.description}
            href={`/blog/${post.slug}`}
            date={post.date}
            author={post.author}
            image={post.image}
          />
        );
      })}
    </>
  );
}
