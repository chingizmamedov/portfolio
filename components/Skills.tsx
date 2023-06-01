"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

const skills = [
  {
    name: "ReactJS",
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    backgroundColor: "#61DBFB",
    progress: 95,
  },
  {
    name: "React Native",
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    backgroundColor: "#61DBFB",
    progress: 70,
  },
  {
    name: "Redux",
    icon: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    backgroundColor: "#764ABC",
    progress: 87,
  },
  {
    name: "NextJS",
    icon: "https://cdn.worldvectorlogo.com/logos/nextjs-3.svg",
    backgroundColor: "#000000",
    progress: 82,
  },

  {
    name: "NodeJS",
    icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    backgroundColor: "#339933",
    progress: 76,
  },
  {
    name: "ExpressJS",
    icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    backgroundColor: "#000000",
    progress: 80,
  },
  {
    name: "TypeScript",
    icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    backgroundColor: "#3178C6",
    progress: 70,
  },
  {
    name: "JavaScript",
    icon: "https://cdn.worldvectorlogo.com/logos/javascript.svg",
    backgroundColor: "#F7DF1E",
    progress: 92,
  },
];

type SkillProps = {
  name: string;
  icon: string;
  backgroundColor: string;
};

const Skill = ({ name, icon, backgroundColor }: SkillProps) => {
  return (
    <div className="flex flex-col text-white bg-zinc-700 backdrop-blur-sm p-4 rounded-lg h-full">
      <div className="flex flex-col items-center">
        <h4>{name}</h4>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-36"
          src={icon}
          alt=""
        />
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="w-full my-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        className="mySwiper flex items-stretch"
      >
        {skills.map((skill) => {
          return (
            <SwiperSlide key={skill.name}>
              <Skill {...skill} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
