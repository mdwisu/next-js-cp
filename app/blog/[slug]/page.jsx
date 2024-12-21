import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";
import { marked } from "marked";
import { getPost } from "@/lib/post";
import ShareLinkButoon from "@/components/ShareLinkButoon";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const { data, content } = await getPost(slug);
  const { title, date, author, image } = data;
  const html = marked(content);

  return (
    <div>
      <Heading>{title}</Heading>
      <div className="flex gap-3 pb-2 items-baseline">
        <p className="italic text-sm pb-2">
          {date} - {author}
        </p>
        <ShareLinkButoon />
      </div>
      <Image src={image} width={500} height={500} alt="image-1" />
      <article dangerouslySetInnerHTML={{ __html: html }} className="prose" />
    </div>
  );
}
