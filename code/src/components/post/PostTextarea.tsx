import React from "react";
import { Button, Textarea } from "@nextui-org/react";

export default function PostTextarea() {
  return (
    <div>
      <Textarea placeholder="请输入暴论" className="w-full" />
      <div className="mt-4 text-right">
        <Button color="primary">发布</Button>
      </div>
    </div>
  );
}
