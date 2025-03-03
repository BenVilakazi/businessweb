"use client";
import React, { useState } from "react";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { RiBarcodeFill, RiCodeSSlashFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { motion } from "framer-motion";
import TitleBanner from "@/ui/TitleBanner";
import ServicesDetails from "@/ui/ServicesDetails";

const servicesData = [
  {
    no: "01",
    title: "Single Page Website",
    startingAmt: "2499.90",
    detailsOne: "Fully designed components",
    detailsTwo: "Highly Responsive",
    detailsThree: "Single page Application",
    detailsFour: "Source code available",
    detailsFive: "Deploy anywhere you want",
  },
  {
    no: "02",
    title: "Multi Page Website(No CMS)",
    startingAmt: "3499.90",
    detailsOne: "Fully designed components",
    detailsTwo: "Highly Responsive",
    detailsThree: "Single Page Website with no CMS",
    detailsFour: "Source code available",
    detailsFive: "Deploy anywhere you want",
  },
  {
    no: "03",
    title: "MultiPage Website",
    startingAmt: "4999.00",
    detailsOne: "Fully designed components",
    detailsTwo: "Highly Responsive",
    detailsThree: "Single page Application",
    detailsFour: "Source code available",
    detailsFive: "Deploy anywhere you want",
  },
  {
    no: "04",
    title: "E-commerce website",
    startingAmt: "9999.00",
    detailsOne: "Fully designed components",
    detailsTwo: "Highly Responsive",
    detailsThree: "Single page Application",
    detailsFour: "Source code available",
    detailsFive: "Deploy anywhere you want",
  },
  {
    no: "05",
    title: "Mobile App",
    startingAmt: "Get a Quote",
    detailsOne: "Fully designed components",
    detailsTwo: "Highly Responsive",
    detailsThree: "Single page Application",
    detailsFour: "Source code available",
    detailsFive: "Deploy anywhere you want",
  },
  {
    no: "06",
    title: "SEO Optimization",
    startingAmt: "999.99",
    detailsOne: "Fully designed components",
    detailsTwo: "Highly Responsive",
    detailsThree: "Single page Application",
    detailsFour: "Source code available",
    detailsFive: "Deploy anywhere you want",
  },
];
const designData = [
  {
    no: "01",
    title: "Basic",
    startingAmt: "2499.00",
    detailsOne: "1 Platform",
    detailsTwo: "10 posts/Month",
    detailsThree: "Account Setup",
    detailsFour: "Page Optimization",
    detailsFive: "Montly Management",
  },
  {
    no: "02",
    title: "Start Up Package",
    startingAmt: "4849.99",
    detailsOne: "2 Platforms",
    detailsTwo: "3 Posts/Week",
    detailsThree: "Account Setup",
    detailsFour: "Page Optimization",
    detailsFive: "Montly Management",
  },
  {
    no: "03",
    title: "Growth Package",
    startingAmt: "8549.99",
    detailsOne: "3 Platforms",
    detailsTwo: "4 Posts/Week",
    detailsThree: "Account Setup",
    detailsFour: "Page Optimization",
    detailsFive: "Montly Management",
  },
  {
    no: "04",
    title: "Scale Package",
    startingAmt: "11 999.99",
    detailsOne: "4 Platforms",
    detailsTwo: "4 Posts/Week",
    detailsThree: "Account Setup",
    detailsFour: "Page Optimization",
    detailsFive: "Montly Management",
  },
];

const hostingData = [
  {
    no: "01",
    title: "Web Hosting",
    startingAmt: "299.99 /Month",
    detailsOne: "1 CPU",
    detailsTwo: "1 GB RAM",
    detailsThree: "20 GB SSD",
    detailsFour: "Unlimited Traffic",
    detailsFive: "Unlimited Emails",
  },
  {
    no: "02",
    title: "Web Hosting",
    startingAmt: "3599.99 /Year",
    detailsOne: "Unlimited databases",
    detailsTwo: "5 Websites",
    detailsThree: "20 GB SSD",
    detailsFour: "Unlimited Traffic",
    detailsFive: "Unlimited Emails",
  },
];

const domainData =[
  {
    no: "01",
    title: "Website Maintenance",
    startingAmt: "299p/m",
    detailsOne: "Software Updates",
    detailsTwo: "Security Monitoring",
    detailsThree: "Performance Optimization",
    detailsFour: "Regular Updates",
    detailsFive: "Content Updates"
  },
  {
    no:"02",
    title: "Websie Maintenace",
    startingAmt: "3599.00p/year",
    detailsOne: "Software Updates",
    detailsTwo: "Security Updates",
    detailsThree: "Perfomance Optimization",
    detailsFour: "SEO Optimization",
    detailsFive: "Content Updates"
  }
]

const Services = () => {
  let [development, setDevelopment] = useState(true);
  let [design, setDesign] = useState(false);
  let [domain, setDomain] = useState(false);
  let [hosting, setHosting] = useState(false);
  return (
    <div>
      <TitleBanner subtitle="Explore the opportunities" title="Our Services" />
      {/* ================================================================
                            Services components start here
       ================================================================= */}

      <div className="max-w-screen-lg mx-auto pt-32">
        <div className="grid grid-cols-1 -mt-32 mb-8 lg:mb-0 md:grid-cols-2 lgl:grid-cols-4 font-titleFont font-semibold uppercase text-lg lgl:text-base xl:text-lg px-4">
          <p
            onClick={() => {
              setDevelopment(true);
              setDesign(false);
              setDomain(false);
              setHosting(false);
            }}
            className={`${
              development
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : " hover:bg-white hover:text-primaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            <span>
              <RiCodeSSlashFill />
            </span>
            Development
          </p>
          <p
            onClick={() => {
              setDevelopment(false);
              setDesign(true);
              setDomain(false);
              setHosting(false);
            }}
            className={`${
              design
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : " hover:bg-white hover:text-primaryColor border xl:border-r-0 border-secondaryColor bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            <span>
              <SiAntdesign />
            </span>
            Marketing
          </p>
          <p
            onClick={() => {
              setDevelopment(false);
              setDesign(false);
              setDomain(true);
              setHosting(false);
            }}
            className={`${
              domain
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : " hover:bg-white hover:text-primaryColor border border-secondaryColor xl:border-r-0 bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            <span>
              <IoMdCheckmarkCircle />
            </span>
            Maintenance
          </p>
          <p
            onClick={() => {
              setDevelopment(false);
              setDesign(false);
              setDomain(false);
              setHosting(true);
            }}
            className={`${
              hosting
                ? "bg-secondaryColor text-white after:bg-secondaryColor after:w-5 after:h-5 z-10 after:inline-block after:absolute after:-bottom-2 after:rotate-45"
                : " hover:bg-white hover:text-primaryColor border border-secondaryColor bg-opacity-50"
            } flex items-center justify-center gap-3 w-full bg-primaryColor h-16 cursor-pointer relative`}
          >
            <span>
              <RiBarcodeFill />
            </span>
            Hosting
          </p>
        </div>
      </div>

      {/* ===================== Development Start here ==================== */}
      {development && (
        <motion.div
          initial={{ x: 80, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "just", stiffness: 120 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="max-w-screen-2xl mx-auto pb-20 font-titleFont flex justify-center items-center flex-1 flex-wrap gap-6 px-4"
        >
          {servicesData.map((item) => (
            <ServicesDetails
              key={item?.no}
              no={item?.no}
              title={item?.title}
              startingAmt={item?.startingAmt}
              detailsOne={item?.detailsOne}
              detailsTwo={item?.detailsTwo}
              detailsThree={item?.detailsThree}
              detailsFour={item?.detailsFour}
              detailsFive={item?.detailsFive}
            />
          ))}
        </motion.div>
      )}
      {/* ===================== Development end here ====================== */}
      {/* ===================== Design start here ========================= */}
      {design && (
        <motion.div
          initial={{ x: 80, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "just", stiffness: 120 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="max-w-screen-2xl mx-auto pb-20 font-titleFont flex justify-center items-center flex-1 flex-wrap gap-6 px-4"
        >
          {designData.map((item) => (
            <ServicesDetails
              key={item?.no}
              no={item?.no}
              title={item?.title}
              startingAmt={item?.startingAmt}
              detailsOne={item?.detailsOne}
              detailsTwo={item?.detailsTwo}
              detailsThree={item?.detailsThree}
              detailsFour={item?.detailsFour}
              detailsFive={item?.detailsFive}
            />
          ))}
        </motion.div>
      )}
      {/* ===================== Design end here =========================== */}
      {/* ===================== Domain start here ========================= */}
      {domain && (
        <motion.div
          initial={{ x: 80, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "just", stiffness: 120 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="max-w-screen-2xl mx-auto pb-20 font-titleFont flex justify-center items-center flex-1 flex-wrap gap-6 px-4"
        >
          {domainData.map((item) => (
            <ServicesDetails
              key={item?.no}
              no={item?.no}
              title={item?.title}
              startingAmt={item?.startingAmt}
              detailsOne={item?.detailsOne}
              detailsTwo={item?.detailsTwo}
              detailsThree={item?.detailsThree}
              detailsFour={item?.detailsFour}
              detailsFive={item?.detailsFive}
            />
          ))}
        </motion.div>
      )}
      {/* ===================== Domain end here =========================== */}
      {/* ===================== Hosting start here ======================== */}
      {hosting && (
        <motion.div
          initial={{ x: 80, opacity: 0.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0,
            x: { type: "just", stiffness: 120 },
            opacity: { duration: 0.5 },
            ease: "easeIn",
            duration: 0.4,
          }}
          className="max-w-screen-2xl mx-auto pb-20 font-titleFont flex justify-center items-center flex-1 flex-wrap gap-6 px-4"
        >
          {hostingData.map((item) => (
            <ServicesDetails
              key={item?.no}
              no={item?.no}
              title={item?.title}
              startingAmt={item?.startingAmt}
              detailsOne={item?.detailsOne}
              detailsTwo={item?.detailsTwo}
              detailsThree={item?.detailsThree}
              detailsFour={item?.detailsFour}
              detailsFive={item?.detailsFive}
            />
          ))}
        </motion.div>
      )}
      {/* ===================== Hosting end here ========================== */}
      {/* ================================================================
                            Services components end here
       ================================================================= */}
    </div>
  );
};

export default Services;
