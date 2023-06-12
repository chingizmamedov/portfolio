"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import SectionCard from "@components/SectionCard";
import Container from "@components/Container";
import { ExpirienceSection } from "@components/ExpirienceSection";
import Footer from "@components/Footer";

const TopSection = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("about-ection");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center overflow-hidden px-3">
      <div className="w-full md:w-8/12 lg:w-9/12 mx-auto grid grid-cols-1 lg:grid-cols-3">
        <div className="col-span-1">
          <h1 className="flex flex-col">
            <span className="text-purple-500 text-5xl">Chingiz</span>
            <span className="text-white text-5xl md:text-7xl">Mammadov</span>
          </h1>
          <h2 className="text-orange-400 text-4xl mb-3">
            Software <span>Engineer</span>
          </h2>
          <div onClick={handleClickScroll}>
            <button className="rounded-full bg-white text-black py-2 px-3 flex items-center text-2xl font-bold">
              <span className="mr-1">About</span>
              <svg
                width="35"
                height="32"
                viewBox="0 0 45 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="icon/action/trending_flat_24px">
                  <path
                    id="icon/action/trending_flat_24px_2"
                    d="M34.2925 11.0901L29.0715 10.2456C28.4727 10.1488 27.8786 10.7576 28.1252 11.215L29.106 13.034L10.579 23.0238C9.85118 23.4162 9.50225 24.1946 9.80363 24.7536C10.105 25.3125 10.9471 25.4487 11.6749 25.0563L30.202 15.0665L31.1828 16.8856C31.4294 17.3429 32.2646 17.1812 32.4995 16.6348L34.6628 11.8087C34.8234 11.4729 34.648 11.1477 34.2925 11.0901Z"
                    fill="black"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 flex items-start justify-center mt-20 lg:mt-0">
          <div className="relative w-40 h-40">
            <motion.div
              animate={{ x: -50, y: [-10, 10, 0, -10] }}
              initial={{ x: -50, y: -10 }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
              className="w-40 h-40 bg-indigo-500 absolute right-0 transform-x-[-50px]"
            />
            <motion.div
              animate={{ x: 20, y: [10, 40, -30, 40, 10] }}
              initial={{ x: 20, y: 10 }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
              className="rounded-full bg-pink-600 w-40 h-40 absolute top-1 transform-x-[20px]"
            />
            <motion.div
              animate={{ x: 150, y: [-58, -10, 20, -20, -58] }}
              initial={{ x: 150, rotate: 115, y: -58 }}
              transition={{
                duration: 10,
                repeat: Infinity,
              }}
              className="w-0 h-0 border-t-[100px] border-t-transparent border-r-[135px] border-r-blue-500 border-b-[100px] border-b-transparent absolute left-0 translate-x-[150px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="pt-12 mb-20 px-3" id="about-ection">
      <Container>
        <a href="about">
          <h2 className="text-4xl font-bold text-violet-200 mb-3">About</h2>
        </a>

        <div className="bg-violet-300 rounded-xl mx-auto p-5 py-8">
          <div className="flex gap-3 flex-col lg:flex-row">
            <div className="flex justify-start items-start">
              <div className="w-36 h-36 border-2 rounded-full overflow-hidden shadow-lg relative">
                <Image
                  src="/me.jpg"
                  alt="avatar"
                  className="rounded-full object-cover scale-150"
                  fill
                />
              </div>
            </div>
            <p className="font-bold text-xl">
              I&apos;m a full-stack developer with more than 6 years of
              experience in developing and designing web applications.
              Participated in several large projects for banks and the
              government, such as e-commerce websites, queue systems, analytic
              dashboards, systems with a large database, and the ability for
              signing documents. Created interactive and real-time UI with deep
              difficulty logic. Made more optimizations for SEO and speed of
              sites (web applications). Learned to choose suitable libraries and
              technology for specific projects.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-r ">
      <TopSection />
      <AboutSection />
      <ExpirienceSection />
      <Footer />
    </div>
  );
}
