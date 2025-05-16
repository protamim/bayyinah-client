import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import React from "react";

const CoursePriceCard = () => {
  return (
    <React.Fragment>
      <div
        aria-describedby="price-card"
        className="sm:py-9 py-6 sm:px-6 px-3 rounded-2xl bg-white border border-[#ECECEC]"
      >
        <div
          aria-describedby="card-header"
          className="flex items-center gap-5 justify-between mb-6 sm:mb-12"
        >
          <h4
            aria-describedby="price"
            className="text-4xl sm:text-5xl text-neutral-900 font-bold flex items-center gap-2"
          >
            $75 <del className="text-xl sm:text-3xl font-normal text-[#7C8997]">$750</del>
          </h4>
          <Button
            variant={"secondary"}
            className="rounded-full text-base sm:text-xl hover:bg-yellow-500 font-normal"
          >
            3 Days Left
          </Button>
        </div>

        <div
          aria-describedby="course-actions"
          className="flex items-start w-full flex-col gap-y-3 mb-3"
        >
          <Button className="w-full text-lg sm:text-xl">Add to Card</Button>
          <Button
            variant={"outline"}
            className="w-full border-regal-blue-500 hover:bg-white text-regal-blue-500 hover:border-regal-blue-200 hover:text-regal-blue-500 text-lg sm:text-xl"
          >
            Buy Now
          </Button>
        </div>

        <div
          aria-describedby="label"
          className="flex items-center gap-2 justify-center"
        >
          <span className="flex shrink-0 grow-0 basis-auto">
            <BadgeCheck className="fill-black text-white" />
          </span>
          <p className="text-sm font-normal text-neutral-800">30 Day money back guarantee</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoursePriceCard;
