import React from "react";
import Head from "next/head";
import Layout from "@/component/Layout";
import AnimatedText from "@/component/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/component/Icons";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import apsd from "../../public/images/projects/apsd.png";
import patent from "../../public/images/projects/patent.png";
import noninvasive from "../../public/images/projects/non invasive.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/component/TransitionEffect";
import PdfIcon from "@/component/Icons";

const FramerImage = motion(Image);

// ... (Existing imports)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between first-letter relative rounded-br-2xl
    rounded-3xl border border-solid border-dark  bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />
      <a
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </a>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </a>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <a href={github} target="_blank" className="w-10">
            <PdfIcon className="dark:bg-white" />
          </a>
          <a
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            sm:px-4 sm:text-base dark:bg-white dark:text-dark"
          >
            Visit Project
          </a>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4 "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
        rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />
      <a
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          style={{ height: "300px" }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </a>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base ">
          {type}
        </span>
        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl dark:text-light ">
            {title}
          </h2>
        </a>

        <div className="w-full mt-2 flex items-center justify-between">
          <a
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base dark:text-light"
          >
            Visit
          </a>
          <a href={github} target="_blank" className="w-8 md:w-6 dark:bg-light">
            <PdfIcon />{" "}
          </a>
        </div>
      </div>
    </article>
  );
};

// ... (Remaining code remains unchanged)

const projects = () => {
  return (
    <>
      <Head>
        <title>Rashmi | Project page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout classname="pt-16 ">
          <AnimatedText
            text="Unlock innovation with the key of boundless imagination."
            classname="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Preventing Center Median Accidents on Highways using nRF Module Communication between the Car 
                and Medians"
                summary="The invention addresses the danger posed by improperly built median strips, 
                designed to calm traffic but often becoming hazards. Poor visibility and the absence of 
                reflectors contribute to accidents. The solution involves communication technology between 
                cars and medians. A microcontroller in the car's infotainment system, connected to an nRF 
                module on the median, alerts the driver as they approach. For automatic cars, the system 
                adjusts speed according to transportation norms, enhancing safety on roads."
                link="https://drive.google.com/file/d/1QypbkmDEUXOEkMhSPLZn_HVjj8NL5f8k/view?usp=sharing"
                type="Featured  Project"
                img={patent}
                github="https://drive.google.com/file/d/1QypbkmDEUXOEkMhSPLZn_HVjj8NL5f8k/view?usp=sharing"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="NON-INVASIVE GLUCOSE METER"
                summary="The development and breakthrough of the new painless and stress-free non-invasive blood glucose monitoring technology and precise closed-loop drug delivery 
                system can directly benefit hundreds of millions of patients by avoiding the pain of blood 
                collection, which is very promising and practical research at present."
                link="https://drive.google.com/file/d/19H7noqc1V2ngZQPzG4r9gnubr7KQACfI/view?usp=sharing"
                type="Project"
                img={noninvasive}
                github="https://drive.google.com/file/d/19H7noqc1V2ngZQPzG4r9gnubr7KQACfI/view?usp=sharing"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="ACCIDENT PREVENTION SMART DEVICE"
                summary="A Vehicle security system is a system that combines the Internet technology, 
                GPS and GPRS technologies to track down the location of vehicles. Vehicle monitoring 
                System allows a party to locate, trace and monitor its vehicles in real time."
                link="https://drive.google.com/file/d/1WbPiyVegiQErZ7BNbhjmAcCH-MYN1vTB/view?usp=sharing"
                type="Project"
                img={apsd}
                github="https://drive.google.com/file/d/1WbPiyVegiQErZ7BNbhjmAcCH-MYN1vTB/view?usp=sharing"
              />
            </div>
            <div className="col-span-12">
              {/* <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
                link="/"
                type="Featured  Project"
                img={project1}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
                link="/"
                type="Featured  Project"
                img={project1}
                github="/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
            It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
            local currency."
                link="/"
                type="Featured  Project"
                img={project1}
                github="/"
              /> */}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
