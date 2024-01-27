"use client";

import PostItem from "./PostItem";

export default function PostList() {
  return (
    <div className="mt-4 flex flex-col gap-2">
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}
