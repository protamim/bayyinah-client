import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { IconQuote } from "./svgIcons";

const FeedbackFromStudents = () => {
  return (
    <React.Fragment>
      <section
        aria-describedby="feedback-from-students-section"
        className="sm:pt-16 pt-10 pb-12 md:pb-20 lg:pb-12 bg-white"
      >
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="top-content"
              className="flex items-center justify-center flex-col gap-y-8 max-w-4xl mx-auto mb-14 sm:mb-24"
            >
              <h6 className="px-5 text-base font-medium text-neutral-800 text-center py-2.5 bg-[#CFE9FA] flex items-center justify-center rounded-full w-max border border-[#C1DDEF]">
                FEEDBACK FROM OUR STUDENTS
              </h6>
              <h3 className="text-3xl sm:text-5xl font-bold text-neutral-800 text-center leading-snug sm:leading-tight">
                DISCOVER WHY STUDENTS LOVE LEARNING WITH US
              </h3>
            </div>

            <div
              aria-describedby="students-feedback-carousel-wrapper"
              className="relative flex items-start flex-col lg:flex-row"
            >
              <div
                aria-describedby="placeholder-images-wrapper"
                className="flex items-center h-[414px] gap-x-3 overflow-hidden"
              >
                <Image
                  src={"/placeholder-muslim-boy.png"}
                  width={540}
                  height={1242}
                  alt="muslim boy placeholder"
                  className="w-44 h-full flex"
                />

                <Image
                  src={"/muslim-man.png"}
                  width={540}
                  height={1242}
                  alt="muslim man placeholder"
                  className="w-44 h-full flex"
                />

                <Image
                  src={"/muslim-guardian.png"}
                  width={1020}
                  height={1242}
                  alt="muslim man placeholder"
                  className="w-[340px] h-full flex"
                />
              </div>

              <div
                aria-describedby="carousel"
                className="w-full -mt-28 lg:w-auto lg:-ml-11 lg:-mt-9"
              >
                <Carousel
                  className="w-full lg:w-[480px] shadow-lg rounded-2xl"
                  opts={{ align: "center", dragFree: true }}
                >
                  <CarouselContent>
                    {Array.from({ length: 10 }).map((_, index) => (
                      <CarouselItem key={index}>
                        <div
                          aria-describedby="feedback-card-item"
                          className="bg-white p-4 sm:p-9 rounded-2xl border border-[#EDEDED] flex flex-col items-start justify-center gap-y-9"
                        >
                          <div
                            aria-describedby="feedback-author"
                            className="flex items-center justify-between gap-x-6 w-full"
                          >
                            <div
                              aria-describedby="left-column"
                              className="flex items-center gap-x-4"
                            >
                              <div
                                aria-describedby="image-wrapper"
                                className="w-16 flex items-center"
                              >
                                <Image
                                  src={"/muslim-guardian.png"}
                                  width={1020}
                                  height={1242}
                                  alt="muslim man placeholder"
                                  className="aspect-square rounded-full object-cover object-top"
                                />
                              </div>

                              <div className="flex items-start flex-col gap-y-0.5">
                                <h5
                                  aria-describedby="name"
                                  className="text-lg sm:text-xl font-semibold text-neutral-800"
                                >
                                  Tom Nguyen
                                </h5>
                                <p
                                  aria-describedby="designation"
                                  className="text-base sm:text-lg font-normal text-neutral-700"
                                >
                                  Student of arabic
                                </p>
                              </div>
                            </div>
                            <div
                              aria-describedby="right-column"
                              className="flex items-center justify-center shrink-0 grow-0 basis-auto text-4xl text-[#DDDBE2]"
                            >
                              <IconQuote />
                            </div>
                          </div>

                          <div aria-describedby="review-text">
                            <p className="text-xl sm:text-2xl font-normal text-neutral-900">
                              My daughter's confidence in reading the Quran has
                              soared -thanks to the supportive teachers!
                            </p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <div
                    aria-describedby="carousel-navigation-wrapper"
                    className="absolute top-full w-2xs translate-y-4 md:translate-y-10 xl:translate-y-16 left-1/2 -translate-x-1/2 z-40 flex items-center gap-x-3"
                  >
                    <CarouselPrevious className="static translate-0 shadow-lg" />
                    <CarouselDots className="flex-1 mt-0" />
                    <CarouselNext className="static translate-0 shadow-lg" />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FeedbackFromStudents;
