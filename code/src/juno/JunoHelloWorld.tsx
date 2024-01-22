"use client";

import { useEffect, useState } from "react";
import { type Doc, initJuno, setDoc } from "@junobuild/core-peer";

type Record = {
  hello: string;
};

export default function JunoHelloWorld(props: {}) {
  const [record, setRecord] = useState<Doc<Record> | undefined>(undefined);

  // TODO: Replace 'satelliteId' with your actual satellite ID
  useEffect(() => {
    // (async () =>
    //   await initJuno({
    //     satelliteId: "swe6d-5yaaa-aaaal-adjdq-cai",
    //   }))();
  }, []);

  return <div>6666</div>;

  // const insert = async () => {
  //   const doc = await setDoc({
  //     collection: "demo",
  //     doc: {
  //       key: `my-key-${new Date().getTime()}`,
  //       data: {
  //         hello: "world",
  //       },
  //     },
  //   });

  //   setRecord(doc);
  // };

  // return (
  //   <>
  //     <button onClick={insert}>Insert a document</button>
  //     {record !== undefined && <span>Key: {record.key}</span>}
  //   </>
  // );
}
