"use client";

import ButtonLoading from "../feedback/ButtonLoading";
import { signIn, InternetIdentityProvider, initJuno, NFIDProvider } from "@junobuild/core";
import { authSubscribe, User } from "@junobuild/core";
import { useEffect, useState } from "react";
import AccountUserInfo_ICP from "./AccountUserInfo_ICP";
import { Button } from "@nextui-org/react";

export default function LoginButton_ICP() {
  const [initLoading, setInitLoading] = useState(true);
  const [user, setUser] = useState<User | null>();
  useEffect(() => {
    let isInit = false;
    (async () => {
      await initJuno({
        satelliteId: "swe6d-5yaaa-aaaal-adjdq-cai",
      });
      isInit = true;
    })();
    const unsubscribe = authSubscribe((user: User | null) => {
      if (!isInit) {
        return;
      }
      setInitLoading(false);
      setUser(user);
      console.log("User:", user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (initLoading) {
    return <Button isLoading={true}></Button>;
  }
  if (user) {
    return <AccountUserInfo_ICP user={user} />;
  }

  return (
    <>
      <ButtonLoading
        color="primary"
        href="#"
        variant="flat"
        onClick={async () => {
          await signIn({
            // provider: new InternetIdentityProvider({}),
            provider: new NFIDProvider({
              appName: "窑洞对",
              logoUrl: "https://somewhere.com/your_logo.png",
            }),
          });
        }}
      >
        Login
      </ButtonLoading>
    </>
  );
}
