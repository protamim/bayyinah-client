import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const FoundationCommitment = () => {
  return (
    <React.Fragment>
      <section
        aria-describedby="foundation-commitment-section"
        className="py-10 sm:py-20 bg-regal-blue-500"
      >
        <div className="container">
          <div aria-describedby="main-wrapper">
            <div
              aria-describedby="content-wrapper"
              className="space-y-10 sm:space-y-12"
            >
              <div
                aria-describedby="wrapper"
                className="flex items-center gap-10 justify-between flex-col lg:flex-row"
              >
                <div aria-describedby="left-column">
                  <h5 className="text-xl sm:text-3xl sm:leading-snug font-bold leading-snug text-white max-w-160">
                    This is not just a Job; it’s an opportunity to serve Allah
                    through your work, earning His blessings and rewards with
                    every task you complete.
                  </h5>
                </div>

                <div aria-describedby="right-column" className="shrink-0 grow-0 basis-auto">
                  <div
                    aria-describedby="image-wrapper"
                    className="w-full sm:w-97 flex"
                  >
                    <Image
                      src={"/charity-box.png"}
                      width={1167}
                      height={871}
                      alt="charity box"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div
                aria-describedby="wrapper"
                className="flex items-center gap-10 justify-between flex-col-reverse lg:flex-row"
              >
                <div
                  aria-describedby="left-column"
                  className="shrink-0 grow-0 basis-auto flex items-start w-full lg:w-auto"
                >
                  <div
                    aria-describedby="column-content"
                    className="space-y-10 max-w-100"
                  >
                    <h3 className="text-4xl font-bold text-white sm:text-5xl leading-snug sm:leading-snug">
                      Our Foundation Commitment
                    </h3>

                    <Button className="bg-white text-neutral-800 hover:bg-white hover:text-regal-blue-800">
                      Register Now
                    </Button>
                  </div>
                </div>

                <div
                  aria-describedby="right-column"
                  className="w-full flex items-start lg:max-w-max lg:w-auto"
                >
                  <ul
                    aria-describedby="feature-lists"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full"
                  >
                    {[
                      { labelAr: "Amanah", labelEn: "Trustworthiness" },
                      { labelAr: "Adab", labelEn: "Proper Conduct" },
                      { labelAr: "Ihsan", labelEn: "Excellence" },
                      { labelAr: "Ikhlas", labelEn: "Sincerity" },
                    ].map((item, index) => (
                      <li
                        key={index}
                        aria-describedby="list-item"
                        className="bg-white py-4 px-5 rounded-md shadow-sm flex items-center gap-3"
                      >
                        <Image
                          src={"/boom-vector.png"}
                          width={121}
                          height={121}
                          alt="boom vector"
                          priority
                          className="w-10 aspect-square"
                        />
                        <div className="flex flex-col items-start">
                          <span className="text-2xl font-normal text-neutral-700">
                            {item.labelAr}
                          </span>
                          <h6 className="text-2xl font-semibold text-neutral-700">
                            {item.labelEn}
                          </h6>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FoundationCommitment;
