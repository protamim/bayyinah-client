import PageHeroSection from "@/components/common/PageHeroSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import CourseCard from "./CourseCard";
import { CourseCardTypes } from "@/types";
import { Button } from "@/components/ui/button";
import ActionSection from "./ActionSection";
import { FaqSection } from "@/components/homepage";

const COURSES_TAB_LISTS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Arabic",
    value: "arabic",
  },
  {
    label: "Quran",
    value: "quran",
  },
  {
    label: "Islamic Studies",
    value: "islamic",
  },
];

const COURSES_DATA: CourseCardTypes[] = [
  {
    image: {
      url: "/course-image-1.jpg",
      alt: "course featured image",
      height: 3046,
      width: 4096,
    },
    subTitle: "Quran Reading",
    title: "Mastery in Quran Reading",
    shortDescription:
      "Quran Reading Quran Reading Quran Reading Quran Reading Quran Reading",
    action: {
      label: "Enroll Today",
      url: "#",
    },
  },
  {
    image: {
      url: "/course-image-1.jpg",
      alt: "course featured image",
      height: 3046,
      width: 4096,
    },
    subTitle: "Quran Reading",
    title: "Quran Hifz (Memorization)",
    shortDescription:
      "Quran Reading Quran Reading Quran Reading Quran Reading Quran Reading",
    action: {
      label: "Enroll Today",
      url: "#",
    },
  },
  {
    image: {
      url: "/course-image-1.jpg",
      alt: "course featured image",
      height: 3046,
      width: 4096,
    },
    subTitle: "Quran Reading",
    title: "Arabic Language Read, Write, Talk, and Understand",
    shortDescription:
      "Quran Reading Quran Reading Quran Reading Quran Reading Quran Reading",
    action: {
      label: "Enroll Today",
      url: "#",
    },
  },
  {
    image: {
      url: "/course-image-1.jpg",
      alt: "course featured image",
      height: 3046,
      width: 4096,
    },
    subTitle: "Quran Reading",
    title: "Islamic Studies Islamic Etiquettes and Manners",
    shortDescription:
      "Quran Reading Quran Reading Quran Reading Quran Reading Quran Reading",
    action: {
      label: "Enroll Today",
      url: "#",
    },
  },
  {
    image: {
      url: "/course-image-1.jpg",
      alt: "course featured image",
      height: 3046,
      width: 4096,
    },
    subTitle: "Quran Reading",
    title: "Arabic Landuage for School Students",
    shortDescription:
      "Quran Reading Quran Reading Quran Reading Quran Reading Quran Reading",
    action: {
      label: "Enroll Today",
      url: "#",
    },
  },
];

const CoursesPage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="courses-page">
        <PageHeroSection
          title="Courses"
          description="Master Qurani readina and Arabic fluency with step-by-step lessons that build confidence and deepen your spiritual connection."
        />

        <section
          aria-describedby="courses-list"
          className="py-10 sm:py-18 bg-neutral-100"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div aria-describedby="course-list-tab">
                <Tabs defaultValue={COURSES_TAB_LISTS[0].value}>
                  <TabsList>
                    {COURSES_TAB_LISTS.map((tab) => (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="bg-white"
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {COURSES_TAB_LISTS.map((tab) => (
                    <TabsContent key={tab.value} value={tab.value}>
                      <div
                        aria-describedby="course-card-wrapper"
                        className="w-full flex flex-col items-start gap-y-8 mb-16"
                      >
                        <CourseCard cardData={COURSES_DATA}/>
                      </div>

                      <div aria-describedby="view-all" className="flex items-center justify-center">
                        <Button>View All Courses</Button>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </section>

        <ActionSection />
        <FaqSection />
      </div>
    </React.Fragment>
  );
};

export default CoursesPage;
