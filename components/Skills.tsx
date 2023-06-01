"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const skills = [
  {
    name: "ReactJS",
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    backgroundColor: "#61DBFB",
  },
  {
    name: "React Native",
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    backgroundColor: "#61DBFB",
  },
  {
    name: "Redux",
    icon: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    backgroundColor: "#764ABC",
  },
  {
    name: "NextJS",
    icon: "https://cdn.worldvectorlogo.com/logos/nextjs-3.svg",
    backgroundColor: "#000000",
  },

  {
    name: "NodeJS",
    icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
    backgroundColor: "#339933",
  },
  {
    name: "ExpressJS",
    icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    backgroundColor: "#000000",
  },
  {
    name: "NestJS",
    icon: "https://cdn.worldvectorlogo.com/logos/nestjs.svg",
    backgroundColor: "#E0234E",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    backgroundColor: "#3178C6",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.worldvectorlogo.com/logos/javascript.svg",
    backgroundColor: "#F7DF1E",
  },
  {
    name: "HTML",
    icon: "vue.svg",
    backgroundColor: "#E34F26",
  },
];

type SkillProps = {
  name: string;
  icon: string;
  backgroundColor: string;
};

const Skill = ({ name, icon, backgroundColor }: SkillProps) => {
  return (
    <div
      className="flex flex-col text-white backdrop-blur-sm p-4 rounded-lg"
      style={{
        backgroundColor,
      }}
    >
      <div className="flex flex-col">
        <h4>{name}</h4>
        <img src={icon} alt="" />
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <div className="w-full my-4">
      <Swiper slidesPerView={3} spaceBetween={10} className="mySwiper">
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
