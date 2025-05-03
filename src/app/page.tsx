import { HomeHero } from "@/components/homepage";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="home-page">
        <HomeHero />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
