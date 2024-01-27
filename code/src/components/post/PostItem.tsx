"use client";

import { Doc } from "@junobuild/core-peer";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { useState } from "react";
import { PostBean } from "./PostTextarea";

export default function PostItem({ doc }: { doc: Doc<PostBean> }) {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card className="">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" name={doc.owner} />
          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="text-small font-semibold leading-none text-default-400">{doc.owner}</h4>
          </div>
        </div>
        <Button
          className={isFollowed ? "border-default-200 bg-transparent text-foreground" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="overflow-y-hidden px-3 py-0 text-small text-default-600">
        <p>{doc.data.content}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="text-small font-semibold text-default-400">?</p>
          <p className=" text-small text-default-400">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="text-small font-semibold text-default-400">?</p>
          <p className="text-small text-default-400">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
