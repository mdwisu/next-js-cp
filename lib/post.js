import { readFile } from "fs/promises";
import matter from "gray-matter";

export async function getPost(slug) {
  const file = await readFile(`content/blog/${slug}.md`);
  const { data, content } = matter(file);
  return { data, content };
}
