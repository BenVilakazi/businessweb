import { aboutUsImgOne } from "@/assets";
import Image from "next/image";
import React from "react";

const Designing = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between items-center gap-32 px-10 pb-10">
      <div className="w-full mdl:w-1/2">
        <Image
          className="w-80 mdl:w-full object-cover"
          src={aboutUsImgOne}
          alt="aboutUsImgOne"
        />
      </div>
      <div className="w-full mdl:w-1/2 flex flex-col gap-10">
        <div className="font-titleFont w-full mdl:w-5/6">
          <h4 className="text-secondaryColor uppercase text-sm tracking-[4px] mb-2">
            Designing website
          </h4>
          <h2 className="text-4xl mdl:text-[45px] font-semibold tracking-[2px] leading-[45px]">
            We are Designing UI using Figma.
          </h2>
        </div>
        <div>
          <div className="flex flex-col gap-8">
            <div className="flex gap-10 mdl:w-4/5">
              <span className="font-titleFont relative font-normal border-b border-b-borderColor before:w-[1px] before:h-[7px] before:bg-borderColor before:inline-block before:left-0 before:bottom-0 before:absolute h-7 w-20 px-2">
                01
              </span>
              <p className="text-base text-darkText">
              Comprehensive Web Development: We specialize in crafting dynamic and responsive websites tailored to your unique needs. From stunning design to seamless functionality, our experienced team ensures your online presence stands out and performs flawlessly.
              </p>
            </div>
            <div className="flex gap-10 mdl:w-4/5">
              <span className="font-titleFont relative font-normal border-b border-borderColor before:w-[1px] before:h-[7px] before:bg-borderColor before:inline-block before:left-0 before:bottom-0 before:absolute h-7 w-20 px-2">
                02
              </span>
              <p className="text-base text-darkText">
              Holistic Online Marketing Solutions: Elevate your brand with our strategic online marketing services. From SEO and content creation to social media management and email campaigns, we employ a data-driven approach to maximize your online visibility and drive measurable results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Designing;
