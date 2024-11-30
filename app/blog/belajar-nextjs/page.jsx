import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";
import { readFile } from "fs/promises";
import { marked } from "marked";
import matter from "gray-matter";

export default async function PostPage() {
  const text = await readFile("./content/blog/belajar-nextjs.md", "utf8");
  const {
    content,
    data: { title, image, date, author },
  } = matter(text);

  const html = marked(content);

  return (
    <div>
      <Heading>{title}</Heading>
      <p>Belajar Next js</p>
      <p className="italic text-sm pb-2">
        {date} - {author}
      </p>
      <Image src={image} width={500} height={500} alt="image-1" />
      <article dangerouslySetInnerHTML={{ __html: html }} className="prose" />
    </div>
  );
}
