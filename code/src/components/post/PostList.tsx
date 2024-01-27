"use client";

import { Doc, ListResults, listDocs } from "@junobuild/core-peer";
import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import { PostBean } from "./PostTextarea";
import { Skeleton } from "@nextui-org/react";

export default function PostList() {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<ListResults<Doc<PostBean>> | undefined>(undefined);

  let reload = async () => {
    setLoading(true);
    let res = await listDocs<PostBean>({
      collection: "post",
      filter: {},
    });
    setLoading(false);
    console.log("result", res);
    setList(res);
  };

  useEffect(() => {
    reload();
  }, []);

  if (loading) {
    return (
      <div className="flex w-full items-center gap-3">
        <div>
          <Skeleton className="flex h-12 w-12 rounded-full" />
        </div>
        <div className="flex w-full flex-col gap-2">
          <Skeleton className="h-3 w-3/5 rounded-lg" />
          <Skeleton className="h-3 w-4/5 rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 flex flex-col gap-2">
      {list?.items.map((item, index) => {
        return <PostItem key={index} doc={item} />;
      })}
    </div>
  );
}
