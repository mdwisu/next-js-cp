import Heading from "@/components/Heading";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";
import Link from "next/link";
import React from "react";

export const revalidate = 30;

export default async function BlogPage({ searchParams }) {
  const page = parsePageParam((await searchParams)?.page);
  const listPost = await getAllPosts(3, page);

  return (
    <>
      <Heading>Blog</Heading>
      <h2>list of posts</h2>
      <div className="flex  gap-3 pb-3">
        <Link href={`/blog?page=${page - 1}`}>&lt;</Link>
        <span>Page {page}</span>
        <Link href={`/blog?page=${page + 1}`}>&gt;</Link>
      </div>

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

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}
