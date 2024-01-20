import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

function NextUIApp(props: { children: JSX.Element }) {
  // 2. Wrap NextUIProvider at the root of your app
  return <NextUIProvider>{props.children}</NextUIProvider>;
}
