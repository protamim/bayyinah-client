import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  IconChildGroup,
  IconDegreeBadge,
  IconQuranOpen,
  IconVectorStar,
} from "./svgIcons";

const HomeHero = () => {
  return (
    <React.Fragment>
      <section
        aria-describedby="home-hero-section"
        className="pt-20 pb-12 bg-sky-blue-200 relative overflow-hidden"
      >
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="content-wrapper"
              className="flex items-center gap-x-7 gap-y-5"
            >
              <div aria-describedby="left-column" className="basis-1/2">
                <h6 className="bg-sky-blue-300 py-2.5 px-5 rounded-full flex items-center justify-center max-w-max border border-sky-blue-400 text-neutral-900 text-base font-medium mb-8">
                  Master Quran and Arabic, Step by Step
                </h6>
                <h1 className="text-7xl font-bold text-regal-blue-500 mb-7">
                  Arabic Quran Mastery
                </h1>
                <p className="text-2xl font-normal text-regal-blue-400 mb-12">
                  Begin your journey with expert tutors and customized courses
                  for every learner.
                </p>

                <div
                  aria-describedby="btn-wrapper"
                  className="max-w-max flex items-center gap-x-3"
                >
                  <Button className="rounded-full" asChild>
                    <Link href={"#"}>Find Course</Link>
                  </Button>
                  <Button variant="outline" className="rounded-full" asChild>
                    <Link href={"#"}>Book a free trial lesson</Link>
                  </Button>
                </div>
              </div>

              <div
                aria-describedby="right-column"
                className="basis-1/2 flex items-center justify-center flex-col"
              >
                <div
                  aria-describedby="image-wrapper"
                  className="max-w-[29.5rem] w-full relative"
                >
                  <Image
                    src={"/home-hero.png"}
                    width={1433}
                    height={1519}
                    priority
                    alt="bayyinah academy hero"
                  />

                  {/* FLOATING ELEMENTS */}
                  <span
                    aria-describedby="quran-open-icon"
                    className="absolute top-12 left-0 z-[2] text-6xl flex"
                  >
                    <IconQuranOpen />
                  </span>

                  <span
                    aria-describedby="child-group-icon"
                    className="absolute bottom-20 left-5 z-[2] text-5xl"
                  >
                    <IconChildGroup />
                  </span>

                  <span
                    aria-describedby="degree-badge-icon"
                    className="absolute top-0 right-0 z-[2] text-5xl"
                  >
                    <IconDegreeBadge />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING ELEMENTS */}
        <span
          aria-describedby="floating-right"
          className="absolute right-0 z-[2] top-0 w-36 h-36 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-sky-blue-400 before:rounded-full before:-z-[1] before:blur-[60px]"
        >
          <IconVectorStar className="text-sm text-white absolute top-0 right-0 z-[2] flex" />
          <IconVectorStar className="text-sm text-white absolute top-2 right-4 z-[2] flex" />
          <IconVectorStar className="text-sm text-white absolute top-4 right-8 z-[2] flex" />
          <IconVectorStar className="text-sm text-white absolute top-7 -right-1 z-[2] flex" />
          <IconVectorStar className="text-sm text-white absolute top-10 right-3 z-[2] flex" />
        </span>

        <span
          aria-describedby="floating-left"
          className="absolute left-0 z-[2] bottom-0 w-36 h-36 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-sky-blue-400 before:rounded-full before:-z-[1] before:blur-[60px]"
        >
          <IconVectorStar className="text-sm text-white absolute bottom-0 left-0 z-[2] flex" />
          <IconVectorStar className="text-sm text-white absolute bottom-2 left-4 z-[2] flex" />
          <IconVectorStar className="text-sm text-white absolute bottom-4 left-8 z-[2] flex" />
          <IconVectorStar className="text-sm text-white absolute bottom-7 -left-1 z-[2] flex" />
          <IconVectorStar className="text-sm text-white absolute bottom-10 left-3 z-[2] flex" />
        </span>
      </section>
    </React.Fragment>
  );
};

export default HomeHero;
