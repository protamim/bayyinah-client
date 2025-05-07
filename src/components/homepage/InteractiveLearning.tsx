import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const LEARNING_STEP = [
  {
    title: "Browse Our Courses",
    shortDescription: "Explore & Choose from Our Interactive Courses Today!",
  },
  {
    title: "Purchase Quickly and Securely",
    shortDescription:
      "Fast, easy, and fully protected - start learning in no time!",
  },
  {
    title: "Start Learning Right Away!",
    shortDescription:
      "You're all set! Enjoy seamless access to your course anytime, anywhere.",
  },
];

const InteractiveLearning = () => {
  return (
    <React.Fragment>
      <section
        aria-describedby="interactive-learning-section"
        className="pt-20 bg-regal-blue-500"
      >
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="top-content"
              className="flex items-center justify-center flex-col gap-y-8 mb-20"
            >
              <h6 className="flex items-center justify-center py-2.5 px-5 rounded-full bg-[#155699] border border-[#1E63AA] text-base font-medium text-white text-center w-max">
                Progress
              </h6>
              <h3 className="text-5xl text-white font-bold text-center">
                LET'S STEP INTO INTERACTIVE LEARNING
              </h3>
            </div>

            <div
              aria-describedby="section-content-wrapper"
              className="flex items-end justify-between gap-x-14 gap-y-8"
            >
              <div aria-describedby="left-column" className="pb-16">
                <div
                  aria-describedby="content-box-wrapper"
                  className="space-y-8"
                >
                  {LEARNING_STEP.map((step, index) => (
                    <div
                      key={index}
                      aria-describedby="content-box"
                      className={cn(
                        "bg-white py-6 px-5 flex items-center gap-x-2 rounded-xl rounded-tr-4xl max-w-[29.68rem]",
                        index === 0 && "ml-36",
                        index === 1 && "ml-14 max-w-[32rem]",
                        index === 2 && 'max-w-[31rem]'
                      )}
                    >
                      <div aria-describedby="count-column">
                        <h5 className="text-yellow-500 text-5xl font-semibold">
                          0{index + 1}
                        </h5>
                      </div>
                      <div
                        aria-describedby="content-column"
                        className="flex items-start flex-col gap-y-1"
                      >
                        <h4 className="text-2xl font-semibold text-neutral-900">
                          {step.title}
                        </h4>
                        <p className="text-lg font-medium text-neutral-500">
                          {step.shortDescription}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div aria-describedby="right-column">
                <div
                  aria-describedby="image-wrapper"
                  className="max-w-[31.25rem] flex items-center"
                >
                  <Image
                    src={"/interactive-learning.png"}
                    width={1499}
                    height={1569}
                    alt="Interactive learning in bayyinah"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default InteractiveLearning;
