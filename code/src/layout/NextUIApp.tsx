"use client";

import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import ThemeInit from "@/theme/ThemeInit";
import { useRouter } from "next/navigation";

export function NextUIApp(props: { children: React.ReactNode | JSX.Element }) {
  const router = useRouter();

  // 2. Wrap NextUIProvider at the root of your app
  return (
    <NextUIProvider navigate={router.push}>
      <ThemeInit />
      {props.children}
    </NextUIProvider>
  );
}
