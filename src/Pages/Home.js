import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Slider from "../Components/Slider/Slider";
import Announcement from "./../Components/Announcement/Announcement";

export default function Home() {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
}
