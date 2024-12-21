import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";
import { marked } from "marked";
import { getPost } from "@/lib/post";

export async function generateMetadata({ params: { slug } }) {
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function PostPage({ params: { slug } }) {
  const { data, content } = await getPost(slug);
  const { title, date, author, image } = data;
  const html = marked(content);

  return (
    <div>
      <Heading>{title}</Heading>
      <p className="italic text-sm pb-2">
        {date} - {author}
      </p>
      <Image src={image} width={500} height={500} alt="image-1" />
      <article dangerouslySetInnerHTML={{ __html: html }} className="prose" />
    </div>
  );
}
