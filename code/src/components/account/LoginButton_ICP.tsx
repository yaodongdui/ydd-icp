"use client";

import ButtonLoading from "../feedback/ButtonLoading";
import { signIn, InternetIdentityProvider, initJuno, NFIDProvider } from "@junobuild/core-peer";
import { authSubscribe, User } from "@junobuild/core-peer";
import { useEffect, useState } from "react";
import AccountUserInfo_ICP from "./AccountUserInfo_ICP";
import { Button } from "@nextui-org/react";
import { JunoHelper } from "@/juno/JunoHelper";
import { AccountICPHelper, AccountICP_Store } from "@/helper/AccountICPHelper";

export default function LoginButton_ICP() {
  const { user, userLoading } = AccountICP_Store;

  useEffect(() => {
    JunoHelper.init();
    AccountICPHelper.setLoading(true);
    const unsubscribe = authSubscribe((user: User | null) => {
      AccountICPHelper.setUser(user);
      console.log("User:", user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  if (userLoading) {
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
              logoUrl: "https://www.ydd.plus/ydd.png",
            }),
          });
        }}
      >
        Login
      </ButtonLoading>
    </>
  );
}
