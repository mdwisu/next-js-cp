import Heading from "@/components/Heading";
import React from "react";
import { marked } from "marked";
import { getPost, getSlugs } from "@/lib/post";
import ShareLinkButoon from "@/components/ShareLinkButoon";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

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
  const { title, date, author, image, body } = await getPost(slug);

  const html = marked(body);

  return (
    <div>
      <Heading>{title}</Heading>
      <div className="flex gap-3 pb-2 items-baseline">
        <p className="italic text-sm pb-2">
          {date} - {author}
        </p>
        <ShareLinkButoon />
      </div>
      <img src={image} width={500} height={500} alt="image-1" />
      <article dangerouslySetInnerHTML={{ __html: html }} className="prose" />
    </div>
  );
}
