import Heading from "@/components/Heading";
import React from "react";
import { marked } from "marked";
import { getPost, getSlugs } from "@/lib/post";
import ShareLinkButoon from "@/components/ShareLinkButoon";
import Image from "next/image";
import { notFound } from "next/navigation";

export const revalidate = 30;

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) {
    notFound();
  }
  const html = marked(post.body);

  return (
    <div>
      <Heading>{post.title}</Heading>
      <div className="flex gap-3 pb-2 items-baseline">
        <p className="italic text-sm pb-2">
          {post.date} - {post.author}
        </p>
        <ShareLinkButoon />
      </div>
      <Image src={post.image} width={500} height={500} alt="image-1" />
      <article dangerouslySetInnerHTML={{ __html: html }} className="prose" />
    </div>
  );
}
