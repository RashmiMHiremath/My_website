import React from "react";
import Link from "next/link";
import { CircularText } from "./Icons";
import {LinkedInIcon} from "./Icons";

const HireMe = () => {
  return (
    <div
      className="inline-block absolute left-1 bottom-0 items-center justify-center overflow-hidden
    md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute sm:right-0"
    >
      <div className="w-48 h-auto flex items-center justify-center relative md:w-24">
        <CircularText
          className={"fill-dark animate-spin-slow dark:fill-sky-400"}
        />

        <Link
          href="https://www.linkedin.com/in/rashmi-hiremath-b81808223/"
          target="_blank"
          className="flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border
        border-solid border-dark w-20 h-20 rounded-full
        font-semibold hover:bg-light hover:text-dark
        transition-all duration-1000
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light
                md:w-12 md:h-12 md:text-[10px]
        "
        >
          <span style={{ fontSize: "24px" }}>
            <LinkedInIcon/>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
