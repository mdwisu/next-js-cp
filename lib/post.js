import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";

export async function getPost(slug) {
  const file = await readFile(`content/blog/${slug}.md`);
  const { data, content } = matter(file);
  return { slug, data, content };
}

export async function getAllPosts() {
  const files = await readdir("./content/blog");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await getPost(slug);
      return post;
    })  
  );
  return posts;
}
