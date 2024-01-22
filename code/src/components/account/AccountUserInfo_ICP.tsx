import { User } from "@junobuild/core";
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { signOut } from "@junobuild/core";

export default function AccountUserInfo_ICP(props: { user: User }) {
  const getShotName = (name: string) => {
    return name.substring(0, 3) + "..." + name.substring(name.length - 3);
  };
  return (
    <div>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <div className="flex cursor-pointer items-center gap-2">
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name={props.user.key}
              size="sm"
            />
            <div className="hidden flex-col sm:flex">
              <span className="text-small">{getShotName(props.user.key)}</span>
              {/* <span className="text-tiny text-default-400">{user.email}</span> */}
            </div>
          </div>
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="copy" onClick={() => {}}>
            Copy {props.user.key}
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            onClick={async () => {
              await signOut();
            }}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
