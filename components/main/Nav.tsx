"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["About", "Experience", "Skills", "Projects"];

  return (
    <Navbar
      isBlurred
      className=" bg-white/10 z-[9999] "
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-gray-400"
        />
        <NavbarBrand>
          <Link className="cursor-pointer">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
          <p className="font-bold text-xl  tracking-wider text-gray-400">ED</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <Link className="text-gray-400 hover:text-violet-400" href="#about">
            About
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#experience" className="text-gray-400 hover:text-violet-400" aria-current="page">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#skills" className="text-gray-400 hover:text-violet-400" aria-current="page">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" className="text-gray-400 hover:text-violet-400" href="#projects">
            Projects
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="relative bg-[url('/text.jpeg')] bg-contain    animate-text-slide rounded-xl group">
          <Button
            as={Link}
            className="button-primary font-bold text-base font-poppins  text-violet-900 group-hover:text-black transition-all duration-300  backdrop-blur-md overflow-hidden tracking-wider"
            href="#contact"
            variant="flat"
          >
            Contact Me
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="color-primary  z-[9999999] ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full text-gray-400" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
