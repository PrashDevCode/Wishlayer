"use client";
import React from "react";

const AboutUsPage = () => {
  return (
    <div className="p-4 md:p-10 bg-[#FFE6DB] my-12">
      <div className=" p-6 ">
        <h1 className="text-2xl font-bold  text-center">About Us</h1>
        <div className="flex justify-center">
            <div className="w-10 h-1 md:w-14 md:h-2 bg-[#F0642966] rounded-lg mb-6"></div>
          </div>
        <div className="text-lg space-y-4">
          <p>
           Discover Jubilo — your one-stop destination for unforgettable celebrations!
           Jubilo is a comprehensive celebration and event management platform designed to make special moments seamless and memorable.
          </p>
          <p>
            The platform integrates Airbnb-inspired and studio-style roomstay options with customized cakes, premium decorations, party planning, and venue booking — bringing every element of a celebration together in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
