import { readdir } from "fs/promises";
import qs from "qs";

export const CACHE_TAG_POSTS = "posts";

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
  if (data.length === 0) {
    return null;
  }
  const attributes = data[0];

  return {
    ...mapPostAttributes(attributes),
    body: attributes.body,
  };
}

export async function getAllPosts(pageSize, page) {
  const { data, meta } = await fetchPost({
    fields: ["slug", "title", "description", "publishedAt", "body"],
    populate: {
      image: {
        fields: ["url"],
      },
    },
    sort: ["publishedAt:desc"],
    pagination: {
      pageSize,
      page,
    },
  });
  return {
    pageCount: meta.pagination.pageCount,
    posts: data.map(mapPostAttributes),
  };
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
  const { data } = await fetchPost({
    fields: ["slug"],
    sort: ["publishedAt:desc"],
    pagination: {
      pageSize: 100,
    },
  });
  return data.map((post) => post.slug);
}

async function fetchPost(parameters) {
  const url =
    `${BACKEND_URL}/api/posts?` +
    qs.stringify(parameters, {
      encodeValuesOnly: true,
    });
  const response = await fetch(url, { next: { tags: [CACHE_TAG_POSTS] } });
  return await response.json();
}
