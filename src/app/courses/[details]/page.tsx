import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  BookAudio,
  CalendarClock,
  CalendarFold,
  ChartNoAxesCombined,
  CircleCheck,
  CirclePlay,
  Clock,
  FileText,
  Languages,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";
import React from "react";

import {
  CourseContentDataTypes,
  CourseDescriptionTypes,
  CourseFeaturesTypes,
  CourseHighlighDataTypes,
} from "@/types";
import CourseFeatureBox from "./CourseFeatureBox";
import CourseDescription from "./CourseDescription";
import CourseContentBox from "./CourseContentBox";
import CoursePriceCard from "./CoursePriceCard";
import CourseIncludesBox from "./CourseIncludesBox";
import CourseHighlightBox from "./CourseHighlightBox";
import CourseDetailsHero from "./CourseDetailsHero";
import GetTrialClass from "./GetTrialClass";
import { FaqSection } from "@/components/homepage";

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

const COURSE_INCLUDES = [
  {
    key: "this-course-includes",
    title: "This course includes",
    features: [
      {
        icon: CirclePlay,
        label: "4hrs 20min",
      },
      {
        icon: CalendarFold,
        label: "100 Enrolled",
      },
      {
        icon: BookAudio,
        label: "50 Lectures",
      },
      {
        icon: FileText,
        label: "Skill Level Basic",
      },
      {
        icon: Languages,
        label: "English Language",
      },
    ],
  },
];

const COURSE_HIGHLIGHT_DATA: CourseHighlighDataTypes[] = [
  {
    key: "last-update",
    label: "Last update",
    icon: Star,
    value: "8/2024",
  },
  {
    key: "level",
    label: "Level",
    icon: ChartNoAxesCombined,
    value: "Beginner",
  },
  {
    key: "enrolled-count",
    label: "Students",
    icon: Users,
    value: "616,029 Enrolled",
  },
  {
    key: "lecture-total-duration",
    label: "Class Duration",
    icon: Clock,
    value: "30-40min",
  },
  {
    key: "course-duration",
    label: "Course Duration",
    icon: CalendarClock,
    value: "4-6 Months (50 Classes)",
  },
];

const CourseDetails = () => {
  return (
    <React.Fragment>
      <div aria-describedby="course-details-page">
        <section
          aria-describedby="single-course-hero"
          className="py-12 sm:py-20 bg-regal-blue-500"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <CourseDetailsHero />
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
                className="max-w-max flex items-center flex-wrap gap-3 -mt-26 mb-16"
              >
                <CourseHighlightBox data={COURSE_HIGHLIGHT_DATA}/>
              </div>

              <div
                aria-describedby="curriculum-wrapper"
                className="flex items-start gap-8 w-full flex-col-reverse lg:flex-row"
              >
                <div aria-describedby="left-column" className="flex-1 w-full">
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
                  className="shrink-0 grow-0 basis-auto sm:w-105 max-w-full w-full sm:max-w-none lg:sticky top-3 right-0 z-[2] max-h-screen overflow-y-auto overflow-x-hidden"
                >
                  <div aria-describedby="column-wrapper" className="space-y-8">
                    <CoursePriceCard />
                    <CourseIncludesBox data={COURSE_INCLUDES} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GetTrialClass />
        <FaqSection />
      </div>
    </React.Fragment>
  );
};

export default CourseDetails;
