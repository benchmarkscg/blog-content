const fs = require("fs-extra");
const matter = require("gray-matter");

const postsDir = "./posts";
const indexFile = "./index/index.json";
const tagsFile = "./tags/tags.json";
const searchFile = "./search/search.json";

async function build() {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

  const posts = [];
  const tagsMap = {};

  for (const file of files) {
    const raw = fs.readFileSync(`${postsDir}/${file}`, "utf8");
    const { data } = matter(raw);

    posts.push(data);

    if (Array.isArray(data.tags)) {
      data.tags.forEach(tag => {
        if (!tagsMap[tag]) tagsMap[tag] = [];
        tagsMap[tag].push(data.slug);
      });
    }
  }

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.ensureDirSync("index");
  fs.writeJsonSync(indexFile, posts, { spaces: 2 });

  fs.ensureDirSync("tags");
  fs.writeJsonSync(tagsFile, tagsMap, { spaces: 2 });

  fs.ensureDirSync("search");
  fs.writeJsonSync(searchFile, posts, { spaces: 2 });

  console.log("Blog JSON generated successfully.");
}

build();
