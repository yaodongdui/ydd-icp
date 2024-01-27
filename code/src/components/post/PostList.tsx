"use client";

import { Doc, ListResults, listDocs } from "@junobuild/core-peer";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { PostBean } from "./PostTextarea";

export default function PostList() {
  const [list, setList] = useState<ListResults<Doc<PostBean>> | undefined>(undefined);

  let reload = async () => {
    let res = await listDocs<PostBean>({
      collection: "demo",
      filter: {},
    });
    console.log("result", res);
    setList(res);
  };

  useEffect(() => {
    reload();
  }, []);

  return (
    <div className="mt-4 flex flex-col gap-2">
      {list?.items.map((item, index) => {
        return <PostItem key={index} doc={item} />;
      })}
    </div>
  );
}
