import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
const postsDirectory = path.join(process.cwd(), "blogposts");

export function getSortedPostData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileCountents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileCountents);
    const matches = matterResult.data.match(/(\w+):'([^']+)'/g);
    const obj: any = {};
    matches.forEach((match: any) => {
      const [key, value] = match.split(/:'([^']+)'/).filter(Boolean);
      obj[key] = value;
    });
    const blogPost: BlogPost = {
      id,
      title: obj.title,
      date: obj.date,
    };
    return blogPost;
  });
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}
export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileCountents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileCountents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  const matches = matterResult.data.match(/(\w+):'([^']+)'/g);
  const obj: any = {};
  matches.forEach((match: any) => {
    const [key, value] = match.split(/:'([^']+)'/).filter(Boolean);
    obj[key] = value;
  });
  const blogPostWithHtml: BlogPost & { contentHtml: string } = {
    id,
    title: obj.title,
    date: obj.date,
    contentHtml,
  };
  return blogPostWithHtml;
}
