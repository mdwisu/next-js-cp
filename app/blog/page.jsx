import Heading from "@/components/Heading";
import Pagination from "@/components/Pagination";
import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/post";
import Link from "next/link";
import React from "react";

export const revalidate = 30;

export default async function BlogPage({ searchParams }) {
  const page = parsePageParam((await searchParams)?.page);
  const { pageCount, posts } = await getAllPosts(3, page);

  return (
    <>
      <Heading>Blog</Heading>
      <h2>list of posts</h2>
      <Pagination href="/blog" page={page} pageCount={pageCount} />
      {posts.map((post) => {
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
