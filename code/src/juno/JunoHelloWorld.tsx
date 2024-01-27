"use client";

import { useEffect, useState } from "react";
import { type Doc, setDoc, listDocs, ListResults } from "@junobuild/core-peer";
import { nanoid } from "nanoid";
import { AccountICP_Store } from "@/helper/AccountICPHelper";

type Record = {
  hello: string;
};

export default function JunoHelloWorld(props: {}) {
  const [record, setRecord] = useState<Doc<Record> | undefined>(undefined);
  const [list, setList] = useState<ListResults<Doc<Record>> | undefined>(undefined);
  const { user } = AccountICP_Store;

  let reload = async () => {
    let res = await listDocs<Record>({
      collection: "demo",
      filter: {},
    });
    console.log("result", res);
    setList(res);
  };

  const insert = async () => {
    const doc = await setDoc({
      collection: "demo",
      doc: {
        key: nanoid(),
        data: {
          hello: "测试中文2",
        },
        owner: user?.key,
      },
    });

    setRecord(doc);
    reload();
  };

  useEffect(() => {
    console.log("nanoid6666", nanoid());
    reload();
  }, []);

  return (
    <div>
      <button onClick={insert}>Insert a document</button>
      {record !== undefined && <span>Key: {record.key}</span>}
      <hr />
      <div>
        {list?.items?.map((item, index) => {
          return (
            <div key={index}>
              {item.data.hello} - {item.created_at + ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
