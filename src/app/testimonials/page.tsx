import PageHeroSection from "@/components/common/PageHeroSection";
import { FaqSection } from "@/components/homepage";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialsPages = () => {
  return (
    <React.Fragment>
      <div aria-describedby="testimonials-page">
        <PageHeroSection
          title="Testimonials"
          description="Feedback from our Students Find the right course for you."
        />

        <section
          aria-describedby="reviews-section"
          className="py-10 sm:py-20 bg-white"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="reviews-card-wrapper"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 sm:mb-20"
              >
                {Array.from({ length: 9 }).map((_, index) => (
                  <div
                    key={index}
                    aria-describedby="review-card"
                    className="p-5 border border-[#E6E6E6] rounded-2xl"
                  >
                    <span
                      aria-describedby="quote"
                      className="border border-[#E7EAE9] flex items-center justify-center p-4 rounded-full max-w-max text-[#C0D0E1] text-2xl mb-4"
                    >
                      <FaQuoteLeft />
                    </span>

                    <p
                      aria-describedby="review-text"
                      className="text-lg font-normal text-neutral-700 mb-5"
                    >
                      My daughter's confidence in reading the Quran has
                      soared—thanks to the supportive teachers!
                    </p>

                    <div
                      aria-describedby="author"
                      className="flex items-center gap-3"
                    >
                      <div
                        aria-describedby="image"
                        className="w-16 flex max-w-max shrink-0 grow-0 basis-auto"
                      >
                        <Image
                          src={"/review-author.png"}
                          width={171}
                          height={154}
                          alt="review author"
                          priority
                          className="aspect-square object-cover object-top rounded-full bg-[#CFE3F8]"
                        />
                      </div>

                      <div className="flex-1 flex flex-col gap-y-1 items-start">
                        <h5 className="text-base font-bold text-neutral-900">
                          Jerome Bell
                        </h5>
                        <p className="text-sm font-normal text-neutral-600">
                          Malaysia
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                aria-describedby="show-all"
                className="w-full flex items-center justify-center flex-col"
              >
                <Button>Show More Reviews</Button>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-describedby="book-trial-section"
          className={cn(
            "bg-regal-blue-500 py-10 sm:py-16 relative overflow-hidden",
            // big shape
            "before:absolute before:z-[2] before:w-[450] before:h-[450] before:bg-[#0C4681] before:rounded-full before:top-full before:-right-40 before:-translate-y-20",
            // small shape
            "after:absolute after:z-[2] after:w-[450px] after:h-[450px] after:top-full after:-right-4 after:-translate-y-8 after:bg-[#0D4B89] after:rounded-full"
          )}
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="content-wrapper"
                className="flex items-center justify-center flex-col gap-y-5 mx-auto relative z-[5]"
              >
                <h3 className="text-3xl sm:text-5xl font-bold text-white text-center leading-snug">
                  Master your tajweed & makhraj for flawless Quranic recitation
                  with expert guidance
                </h3>

                <p className="text-base sm:text-xl font-normal text-white text-center">
                  Let’s get started!
                </p>

                <div aria-describedby="action-btn" className="mt-5">
                  <Button variant={"secondary"}>Book a Free Trial Lession</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FaqSection />
      </div>
    </React.Fragment>
  );
};

export default TestimonialsPages;
