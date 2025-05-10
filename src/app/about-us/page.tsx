import Image from "next/image";
import React from "react";
import StudentSays from "./StudentSays";
import MasterYourSkills from "./MasterYourSkills";
import TrialClassSection from "./TrialClassSection";
import { FaqSection } from "@/components/homepage";

const AboutUsPage = () => {
  return (
    <React.Fragment>
      <div aria-describedby="about-us-page">
        <section
          aria-describedby="page-hero-section"
          className="py-10 sm:py-24 bg-regal-blue-500 relative z-[1] overflow-hidden
          before:absolute before:-z-[1] before:w-80 before:h-80 before:rounded-full before:bg-regal-blue-400 before:blur-[150px] before:-bottom-1/2 before:-left-24
          after:absolute after:-z-[1] after:w-80 after:h-80 after:rounded-full after:bg-regal-blue-400 after:blur-[150px] after:-top-1/2 after:-right-24
          "
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="content-wrapper"
                className="mx-auto max-w-4xl flex flex-col gap-y-8 items-center justify-center"
              >
                <h1 className="text-4xl sm:text-6xl font-bold text-center text-white">
                  About US
                </h1>

                <p className="text-base sm:text-xl font-normal text-white text-center">
                  We help you learn the Quran, understand Arabic, and live
                  Islamic teachings through easy, fun lessons that strengthen
                  your faith and bring you closer to Allah.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-describedby="who-we-are-section"
          className="py-10 sm:py-17 bg-[#EDF6FF]"
        >
          <div className="container">
            <div aria-describedby="main-wrapper">
              <div
                aria-describedby="top-text"
                className="flex items-center justify-center max-w-5xl mx-auto mb-12"
              >
                <p className="text-base sm:text-xl font-normal text-neutral-700 text-center">
                  At Bayyinah Academy, we are passionate about making Quranic
                  education accessible, engaging, and transformative for
                  everyone. Our mission is to help you connect deeply with the
                  Quran, learn Arabic, and understand Islamic teachings in a way
                  that inspires faith and action. Join us on this journey of
                  knowledge and spiritual growth.
                </p>
              </div>

              <div aria-describedby="box-wrapper" className="space-y-5">
                <div
                  aria-describedby="content-box"
                  className="flex items-center  gap-y-12 bg-white p-5 sm:p-10 rounded-2xl flex-col
                md:flex-row lg:gap-x-16 md:gap-x-8
                "
                >
                  <div
                    aria-describedby="left-column"
                    className="flex items-start flex-col gap-y-6 basis-1/2"
                  >
                    <h3 className="text-3xl sm:text-4xl font-bold text-neutral-800">
                      Who are we!
                    </h3>
                    <p className="text-lg sm:text-2xl text-neutral-700 font-normal">
                      We are a global online academy founded by passionate
                      educators and Islamic scholars, dedicated to making
                      Quranic education accessible and impactful for students
                      worldwide.
                    </p>
                  </div>

                  <div aria-describedby="right" className="basis-1/2">
                    <div
                      aria-describedby="image-wrapper"
                      className="flex items-center"
                    >
                      <Image
                        src={"/smiling-child.jpg"}
                        width={996}
                        height={664}
                        alt="smiling two child"
                        priority
                        className="aspect-video rounded-2xl object-top object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div
                  aria-describedby="content-box"
                  className="flex items-center  gap-y-12 bg-white p-5 sm:p-10 rounded-2xl flex-col
                md:flex-row lg:gap-x-16 md:gap-x-8
                "
                >
                  <div
                    aria-describedby="left-column"
                    className="flex items-start flex-col gap-y-6 basis-1/2 order-2"
                  >
                    <h3 className="text-3xl sm:text-4xl font-bold text-neutral-800">
                      What we do?
                    </h3>
                    <p className="text-lg sm:text-2xl text-neutral-700 font-normal">
                      We offer structured online courses in Quran recitation,
                      Tajweed, Hifz, Arabic, and Islamic studies for all ages
                      and levels, with flexible scheduling.
                    </p>
                  </div>

                  <div aria-describedby="right" className="basis-1/2 order-1">
                    <div
                      aria-describedby="image-wrapper"
                      className="flex items-center"
                    >
                      <Image
                        src={"/studying-online.jpg"}
                        width={900}
                        height={643}
                        alt="studying on online"
                        priority
                        className="aspect-video rounded-2xl object-top object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div
                  aria-describedby="features-card-wrapper"
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7"
                >
                  <div
                    aria-describedby="feature-card"
                    className="p-7 sm:p-10 rounded-2xl flex items-start flex-col gap-y-5 bg-regal-blue-500 basis-1/2"
                  >
                    <h4 className="text-3xl sm:text-4xl font-bold text-white">
                      Mission & Purpose
                    </h4>
                    <p className="text-lg sm:text-2xl font-normal text-white">
                      Our mission is to help people worldwide understand the
                      Quran, strengthen their faith, and enrich their lives. We
                      make Quranic learning easy, accessible, and meaningful for
                      everyone.
                    </p>
                  </div>

                  <div
                    aria-describedby="feature-card"
                    className="p-7 sm:p-10 rounded-2xl flex items-start flex-col gap-y-5 bg-sky-blue-500 basis-1/2"
                  >
                    <h4 className="text-3xl sm:text-4xl font-bold text-white">
                      Vision
                    </h4>
                    <p className="text-lg sm:text-2xl font-normal text-white">
                      A world where every Muslim, regardless of location, can
                      understand and live by the Quran. Through our efforts, we
                      aim to build a global community united by knowledge and
                      faith.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <StudentSays />
        <MasterYourSkills />
        <TrialClassSection />
        <FaqSection />
      </div>
    </React.Fragment>
  );
};

export default AboutUsPage;
