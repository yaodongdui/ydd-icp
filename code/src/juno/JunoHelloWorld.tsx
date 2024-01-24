"use client";

import { useEffect, useState } from "react";
import { type Doc, setDoc, listDocs, ListResults } from "@junobuild/core-peer";

type Record = {
  hello: string;
};

export default function JunoHelloWorld(props: {}) {
  const [record, setRecord] = useState<Doc<Record> | undefined>(undefined);
  const [list, setList] = useState<ListResults<Doc<Record>> | undefined>(undefined);

  let reload = async () => {
    let res = await listDocs<Record>({
      collection: "demo",
    });
    console.log("result", res);
    setList(res);
  };

  const insert = async () => {
    const doc = await setDoc({
      collection: "demo",
      doc: {
        key: `my-key-${new Date().getTime()}`,
        data: {
          hello: "world",
        },
      },
    });

    setRecord(doc);
    reload();
  };

  useEffect(() => {
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
