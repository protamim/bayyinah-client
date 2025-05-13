import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CourseCardTypes } from "@/types";
import Image from "next/image";
import React from "react";

interface CourseCardProps {
  cardData: CourseCardTypes[];
}

const CourseCard: React.FC<CourseCardProps> = ({ cardData }) => {
  //   const [{ image, action, shortDescription, subTitle, title }] = cardData;

  return (
    <React.Fragment>
      {cardData.map((course, index) => (
        <div
          key={index}
          aria-describedby="course-card"
          className="w-full sm:px-12 md:py-10 py-8 lg:px-14 xl:px-20 px-5 flex-col bg-white rounded-2xl flex items-center gap-x-14 gap-y-8 lg:flex-row"
        >
          <div
            aria-describedby="card-column-left"
            className={cn(
              "shrink-0 grow-0 basis-auto",
              (index + 1) % 2 === 0 ? "lg:order-2" : "lg:order-1"
            )}
          >
            <div
              aria-describedby="course-image"
              className="lg:max-w-97 w-full flex"
            >
              <Image
                src={course.image.url}
                width={course.image.width}
                height={course.image.height}
                alt={course.image.alt}
                className="rounded-xl aspect-video lg:aspect-auto"
              />
            </div>
          </div>

          <div
            aria-describedby="card-column-right"
            className={cn(
              "flex-1",
              (index + 1) % 2 === 0 ? "lg:order-1" : "lg:order-2"
            )}
          >
            <span
              aria-describedby="sub-title"
              className="bg-sky-blue-200 max-w-max text-base font-medium text-neutral-800 border border-sky-blue-300 py-2.5 px-5 rounded-full flex items-center justify-center mb-6"
            >
              {course.subTitle}
            </span>

            <h3 className="text-3xl sm:text-4xl font-medium text-neutral-800 mb-5">
              {course.title}
            </h3>

            <p className="text-lg sm:text-2xl text-neutral-700 font-normal mb-8 line-clamp-2">
              {course.shortDescription}
            </p>

            <Button>{course.action.label}</Button>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default CourseCard;
