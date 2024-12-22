import { readdir } from "fs/promises";
import qs from "qs";

const BACKEND_URL = "http://127.0.0.1:1337";

export async function getPost(slug) {
  const { data } = await fetchPost({
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
  });
  const attributes = data[0];

  return {
    ...mapPostAttributes(attributes),
    body: attributes.body,
  };
}

export async function getAllPosts() {
  const { data } = await fetchPost({
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
  });

  const posts = data.map(mapPostAttributes);
  return posts;
}

// Fungsi pemetaan untuk setiap post
function mapPostAttributes(attributes) {
  return {
    slug: attributes.slug,
    title: attributes.title,
    description: attributes.description,
    author: "Admin",
    date: attributes.publishedAt.split("T")[0],
    image: BACKEND_URL + attributes.image.url,
  };
}

export async function getSlugs() {
  const files = await readdir("./content/blog");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""));
  return slugs;
}

async function fetchPost(parameters) {
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(parameters, {
      encodeValuesOnly: true,
    });
  const response = await fetch(url);
  return await response.json();
}
