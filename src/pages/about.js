import React, { useEffect, useRef } from "react";
import Image from "next/image";

import Head from "next/head";
import AnimatedText from "@/component/AnimatedText";
import Layout from "@/component/Layout";

import { useMotionValue, useSpring, useInView } from "framer-motion";
import profilePic1 from "../../public/images/profile/profilePic1.png";

import Skills from "@/component/Skills";
import Experience from "@/component/Experience";
import Education from "@/component/Education";
import TransitionEffect from "@/component/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Rashmi | About page</title>
        <meta name="description" content="about page" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout classname="pt-16">
          <AnimatedText
            text="Passion is the heartbeat of purposeful existence."
            classname="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 "
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>

              <p className="font-medium">
                - Hello, I am Rashmi Hiremath, a tech enthusiast with a diverse
                skill set spanning technology, communication, and creative
                pursuits.
              </p>

              <p className="my-4 font-medium">
                - Outside the tech realm, I enjoy sketching Mandala art,
                singing, and playing chess.
              </p>

              <p className="font-medium">
                - Recently, I have begun a new professional journey as a Graduate
                Engineer Trainee at Continental in Bengaluru. Thrilled to be
                part of this leading automotive company, I am eager to delve into
                the dynamic world of automotive engineering. Excited about
                leveraging my skills and exploring new horizons in the dynamic
                world of technology.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic1}
                alt="Codebucks"
                className="w-full h-auto rounded-2xl"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-center justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-center justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />
                </span>

                <h2 className="text-xl text-center font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Participated Hackathons
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />
                </span>

                <h2 className="text-xl items-center text-center font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed and one patent approved.
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />
                </span>

                <h2 className="text-xl text-center font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  months of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
