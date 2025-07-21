import PageHeroSection from "@/components/common/PageHeroSection";
import React from "react";
import StudentRegistrationForm from "./StudentRegistrationForm";
import StepBuilderProvider from "@/providers/StepBuilderProvider";

const StudentRegistration = () => {
  return (
    <React.Fragment>
      <div aria-describedby="student-registration-page">
        <PageHeroSection title="Let's begin your journey together" />

        <section
          aria-describedby="student-form-section"
          className="py-12 sm:py-20 bg-neutral-100"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="form-wrapper"
                className="max-w-5xl mx-auto bg-white py-16 px-8 rounded-2xl"
              >
                <StepBuilderProvider>
                  <StudentRegistrationForm />
                </StepBuilderProvider>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default StudentRegistration;
