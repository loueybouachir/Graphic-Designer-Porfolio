/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import AfterEffect from "@/assets/images/AfterEffect.png";
import Blender from "@/assets/images/Blende.png";
import Photoshop from "@/assets/images/Photoshop.png";
import Premiere from "@/assets/images/PremierPro.png";
import Davinci from "@/assets/images/Davinci.png";
import Dji from "@/assets/images/Dji.png";
import animate from "@/assets/images/animate.png";
import Lightroom from "@/assets/images/Lightroom.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Orbit from "@/components/Orbit";
import Logo from "@/assets/images/logoOrange.png";
import Image from "next/image";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
}



interface FeaturesProps {
  featuresData: Feature;
}

export const logos = [
  {
    src: AfterEffect,
    alt: "After effect",
    rotate: 0,
  },
  {
    src: Blender,
    alt: "Blender",
    rotate: 45,
  },
  {
    src: Photoshop,
    alt: "Photoshop",
    rotate: 90,
  },
  {
    src: Premiere,
    alt: "Premier Pro",
    rotate: 135,
  },
  {
    src: Davinci,
    alt: "Davinci",
    rotate: 180,
  },
  {
    src: Dji,
    alt: "Dji",
    rotate: 225,
  },
  {
    src: animate,
    alt: "Animate",
    rotate: 270,
  },
  {
    src: Lightroom,
    alt: "Lightroom",
    rotate: 315,
  },
];

const Features: React.FC<FeaturesProps> = ({ featuresData }) => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="md:px-20 lg:px-40">
          {/* Animated Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
              Core Capabilities
            </h2>
            <p className="text-lg text-black-900 max-w-3xl mx-auto">
              Precision Tools for Visual Excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black-900 leading-tight">
                {featuresData.title}
              </h2>
              <ul className="mt-12 flex flex-col gap-8">
  {[featuresData.text1, featuresData.text2, featuresData.text3, featuresData.text4, featuresData.text5]
    .filter(text => text && text.trim() !== "") // Filter out empty texts
    .map((text, index) => (
      <li key={index} className="flex items-center gap-4">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="text-orange-500 size-6"
        />
        <span className="text-xl font-medium">{text}</span>
      </li>
    ))}
</ul>
            </div>
            
            <div className="flex justify-center">
              <div className="size-[270px] md:size-[450px] relative flex-shrink-0">
                <div className="absolute inset-0">
                  <Orbit className="size-full" />
                </div>
                <div className="absolute inset-0 flex justify-center items-center">
                  <Orbit className="size-[180px] md:size-[300px]" />
                </div>
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="size-[240px] flex justify-center items-center">
                    <img
                      src={Logo.src}
                      alt="Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
                {logos.map((logo, index) => (
                  <motion.div
                    className="absolute inset-0"
                    initial={{ rotate: logo.rotate }}
                    animate={{
                      rotate: [
                        logo.rotate,
                        logo.rotate + 45,
                        logo.rotate + 45,
                        logo.rotate + 90,
                        logo.rotate + 90,
                        logo.rotate + 135,
                        logo.rotate + 135,
                        logo.rotate + 180,
                        logo.rotate + 180,
                        logo.rotate + 225,
                        logo.rotate + 225,
                        logo.rotate + 270,
                        logo.rotate + 270,
                        logo.rotate + 315,
                        logo.rotate + 315,
                        logo.rotate + 360,
                        logo.rotate + 360,
                      ],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    key={index}
                  >
                    <motion.div
                      className="outline outline-1 outline-black-500 inline-flex size-10 md:size-14 items-center justify-center border-orange-500 rounded-lg absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      initial={{
                        translate: `-50% -50%`,
                        rotate: -logo.rotate,
                      }}
                      animate={{
                        rotate: [
                          -logo.rotate,
                          -logo.rotate - 45,
                          -logo.rotate - 45,
                          -logo.rotate - 90,
                          -logo.rotate - 90,
                          -logo.rotate - 135,
                          -logo.rotate - 135,
                          -logo.rotate - 180,
                          -logo.rotate - 180,
                          -logo.rotate - 225,
                          -logo.rotate - 225,
                          -logo.rotate - 270,
                          -logo.rotate - 270,
                          -logo.rotate - 315,
                          -logo.rotate - 315,
                          -logo.rotate - 360,
                          -logo.rotate - 360,
                        ],
                      }}
                      transition={{ duration: 10, repeat: Infinity }}
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        className="size-6 md:size-9 object-contain"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;