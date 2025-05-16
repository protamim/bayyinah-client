import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const CourseDetailsHero = () => {
  return (
    <React.Fragment>
      <div aria-describedby="course-details-hero" className="max-w-3xl">
        <div aria-describedby="course-detail" className="mb-6 sm:mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-snug sm:leading-snug">
            Mastery in Quran Reading
          </h1>

          <p className="text-base sm:text-xl font-normal text-white mb-8">
            This course takes students from beginner to advanced Quranic
            reading, focusing on pronunciation, Tajweed, and fluency. By the
            end, you'll read the Quran confidently, accurately, and beautifully.
          </p>

          <Button variant={"secondary"}>Get Started</Button>
        </div>

        <div
          aria-describedby="course-meta"
          className="flex items-center gap-3 flex-wrap"
        >
          <div aria-describedby="ratings" className="flex items-center gap-2">
            <span
              aria-describedby="points"
              className="text-base font-semibold text-white"
            >
              4.8
            </span>
            <span aria-describedby="stars" className="flex items-center gap-1">
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
            <p className="text-base font-bold text-white">616,029 Students</p>
          </div>

          <div
            aria-describedby="author"
            className="flex items-center gap-3 md:ml-5"
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
              className="flex-1 flex flex-col gap-1 items-start "
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
    </React.Fragment>
  );
};

export default CourseDetailsHero;
