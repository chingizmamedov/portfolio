"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionCard from "@components/SectionCard";
import Container from "@components/Container";
import { ExpirienceSection } from "@components/ExpirienceSection";
import Footer from "@components/Footer";
import Header from "@components/Header";

const BackgrounAnimation = () => {
  return (
    <div className="absolute -z-10 top-0 left-0 right-0 bottom-0 w-screen h-screen flex items-center justify-center mt-20 lg:mt-0">
      <div className="absolute w-full h-full backdrop-blur-sm bg-zinc-950/90 z-20 top-0  right-0" />
      <motion.div
        className="relative w-40 h-40"
        style={{ filter: "url(#gooey) blur(5px)" }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 400,
          repeat: Infinity,
        }}
      >
        <motion.div
          animate={{
            x: [-150, 120, -110, 140, -150],
            y: [-110, 90, -60, 40, -110],
          }}
          initial={{ x: -150, y: -110 }}
          transition={{
            duration: 90,
            repeat: Infinity,
          }}
          className="w-40 h-40 bg-pink-600 absolute right-0 transform-x-[-50px] "
        />
        <motion.div
          animate={{
            x: [20, -10, 30, -20, 20],
            y: [110, -140, 30, -90, 110],
          }}
          initial={{ x: 20, y: 110 }}
          transition={{
            duration: 90,
            repeat: Infinity,
          }}
          className="rounded-full bg-pink-600 w-40 h-40 absolute top-1 transform-x-[20px] "
        />
        <motion.div
          animate={{
            x: [90, -10, 20, -30, 90],
            y: [-58, -10, 20, -20, -58],
          }}
          initial={{ x: 90, rotate: 115, y: -58 }}
          transition={{
            duration: 90,
            repeat: Infinity,
          }}
          className="w-0 h-0 border-t-[100px] border-t-transparent border-r-[135px] border-r-pink-600 border-b-[100px] border-b-transparent absolute left-0 translate-x-[150px] "
        />
      </motion.div>
    </div>
  );
};

const TopSection = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("about-ection");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="sticky inset-0 h-screen w-screen flex items-center justify-center overflow-hidden px-3">
      <div className="w-full flex items-center justify-center">
        <div className="">
          <h1 className="flex flex-col">
            <span className="text-gray-100 text-5xl">Chingiz</span>
            <span className="text-gray-100 text-5xl md:text-7xl">Mammadov</span>
          </h1>
          <h2 className="text-gray-200 text-4xl mb-3">
            Software <span>Engineer</span>
          </h2>
          <div onClick={handleClickScroll}>
            <button className="rounded-full bg-white text-black py-2 px-3 flex items-center text-2xl font-bold">
              <span className="mr-1">About</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
                fill="#000"
              >
                <g id="icon/action/trending_flat_24px">
                  <path
                    id="icon/action/trending_flat_24px_2"
                    d="M2.74551 12.35L5.53551 15.14C5.85551 15.46 6.39551 15.24 6.39551 14.79V13L20.3955 13C20.9455 13 21.3955 12.55 21.3955 12C21.3955 11.45 20.9455 11 20.3955 11L6.39551 11V9.20997C6.39551 8.75997 5.85551 8.53997 5.54551 8.85997L2.75551 11.65C2.55551 11.84 2.55551 12.16 2.74551 12.35V12.35Z"
                    fill="#000"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <BackgrounAnimation />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="relative z-10 bg-black" id="about-ection">
      <Container>
        <div className="mx-auto h-screen w-screen grid grid-cols-2">
          <div className="flex gap-3 flex-col lg:flex-row span-col-1 relative p-5">
            <div className="absolute inset-0 h-full w-full justify-start items-start">
              <div className="h-full w-full overflow-hidden shadow-lg relative">
                <Image
                  src="/me.jpg"
                  alt="avatar"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </div>

          <div className="col-span-1 p-7 flex items-center justify-center">
            <div>
              <a href="#about" className="z-20">
                <h2 className="text-4xl font-bold text-violet-200 mb-3">
                  About
                </h2>
              </a>
              <p className="font-bold text-xl col-span-1 text-gray-300">
                I&apos;m a full-stack developer with more than 6 years of
                experience in developing and designing web applications.
                Participated in several large projects for banks and the
                government, such as e-commerce websites, queue systems, analytic
                dashboards, systems with a large database, and the ability for
                signing documents. Created interactive and real-time UI with
                deep difficulty logic. Made more optimizations for SEO and speed
                of sites (web applications). Learned to choose suitable
                libraries and technology for specific projects.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-r ">
      <main>
        <Header />
        <TopSection />
        <AboutSection />
        <ExpirienceSection />
      </main>
      <Footer />
    </div>
  );
}
