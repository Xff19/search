import React from "react";
import { getSortedPostData } from "../../../lib/post";
import ListItem from '@/app/components/ListItem'
export default function Posts() {
  const posts = getSortedPostData();
  return (
    <div>
      <section>
        <h2>blog</h2>
        <ul>{posts.map((post) =><ListItem key={post.id} post={post}></ListItem>)}</ul>
      </section>
    </div>
  );
}
