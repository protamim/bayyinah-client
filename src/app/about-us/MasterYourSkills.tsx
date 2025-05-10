import Image from "next/image";
import React from "react";
import { MdPhoneCallback } from "react-icons/md";
import ReqForm from "./ReqForm";

const FEATURES = [
  {
    image: {
      url: "/instructor-vector.png",
      width: 120,
      height: 120,
      alt: "Instructor Vector",
    },
    title: "Qualified Instructors",
    description:
      "You’ll learn from native Arabic speakers, Al-Azhar graduates, and certified Quran instructors.",
  },
  {
    image: {
      url: "/calendar-vector.png",
      width: 80,
      height: 80,
      alt: "Calender Vector",
    },
    title: "Flexible Scheduling",
    description:
      "Study anytime with 24/7 classes and self-paced courses that fit your lifestyle.",
  },
  {
    image: {
      url: "/curriculum-vector.png",
      width: 80,
      height: 80,
      alt: "Curriculum Vector",
    },
    title: "Comprehensive Curriculum",
    description:
      "Tajweed, Hifz, Arabic grammar, and Islamic studies for all ages and levels.",
  },
];

const MasterYourSkills = () => {
  return (
    <React.Fragment>
      <section
        aria-describedby="master-your-skills-section"
        className="py-10 sm:py-16 bg-white"
      >
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="top-content"
              className="flex flex-col items-center justify-center max-w-4xl mx-auto mb-15"
            >
              <h6 className="px-5 py-2.5 bg-[#CFE9FA] rounded-full text-center max-w-max text-base font-medium text-neutral-800 mb-8">
                Master Your Skills with the Best Online Courses
              </h6>

              <h3 className="text-3xl sm:text-5xl font-bold text-neutral-900 text-center uppercase leading-snug mb-5">
                Path to Wisdom and Barakah
              </h3>

              <p className="text-lg sm:text-2xl font-normal text-neutral-800 text-center">
                Encourage the thirst for knowledge and watch minds bloom, as
                seeking knowledge brings you closer to Allah.
              </p>
            </div>

            <div
              aria-describedby="content-wrapper"
              className="grid grid-cols-1 md:grid-cols-2 gap-x-15 gap-y-12"
            >
              <div
                aria-describedby="features-column"
                className=" flex flex-col gap-y-7.5 items-start"
              >
                {FEATURES.map((feat, index) => (
                  <div
                    key={index}
                    aria-describedby="feature-box"
                    className="bg-[#EDF6FF] py-7.5 px-5 border border-[#DDEEFF] flex items-start flex-col gap-y-5 rounded-xl"
                  >
                    <div
                      aria-describedby="title"
                      className="flex items-center gap-x-4"
                    >
                      <Image
                        src={feat.image.url}
                        width={feat.image.width}
                        height={feat.image.height}
                        alt={feat.image.alt}
                        className="w-10 aspect-square"
                      />
                      <h4 className="text-xl font-bold text-neutral-800">
                        {feat.title}
                      </h4>
                    </div>

                    <p className="text-lg font-normal text-neutral-700 ">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>

              <div
                aria-describedby="call-req-form-column"
                className="bg-regal-blue-500 sm:py-10 py-5 sm:px-12 md:px-5 lg:px-12 px-5 rounded-2xl"
              >
                <div aria-describedby="form-title" className="flex items-center justify-center gap-x-2.5 mb-7.5">
                  <MdPhoneCallback className="text-4xl text-white shrink-0 grow-0 basis-auto"/>
                  <h3 className="text-xl sm:text-3xl font-bold text-left text-white">Request for Call Back...</h3>
                </div>

                <div aria-describedby="req-form-wrapper">
                  <ReqForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default MasterYourSkills;
