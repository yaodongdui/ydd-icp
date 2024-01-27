"use client";
import PostList from "@/components/post/PostList";
import PageWrap from "@/layout/PageWrap";
import PostTextarea from "../components/post/PostTextarea";
import { useState } from "react";

export default function Home(props: {}) {
  const [reloadAt, setReloadAt] = useState(0);
  return (
    <PageWrap className="">
      <PostTextarea
        onPostDone={() => {
          setReloadAt(Date.now());
        }}
      />
      <PostList reloadAt={reloadAt} />
    </PageWrap>
  );
}
