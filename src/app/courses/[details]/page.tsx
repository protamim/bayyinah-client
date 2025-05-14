import { Button } from "@/components/ui/button";
import { BadgeCheck, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const CourseDetails = () => {
  return (
    <React.Fragment>
      <div aria-describedby="course-details-page">
        <section
          aria-describedby="single-course-hero"
          className="py-20 bg-regal-blue-500"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div aria-describedby="top-content" className="max-w-3xl">
                <div aria-describedby="course-detail" className="mb-10">
                  <h1 className="text-5xl font-bold text-white mb-5">
                    Mastery in Quran Reading
                  </h1>
                  <p className="text-xl font-normal text-white mb-8">
                    This course takes students from beginner to advanced Quranic
                    reading, focusing on pronunciation, Tajweed, and fluency. By
                    the end, you'll read the Quran confidently, accurately, and
                    beautifully.
                  </p>

                  <Button variant={"secondary"}>Get Started</Button>
                </div>

                <div
                  aria-describedby="course-meta"
                  className="flex items-center gap-x-3"
                >
                  <div
                    aria-describedby="ratings"
                    className="flex items-center gap-2"
                  >
                    <span
                      aria-describedby="points"
                      className="text-base font-semibold text-white"
                    >
                      4.8
                    </span>
                    <span
                      aria-describedby="stars"
                      className="flex items-center gap-1"
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={index}
                          className="w-4 h-4 fill-yellow-500 text-yellow-500"
                        />
                      ))}
                    </span>
                    <span
                      aria-describedby="total-count"
                      className="text-base font-medium text-white"
                    >
                      (254,487 Ratings)
                    </span>
                  </div>

                  <div aria-describedby="total-student">
                    <p className="text-base font-bold text-white">
                      616,029 Students
                    </p>
                  </div>

                  <div
                    aria-describedby="author"
                    className="flex items-center gap-3"
                  >
                    <div
                      aria-describedby="image-wrapper"
                      className="w-10 flex shrink-0 grow-0 basis-auto"
                    >
                      <Image
                        src={"/course-author.png"}
                        width={2070}
                        height={1380}
                        alt="course author"
                        className="aspect-square rounded-full object-cover"
                      />
                    </div>

                    <div
                      aria-describedby="right-column"
                      className="flex-1 flex flex-col gap-1 items-start"
                    >
                      <p
                        aria-describedby="name"
                        className="text-xl font-medium text-white"
                      >
                        Raidah F. Gauri
                      </p>
                      <span
                        aria-describedby="profession"
                        className="text-sm font-normal text-white"
                      >
                        Quran Instructor
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-describedby="course-curriculum"
          className="py-20 bg-neutral-100"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="highlight-box-wrapper"
                className="max-w-max flex items-center gap-3 -mt-24 mb-20"
              >
                <div
                  aria-describedby="highlight-box"
                  className="bg-white py-2.5 px-4 rounded-md border border-[#E2E2E2] flex items-center gap-3 min-w-48"
                >
                  <span className="flex items-center shrink-0 grow-0 basis-auto">
                    <Star className="w-4.5 h-4.5 text-neutral-800" />
                  </span>

                  <div
                    aria-describedby="right-column"
                    className="flex items-start gap-1 flex-col"
                  >
                    <p className="text-sm font-normal text-neutral-700">
                      Last update
                    </p>
                    <span className="text-sm font-bold text-neutral-900">
                      8/2024
                    </span>
                  </div>
                </div>
              </div>

              <div
                aria-describedby="curriculum-wrapper"
                className="flex items-start gap-8 w-full"
              >
                <div aria-describedby="left-column" className="flex-1">
                  <div aria-describedby="curriculum-items-box-wrapper">
                    <div
                      aria-describedby="curriculum-item-box"
                      className="p-8 bg-white rounded-2xl border border-[#ECECEC]"
                    >
                      <h3 className="text-2xl font-medium text-neutral-900 pb-4 border-b border-neutral-200 mb-6">
                        What You'll Learn
                      </h3>

                      <ul aria-describedby="features-lists">
                        <li aria-describedby="feature-item" className="flex items-center gap-2">
                          <span className="flex shrink-0 grow-0 basis-auto">
                            <BadgeCheck className="fill-indigo-500 text-white" />
                          </span>
                          <p>
                            The correct pronunciation of Arabic letters
                            (Makharij).
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  aria-describedby="right-column"
                  className="shrink-0 grow-0 basis-auto"
                >
                  right column
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default CourseDetails;
