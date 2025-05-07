import { FaqSection, FeedbackFromStudents, HomeArticles, HomeHero, InteractiveLearning, WhatWeOffer, WhyChooseUs } from "@/components/homepage";
import React from "react";

const HomePage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="home-page">
        <HomeHero />
        <WhatWeOffer />
        <WhyChooseUs />
        <InteractiveLearning />
        <FeedbackFromStudents />
        <HomeArticles />
        <FaqSection />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
