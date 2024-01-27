import resso from "resso";
import { authSubscribe, User } from "@junobuild/core-peer";
export type TLoginModalStatus = "SignIn" | "SignUp" | "CLOSE" | "ResetPassword";

export const AccountICP_Store = resso({
  user: null as User | null,
  userLoading: true,
});

export const AccountICPHelper = {
  setLoading(loading: boolean) {
    AccountICP_Store.userLoading = loading;
  },
  setUser(user: User | null) {
    AccountICP_Store.user = user;
    AccountICP_Store.userLoading = false;
  },
  getAvatarUrl(user: { avatar: string | null; id: string }) {
    if (user.avatar) {
      return user.avatar;
    }
    return `https://i.pravatar.cc/150?u=${user.id}`;
  },
};
