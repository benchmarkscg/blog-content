const fs = require("fs-extra");
const matter = require("gray-matter");

const postsDir = "./posts";
const indexDir = "./index";
const tagsFile = "./tags/tags.json";
const searchFile = "./search/search.json";
const manifestFile = "./manifest.json";

async function build() {

  const manifest = fs.readJsonSync(manifestFile);
  const perPage = manifest.posts_per_page || 6;

  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));

  const posts = [];
  const searchIndex = [];
  const tagsMap = {};

  for (const file of files) {

    const raw = fs.readFileSync(`${postsDir}/${file}`, "utf8");
    const { data, content } = matter(raw);

    if (!data.slug) {
      console.warn(`Post ${file} missing slug`);
      continue;
    }

    const meta = {
      title: data.title,
      slug: data.slug,
      date: data.date,
      description: data.description,
      image: data.image || null,
      tags: data.tags || [],
      type: data.type || "blog"
    };

    posts.push(meta);

    searchIndex.push({
      title: data.title,
      slug: data.slug,
      description: data.description,
      image: data.image,
      tags: data.tags || []
    });

    if (Array.isArray(data.tags)) {
      data.tags.forEach(tag => {
        if (!tagsMap[tag]) tagsMap[tag] = [];
        tagsMap[tag].push(data.slug);
      });
    }
  }

  // ordenar por fecha
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // generar index paginado
  fs.ensureDirSync(indexDir);

  const totalPages = Math.ceil(posts.length / perPage);

  for (let i = 0; i < totalPages; i++) {

    const page = i + 1;

    const start = i * perPage;
    const end = start + perPage;

    const pagePosts = posts.slice(start, end);

    const indexData = {
      page: page,
      total_pages: totalPages,
      posts: pagePosts
    };

    fs.writeJsonSync(`${indexDir}/index-${page}.json`, indexData, { spaces: 2 });
  }

  // tags
  fs.ensureDirSync("tags");
  fs.writeJsonSync(tagsFile, tagsMap, { spaces: 2 });

  // search
  fs.ensureDirSync("search");
  fs.writeJsonSync(searchFile, searchIndex, { spaces: 2 });

  // actualizar build timestamp
  manifest.build = Date.now();
  fs.writeJsonSync(manifestFile, manifest, { spaces: 2 });

  console.log("Blog build completed.");
}

build();
