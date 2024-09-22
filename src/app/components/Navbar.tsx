"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";

import { useAppSelector } from "../redux/hook";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import Logo from "./Logo";

export default function Navbars() {
  const cartUser = useAppSelector((state) => state.cart);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Navbar maxWidth="full" isBordered>
      <NavbarContent className="md:hidden">
        <NavbarMenuToggle icon={<RxHamburgerMenu color="black" size={25} />} />
      </NavbarContent>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex" justify="start">
        <NavbarBrand className="mr-4">
          <Logo/>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-5">
          
          <NavbarItem isActive>
            <Link href="#" aria-current="page" color="secondary">
              On Sale
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              New Arrival
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Brands
            </Link>
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <Input
          classNames={{
            base: "hidden md:flex h-10 w-[577px] md:w-full",
            mainWrapper: "h-full",
            input: "text-small bg-purple-700 text-white",
            inputWrapper:
              "h-full  font-normal bg-purple-700 text-white   ",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<IoIosSearch className=" text-white" />}
          type="search"
        />
        <Link href="/cart">
          <div className=" flex flex-row-reverse">
            <HiOutlineShoppingCart className=" w-[40px]  h-6" />
            {cartUser?.cart?.length}:
          </div>
        </Link>
        <FaRegUserCircle className="w-8 h-6" />
      </NavbarContent>

      <NavbarMenu className=" bg-white pt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
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
