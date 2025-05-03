import { HomeHero, WhatWeOffer } from "@/components/homepage";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="home-page">
        <HomeHero />
        <WhatWeOffer />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
