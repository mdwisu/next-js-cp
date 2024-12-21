import { writeFileSync } from "fs";

const url = "http://127.0.0.1:1337/api/posts" + "?populate=*";
const response = await fetch(url);
const body = await response.json();
const posts = JSON.stringify(body, null, 2);
// console.log(posts);

const file = "scripts/strapi-response.json";
writeFileSync(file, posts, "utf8");
