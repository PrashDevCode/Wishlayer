import React from "react";
import TemporaryDrawer from "./Sidebar";
import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="h-[80px] flex justify-between items-center px-4 border-b  border-gray-300">
      <div  >
        <div className="">
          <Link href={"/"}>
          <Image className="w-12" src={logo} alt="logo" />
          </Link>
          
        </div>
      </div>
      <div>
        <TemporaryDrawer />
      </div>
    </div>
  );
};

export default Navbar;
