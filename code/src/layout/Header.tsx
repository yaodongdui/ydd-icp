import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import ThemeDarkSwitch from "@/theme/ThemeDarkSwitch";
import { LayoutStore } from "./helper/LayoutHelper";
import Logo from "./Logo";
import LoginButton_ICP from "@/components/account/LoginButton_ICP";

export default function Header() {
  let { maxWidth_CONST } = LayoutStore;
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["暴论", "论据", "作品", "传承"];

  let brandLogo = (
    <NavbarBrand>
      <Logo />
      <Link color="foreground" href="/">
        <p className="font-bold text-inherit">窑洞对</p>
      </Link>
    </NavbarBrand>
  );

  return (
    <Navbar isBordered maxWidth={maxWidth_CONST} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        {brandLogo}
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {brandLogo}

        <NavbarItem isActive>
          <Link href="/">暴论</Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" aria-current="page">
            论据
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            作品
          </Link>
        </NavbarItem>
        <NavbarItem title="开宗立派">
          <Link color="foreground" href="#">
            传承
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeDarkSwitch />
        </NavbarItem>
        <NavbarItem>
          <LoginButton_ICP />
          {/* <Button as={Link} color="primary" href="#" variant="flat">
            Login
          </Button> */}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"}
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
