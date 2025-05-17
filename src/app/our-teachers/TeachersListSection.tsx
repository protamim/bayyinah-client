import Image from "next/image";
import React from "react";

const TeachersListSection = () => {
  return (
    <React.Fragment>
      <section
        aria-describedby="teachers-lists-section"
        className="sm:py-20 py-10 bg-neutral-100"
      >
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="top-content"
              className="flex flex-col items-center justify-center gap-y-10 mb-8 sm:mb-16"
            >
              <h6 className="py-2.5 px-5 rounded-full bg-[#CFE9FA] border border-[#C1DDEF] text-center text-base font-medium text-neutral-800 max-w-max">
                Teachers
              </h6>
              <h3 className="text-4xl uppercase text-center sm:text-5xl font-bold text-neutral-800 leading-snug sm:leading-snug">
                Some more Teachers
              </h3>
            </div>

            <div
              aria-describedby="teachers-card-wrapper"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  aria-describedby="teacher-card"
                  className="bg-white p-10 rounded-2xl flex flex-col gap-y-6 items-center justify-center"
                >
                  <div aria-describedby="image-wrapper" className="w-32 flex">
                    <Image
                      src={"/muslim-guardian.png"}
                      width={1020}
                      height={1242}
                      alt="guardian photo"
                      priority
                      className="aspect-square rounded-full object-cover object-top"
                    />
                  </div>

                  <h4 className="text-2xl text-center sm:text-3xl font-bold text-neutral-900">
                    Raidah F. Gauri
                  </h4>
                  <p className="text-xl font-normal text-neutral-700">
                    Quran Teacher
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TeachersListSection;
