import React from "react";
import ImageFooter from "./ImageFooter";
import logo from "@/assets/footer1-Logo.png";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <ImageFooter />
      <div className="bg-[#092143] h-auto md:h-[530px]">
        <div className="h-[60px] border-[#183968] border-b">
          <ul className="flex flex-wrap justify-between items-center h-full text-gray-300 px-10 text-sm">
            {[
              "Free Shipping",
              "24/7 Support",
              "Online Payment",
              "Fast Delivery",
            ].map((item, index) => (
              <li key={index} className="flex-1 text-center md:text-left">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap justify-between border-b border-[#183968] px-10 text-gray-300 py-4">
          <div className="w-full md:w-auto space-y-2 mb-4 md:mb-0">
            <div className="flex flex-col items-center md:items-start gap-0">
              <Image src={logo} alt="logo" width={120} height={120} />
              <p className="text-[35px] pl-1 w-fit font-black flex justify-center leading-none mt-[-34px]">
                <span className="">Jubi</span>
                <span className="text-red-400">Lo</span>
              </p>
            </div>
            <div className="">
              <p className="">Business mail id's</p>
              <p className="text-gray-400">contactsupport@jubilo.com</p>
              <p className="text-gray-400">Career@jubilo.com</p>
              <p className="text-gray-400">admin@jubilo.com</p>
            </div>
          </div>
          {/* <div className="w-full md:w-auto space-y-2 mb-4 md:mb-0">
            <h1 className="text-xl font-black">Contact</h1>
            <p className="text-gray-400">About us</p>
            <p className="text-gray-400">Contact us</p>
          </div> */}

          <div className="w-full md:w-auto space-y-2 mb-4 md:mb-0">
            <h1 className="text-xl font-black">Quick Links</h1>
            {[
              "Fresh Flower Arrangements",
              "Designer Cakes",
              "Premium Chocolates",
              "Wedding Planning",
              "Balloon Decorations",
              "Haldi Ceremony Décor",
              "Room Decorations",
              "Jaimala Ceremony",
            ].map((item, index) => (
              <p className="text-gray-400" key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center border-b border-[#183968]">
          <div className="py-2">
            <div className="text-xl font-semibold text-gray-300">
              Our Social Links
            </div>
            <div className="flex gap-2 text-2xl md:pl-8 pl-6 mt-2">
              <a href="/" className="text-white bg-[#365493] p-1 rounded-full">
                <FaFacebookF />
              </a>
              <a href="/" className="text-white bg-[#774430] p-1 rounded-full">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center border-b border-[#183968] px-10 text-gray-300 pt-2">
          <div>
            <p className="text-gray-300 md:pl-4 ">
              Jubilo 2025 |&copy; All rights reserved
            </p>
            <p className="text-gray-300 text-sm  md:text-xl">
              Designed and Developed By{" "}
              <a href={"https://www.linkedin.com/in/prashant-kumar-singh05/"}>
                Prashant Kr. Singh
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
