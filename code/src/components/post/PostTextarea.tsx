"use client";
import React, { useEffect, useState } from "react";
import { Button, Textarea } from "@nextui-org/react";
import { AccountICP_Store } from "@/helper/AccountICPHelper";
import { setDoc } from "@junobuild/core-peer";
import { nanoid } from "nanoid";
import ButtonLoading from "../feedback/ButtonLoading";

export type PostBean = {
  content: string;
};

export default function PostTextarea() {
  const [text, setText] = useState("");
  const { user } = AccountICP_Store;
  useEffect(() => {}, [user]);

  const insert = async () => {
    const doc = await setDoc<PostBean>({
      collection: "post",
      doc: {
        key: nanoid(),
        data: {
          content: text.trim(),
        },
        owner: user?.key,
      },
    });
  };

  return (
    <div>
      <Textarea
        placeholder={user ? "请输入暴论" : "登录可用"}
        className="w-full"
        isDisabled={!user}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <div className="mt-4 text-right">
        <ButtonLoading
          color="primary"
          isDisabled={!user}
          onClick={async () => {
            await insert();
            setText("");
          }}
        >
          发布
        </ButtonLoading>
      </div>
    </div>
  );
}
