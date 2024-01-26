import React, { useState } from "react";
import Head from "next/head";
import AnimatedText from "@/component/AnimatedText";
import Layout from "@/component/Layout";
import Image from "next/image";
import { motion } from "framer-motion";
import TransitionEffect from "@/component/TransitionEffect";

// Import all your drawing images
import d1 from "../../public/drawings/d1.jpg";
import d2 from "../../public/drawings/d2.jpg";
import d3 from "../../public/drawings/d3.jpg";
import d4 from "../../public/drawings/d4.jpg";
import d5 from "../../public/drawings/d5.jpg";
import d6 from "../../public/drawings/d6.jpg";
import d7 from "../../public/drawings/d7.jpg";
import d8 from "../../public/drawings/d8.jpg";
import d9 from "../../public/drawings/d9.jpg";
import d10 from "../../public/drawings/d10.jpg";
import d11 from "../../public/drawings/d11.jpg";
import d12 from "../../public/drawings/d12.jpg";
import d13 from "../../public/drawings/d13.jpg";
import d14 from "../../public/drawings/d14.jpg";
import d15 from "../../public/drawings/d15.jpg";
import d16 from "../../public/drawings/d16.jpg";
import d17 from "../../public/drawings/d17.jpg";
import d18 from "../../public/drawings/d18.jpg";
import d19 from "../../public/drawings/d19.jpg";
import d20 from "../../public/drawings/d20.jpg";
import d21 from "../../public/drawings/d21.jpg";
import d22 from "../../public/drawings/d22.jpg";
import d23 from "../../public/drawings/d23.jpg";
const drawings = [
  d1,
  d2,
  d3,
  d4,
  d5,
  d6,
  d7,
  d8,
  d9,
  d10,
  d11,
  d12,
  d13,
  d14,
  d15,
  d16,
  d17,
  d18,
  d19,
  d20,
  d21,
  d22,
  d23,
];

const FramerImage = motion(Image);

const Article = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Head>
        <title>Rashmi | Drawing page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout classname="pt-16">
          <AnimatedText
            text="Expressing Through Drawings!"
            classname="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          ></AnimatedText>

          {/* Display two images in one row */}
          <div className="grid grid-cols-4 xl:grid-cols-3 gap-4 ">
            {drawings.map((drawing, index) => (
              <div
                key={index}
                className="relative"
                onClick={() => openImage(drawing)}
              >
                <FramerImage
                  src={drawing}
                  alt={`Drawing ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg border border-pink-400 tap-target"
                  style={{ borderWidth: "4px" }}
                />
              </div>
            ))}
          </div>

          {/* Modal to display the full image */}
          {selectedImage && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center"
              onClick={closeImage}
              style={{ cursor: "pointer" }}
            >
              <FramerImage
                src={selectedImage}
                alt="Selected Drawing"
                className="w-2/4 h-auto max-w-screen-md max-h-screen-md"
              />
            </div>
          )}
        </Layout>
      </main>
    </>
  );
};

export default Article;
