"use client";

import React from "react";
import { StepsProvider } from "react-step-builder";

const StepBuilderProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <React.Fragment>
      <StepsProvider>{children}</StepsProvider>
    </React.Fragment>
  );
};

export default StepBuilderProvider;
