"use client";
import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import TitleBanner from "@/ui/TitleBanner";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BiChevronDown } from "react-icons/bi";

const faqData = [
  {
    _id: "01",
    title: "What services do you offer?",
    subTitle:
      "We offer a range of services including website design and development, e-commerce solutions, custom web applications, content management systems (CMS), website maintenance, and SEO Optimization",
  },
  {
    _id: "02",
    title: "How much does a website cost?",
    subTitle:
      "The cost of a website varies depending on the complexity, features, and design requirements. We offer different pricing packages to accomodate various bedgets.",
  },
  {
    _id: "03",
    title: "How long does it take to build a website?",
    subTitle:
      "The timeline for building a website depends on the project's scope and complexity. On average, a standard website can take anywhere from 4 to 12 weeks to complete.",
  },
  {
    _id: "04",
    title: "Do you provide website maintenance and support?",
    subTitle:
      "Yes, we offer ongoing website maintenance and support services to ensure your website remains secure, up-to-date, and fully functional",
  },
  {
    _id: "05",
    title: "What is digital marketing, and how can it benefit my small business?",
    subTitle:
      "Digital marketing promotes your business online, increasing visibility and engagement. It drives sales by connecting with your target audience through platforms like SEO, social media and email",
  },
  { 
    _id: "06",
    title: "How long does it take to see results from digital marketing efforts?",
    subTitle:
     "SEO takes 3-6 months for results, PPC delivers immediate traffic, and social media success varies but can show impact in weeks. Combining strategies often yields the best outcomes."
  },
  {
     _id: "07",
     title: "What is the difference between SEO and PPC, and which one is better for my business",
     subTitle:
     "SEO is cost-effective with long-term results, while PPC delivers instant traffic at a cost. The right choice depends on your goal, but a combination is often ideal for growth."
  },
  {
     _id: "08",
     title: "Can you help with both website development and ongoing digital marketing?",
     subTitle:
     "Yes, we create optimized websites and povide ongoing digital marketing (SEO, social media, PPC) to seamlessly grow your online presence and drive consistent traffic."
  },
];

const Faq = () => {
  return (
    <div className="w-full">
      <TitleBanner
        subtitle="Explore the Features"
        title="Frequently asked questions"
      />
      <div className="max-w-screen-2xl mx-auto flex flex-col mdl:flex-row justify-between gap-10 pb-20 pt-5 px-4">
        <div className="w-full mdl:w-3/4 flex flex-col gap-6">
          {/* ====================== Question 01 start here ======================== */}
          <div className="w-full flex flex-col gap-4">
            {faqData?.map((item) => (
              <Disclosure
                key={item?._id}
                as="div"
                className="p-6 hover:cursor-pointer"
                defaultOpen={false}
              >
                <DisclosureButton className="group relative flex w-full items-center justify-between">
                  <p
                    className={`absolute left-0 -top-10 w-full h-auto px-3 py-1 text-sm group-hover:text-white group-data-[open]:text-secondaryColor text-left duration-300 `}
                  >
                    {item?._id}
                    <span
                      className={`w-full h-[.5px] absolute left-0 bottom-0 group-hover:bg-secondaryColor group-data-[open]:bg-secondaryColor duration-500 bg-gray-500`}
                    ></span>
                    <span
                      className={`w-[1px] h-[10px] absolute left-0 bottom-0 group-hover:bg-secondaryColor group-data-[open]:bg-secondaryColor duration-500 bg-gray-500`}
                    ></span>
                  </p>

                  <span className="text-lg font-semibold text-white/80 group-data-[open]:text-white">
                    {item?.title}
                  </span>
                  <BiChevronDown className="size-6 fill-white/70 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180" />
                </DisclosureButton>
                <DisclosurePanel className="mt-2 text-sm/5 text-white/80 tracking-wide leading-6">
                  {item?.subTitle}
                </DisclosurePanel>
              </Disclosure>
            ))}
          </div>
          {/* ====================== Question 01 end here ========================== */}
        </div>
        <div className="w-full mdl:w-1/4 font-titleFont">
          <h3 className="font-titleFont text-2xl underline underline-offset-4 decoration-[1px] decoration-secondaryColor">
            Contact Info
          </h3>
          <div className="mt-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h4 className="text-lg uppercase">Kwa-Zulu Natal :</h4>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <FaHome />
                </span>
                Newscastle, Kwa-Zulu Natal
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <MdMarkEmailUnread />
                </span>
                percy@codedomain.co.za
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <BsPhoneFill />
                </span>
                +27 71399 2101
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <IoLogoWhatsapp />
                </span>
                +27 63 977 5983
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-lg uppercase">Roodepoort :</h4>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <FaHome />
                </span>
                Roodepoort, Gauteng
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <MdMarkEmailUnread />
                </span>
                ben@codedomain.co.za
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <BsPhoneFill />
                </span>
                +27 71399 2101
              </p>
              <p className="flex items-center gap-3 text-darkText hover:text-white hover:cursor-pointer transition-hover duration-300">
                <span className="text-secondaryColor text-lg">
                  <IoLogoWhatsapp />
                </span>
                +27 63 977 5983
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
