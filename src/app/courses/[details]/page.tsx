import { Button } from "@/components/ui/button";
import { BadgeCheck, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

import {
  CourseContentDataTypes,
  CourseDescriptionTypes,
  CourseFeaturesTypes,
} from "@/types";
import CourseFeatureBox from "./CourseFeatureBox";
import CourseDescription from "./CourseDescription";
import CourseContentBox from "./CourseContentBox";

const COURSE_FEATURES: CourseFeaturesTypes[] = [
  {
    key: "what-you-learn",
    title: "What You'll learn",
    features: [
      {
        icon: BadgeCheck,
        label: "The correct pronunciation of Arabic letters (Makharij).",
      },
      {
        icon: BadgeCheck,
        label: "Rules of Tajweed (proper recitation of the Quran).",
      },
      {
        icon: BadgeCheck,
        label: "How to read the Quran fluently with proper rhythm and tone.",
      },
      {
        icon: BadgeCheck,
        label: "Understanding the basics of Arabic phonetics.",
      },
      {
        icon: BadgeCheck,
        label: "Transition from basic reading to advanced Quranic recitation",
      },
      {
        icon: BadgeCheck,
        label:
          "Memorization of selected Quranic verses (optional, depending on the course).",
      },
      {
        icon: BadgeCheck,
        label: "Developing confidence in reading the Quran independently.",
      },
    ],
  },
  {
    key: "requirements",
    title: "Requirements",
    features: [
      {
        icon: BadgeCheck,
        label:
          "No prior knowledge of Arabic or Quranic reading is required (for beginners).",
      },
      {
        icon: BadgeCheck,
        label: "A copy of the Quran (Mushaf) for practice.",
      },
      {
        icon: BadgeCheck,
        label: "A device with internet access (if the course is online",
      },
      {
        icon: BadgeCheck,
        label: "Commitment to regular practice and attendance.",
      },
      {
        icon: BadgeCheck,
        label: "A willingness to learn and improve recitation skills.",
      },
    ],
  },
  {
    key: "who-this-for",
    title: "Who this Course is for",
    features: [
      {
        icon: BadgeCheck,
        label:
          "Beginners who have little to no experience in reading the Quran.",
      },
      {
        icon: BadgeCheck,
        label:
          "Individuals who want to improve their Quranic recitation skills.",
      },
      {
        icon: BadgeCheck,
        label: "Parents who want to teach their children proper Quran reading.",
      },
      {
        icon: BadgeCheck,
        label: "Reverts to Islam who are new to Quranic Arabic.",
      },
      {
        icon: BadgeCheck,
        label: "Anyone interested in mastering Tajweed and Quranic fluency.",
      },
    ],
  },
];

const COURSE_DESCRIPTION_DATA: CourseDescriptionTypes = {
  title: "Description",
  content:
    "This course is designed to take students from a beginner level to an advanced level in Quranic reading. It focuses on mastering the fundamentals of Quranic Arabic, including proper pronunciation, Tajweed rules, and fluency in recitation. Whether you're a complete beginner or someone looking to refine your skills, this course provides a structured approach to help you achieve mastery in Quran reading. By the end of the course, you'll be able to read the Quran with confidence, accuracy, and beauty.",
};

const COURSE_CONTENT_DATA: CourseContentDataTypes = {
  title: "Course Content",
  key: "curriculum",
  lectures: [
    {
      key: "intro",
      title: "Introduction to Quranic Arabic",
      items: [
        { label: "Introduction", duration: "4 min", type: "video" },
        { label: "Hieriki design", duration: "2 min", type: "video" },
        { label: "Basic Visual design", duration: "6 min", type: "video" },
      ],
      meta: {
        totalDuration: "40 min",
        totalLectures: "6 Lectures",
      },
    },
    {
      key: "basis-quran",
      title: "Basic Quran Reading",
      items: [
        { label: "Introduction", duration: "4 min", type: "video" },
        { label: "Hieriki design", duration: "2 min", type: "video" },
        { label: "Basic Visual design", duration: "6 min", type: "video" },
        { label: "Ayatul Qursi", duration: "6 min", type: "video" },
      ],
      meta: {
        totalDuration: "60 min",
        totalLectures: "9 Lectures",
      },
    },
    {
      key: "intermediate",
      title: "Intermediate Quran Reading",
      items: [
        { label: "Introduction", duration: "4 min", type: "video" },
        { label: "Hieriki design", duration: "2 min", type: "video" },
        { label: "Basic Visual design", duration: "6 min", type: "video" },
        { label: "Ayatul Qursi", duration: "4 min", type: "video" },
         { label: "Sura Aklash", duration: "1 min", type: "video" },
      ],
      meta: {
        totalDuration: "120 min",
        totalLectures: "20 Lectures",
      },
    },
  ],
};

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
                  <div
                    aria-describedby="course-features-box-wrapper"
                    className="space-y-8"
                  >
                    <CourseDescription data={COURSE_DESCRIPTION_DATA} />
                    <CourseFeatureBox data={COURSE_FEATURES} />
                    <CourseContentBox data={COURSE_CONTENT_DATA} />
                  </div>
                </div>
                <div
                  aria-describedby="right-column"
                  className="shrink-0 grow-0 basis-auto w-105"
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
