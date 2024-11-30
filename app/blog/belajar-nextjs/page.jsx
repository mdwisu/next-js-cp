import Heading from "@/components/Heading";
import Image from "next/image";
import React from "react";
import { readFile } from "fs/promises";
import { marked } from "marked";

export default async function PostPage() {
  const text = await readFile("./content/blog/belajar-nextjs.md", "utf8");
  const html = marked(text);
  return (
    <div>
      <Heading>Belajar Next js</Heading>
      <p>Belajar Next js</p>
      <Image
        src="https://raw.githubusercontent.com/lunadiotic/learn-nextjs/refs/heads/master/public/images/image-1.jpg"
        width={500}
        height={500}
        alt="image-1"
      />
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
