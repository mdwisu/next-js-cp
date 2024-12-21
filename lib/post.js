import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import qs from "qs";

export async function getPost(slug) {
  const file = await readFile(`content/blog/${slug}.md`);
  const { data, content } = matter(file);
  return { slug, data, content };
}

export async function getAllPosts() {
  const url =
    "http://127.0.0.1:1337/api/posts" +
    "?" +
    qs.stringify(
      {
        fields: ["slug", "title", "description", "publishedAt", "body"],
        populate: {
          image: {
            fields: ["url"],
          },
        },
        sort: ["publishedAt:desc"],
        pagination: {
          pageSize: 3,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
  const response = await fetch(url);
  const { data } = await response.json();
  const posts = data.map((item) => ({
    slug: item.slug,
    title: item.title,
    description: item.description,
    body: item.body
  }));
  return posts;
}

export async function getSlugs() {
  const files = await readdir("./content/blog");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
  return slugs;
}
