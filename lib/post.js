import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import qs from "qs";

const BACKEND_URL = "http://127.0.0.1:1337";

export async function getPost(slug) {
  // const file = await readFile(`content/blog/${slug}.md`);
  // const { data, content } = matter(file);
  // return { slug, data, content };
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(
      {
        filters: {
          slug: {
            $eq: slug,
          },
        },
        fields: ["slug", "title", "description", "publishedAt", "body"],
        populate: {
          image: {
            fields: ["url"],
          },
        },
        pagination: {
          pageSize: 1,
          withCount: false,
        },
      },
      {
        encodeValuesOnly: true,
      }
    );
  const response = await fetch(url);
  const { data } = await response.json();
  const attributes = data[0];

  return {
    slug: attributes.slug,
    title: attributes.title,
    description: attributes.description,
    body: attributes.body,
    author: "Admin",
    date: attributes.publishedAt.split("T")[0],
    image: BACKEND_URL + attributes.image.url,
  };
}

export async function getAllPosts() {
  const url =
    `${BACKEND_URL}/api/posts?` +
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
    author: "Admin",
    date: item.publishedAt.split("T")[0],
    image: BACKEND_URL + item.image.url,
    body: item.body,
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
