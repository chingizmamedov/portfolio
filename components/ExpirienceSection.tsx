"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import Container from "./Container";

import "swiper/css";

const data = [
  {
    company: "Jaxel",
    title: "Sr. Fullstack Developer",
    time: "2022 - Present",
    responsibility: [
      `Participated in the development of a full-stack application using
          AppSync, NextJS, GraphQL, ApolloGraphQL, TypeScript, TailwindCSS,
          D3.js, Cypress, MongoDB, DocumentDB, MongooseJS, Figma, AWS Lambda,
          and S3, starting the project from scratch and establishing its
          structure.`,
      `Selected and implemented key libraries, ensuring optimal compatibility and performance for the project requirements.`,
      `Created, managed, and assigned tasks in Jira, streamlining the development process and facilitating effective team collaboration.`,
      `Designed wireframes in Figma, contributing to the project's visual elements and ensuring a seamless user experience.`,
      `Developed reusable components and functionality, including Layouts, modals for creating documents, custom hooks for specific situations, authentication, and higher-order components for extending component capabilities and UI enhancements.`,
      `Actively collaborated with back-end developers, front-end developers, DevOps, and project managers to ensure efficient communication and smooth project progression.`,
      `Engaged in problem-solving discussions, contributing innovative ideas and suggesting improved solutions for troubleshooting and enhancing the project's overall quality.`,
      `NextJS, GraphQL, ApolloGraphQL, TypeScript, TailwindCSS, Cypress, MongoDB, DocumentDB, MongooseJS, Figma, AWS Lambda, D3.js, and S3`,
    ],
    techStack: [
      "NextJS",
      "GraphQL",
      "ApolloGraphQL",
      "TypeScript",
      "TailwindCSS",
      "Cypress",
      "MongoDB",
      "DocumentDB",
      "MongooseJS",
      "Figma",
      "AWS Lambda",
      "D3.js",
      "S3",
    ],
  },
  {
    company: "Cybernet LLC",
    title: "Sr. Frontend Developer",
    time: "August 2020 - February 2022",
    responsibility: [
      `Create common reusable components and functionality such as Layout, modal for signing documents, hooks for checking concrete situations, auth, HOCs for adding additional abilities, or UI decorations for components `,
      `Liaised with back-end developers, front-end developers, quality assurance testers, and PMs as needed. `,
      `Discuss problems and suggest better solutions for troubleshooting.`,
      `Create a module for fully controlling all devices of the company. With the module, users can disable/enable devices, connect with certain objects, get statistics for the selected period of selected devices or objects, and change the balance of devices. `,
      `Create a module for managing balance, transferring balance between accounts, and paying taxes. `,
      `Designed and developed the AWS Lambda functions for various Lambda triggers.`,
      `For more reliable and easier refactoring code we use TypeScript as the primary language.`,
      `ReactJS, Redux, Redux-Saga, ReactQuery, Graphql, Framer motion, Axios, MaterialUi, Bootstrap, React-bootstrap, NextJs, React Router, Typescript,framer-motion, styled-components, AWS, Lambda, S3`,
    ],
    techStack: [
      "ReactJS",
      "Redux",
      "Redux-Saga",
      "ReactQuery",
      "Graphql",
      "Framer motion",
      "Axios",
      "MaterialUi",
      "Bootstrap",
      "React-bootstrap",
    ],
  },
  {
    company: "Qmeter (Texnolink)",
    title: "Frontend Developer",
    time: "December 2018 - August 2020",
    responsibility: [
      `Develop an application with the ability for UI and functionality customization with libraries such as ReactDnD, MaterialUi, React-spring and SocketIO, Axios.`,
      `Create functionality for customization with drag and drop and selection with ReactDnD.`,
      `Develop a queue system for small or medium companies with a specific queue system logic. The main library used ReactJS, as a UI library used react-bootstrap, styled-components, and other libraries like Axios for the rest API requests to the backend.`,
      `Add new functionalities based on company needs with an existing hook (functions) or create custom functionality, all backend logic was written on Node js with libraries such as express js, validator, passport, jsonwebtoken, winston and etc.`,
      `Develop individual dashboards for different companies based on accumulated data from queue hardware systems from branches, SPA written on ReactJs, MaterialUI, react-beautiful-dnd, SocketIO, and Axios.`,
      `Develop a survey web application written on ReactJS, react-bootstrap, framer-motion, Axios, SASS, modular CSS etc.`,
      `Create a dashboard with the real-time observation of customers on bank branches based on a queue system database, this project was written on ReactJS as the front-end part within conjunction with SocketIO, react-bootstrap, SASS, react-transition-group, Axios etc., and Node js as backend part, as the database was used MongoDB.`,
      `Create a booking system for the bank, for this project, we use React Js, helmet, react-bootstrap, SASS, react-transition-group, Axios, and Node js as the backside of the project, as the database was used MongoDB.`,
      `Technologies:  ReactJS, Redux, Redux-Thunk, React Router, React-bootstrap, MaterialUi, Axios, SocketIO, Nodejs, ExpressJs.`,
    ],
    techStack: [
      "ReactJS",
      "Redux",
      "Redux-Thunk",
      "React Router",
      "React-bootstrap",
      "MaterialUi",
      "Axios",
      "SocketIO",
    ],
  },
  {
    company: "Creative",
    title: "Frontend Developer",
    time: "September 2017 - November 2018",
    responsibility: [
      `Create templates for Bitrix / WordPress based on individual design.`,
      `Create widgets (based on given API’s) for CRM.`,
      `Create widgets to connect social platforms with CRM.`,
      `Create extensions for the browser for additional functionality.`,
      `Create SPA for retail.`,
    ],
    techStack: [
      "ReactJS",
      "Redux",
      "Redux-Thunk",
      "React Router",
      "React-bootstrap",
      "MaterialUi",
      "Axios",
    ],
  },
  {
    company: "Aldim.az",
    title: "Frontend Developer",
    time: "January 2016 - May 2017",
    responsibility: [
      `Create/update functionalities`,
      `Testing/resolving problems`,
    ],
    techStack: ["ReactJS", "Redux", "Redux-Thunk", "React Router"],
  },
];

export const ExpirienceSection = () => {
  return (
    <section className="mb-12 w-full px-3">
      <Container>
        <div className="rounded-xl mx-auto w-full">
          <div className="flex justify-between item-center mb-3">
            <h2 className="text-3xl font-bold text-violet-100 mb-3">
              Expirience
            </h2>
            <div className="hidden gap-2">
              <button className="bg-violet-300 rounded-full p-2 w-10 h-10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="icon/action/trending_flat_24px">
                    <path
                      id="icon/action/trending_flat_24px_2"
                      d="M2.74551 12.35L5.53551 15.14C5.85551 15.46 6.39551 15.24 6.39551 14.79V13L20.3955 13C20.9455 13 21.3955 12.55 21.3955 12C21.3955 11.45 20.9455 11 20.3955 11L6.39551 11V9.20997C6.39551 8.75997 5.85551 8.53997 5.54551 8.85997L2.75551 11.65C2.55551 11.84 2.55551 12.16 2.74551 12.35V12.35Z"
                      fill="black"
                      fill-opacity="0.54"
                    />
                  </g>
                </svg>
              </button>
              <button className="bg-violet-300 rounded-full p-2 w-10 h-10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transform rotate-180"
                >
                  <g id="icon/action/trending_flat_24px">
                    <path
                      id="icon/action/trending_flat_24px_2"
                      d="M2.74551 12.35L5.53551 15.14C5.85551 15.46 6.39551 15.24 6.39551 14.79V13L20.3955 13C20.9455 13 21.3955 12.55 21.3955 12C21.3955 11.45 20.9455 11 20.3955 11L6.39551 11V9.20997C6.39551 8.75997 5.85551 8.53997 5.54551 8.85997L2.75551 11.65C2.55551 11.84 2.55551 12.16 2.74551 12.35V12.35Z"
                      fill="black"
                      fill-opacity="0.54"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex ">
            <div className="block w-full expirience-swiper">
              <Swiper
                modules={[Pagination]}
                pagination={{
                  dynamicBullets: true,
                }}
                breakpoints={{
                  "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  "@1.50": {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                spaceBetween={10}
                className="mySwiper"
              >
                {data.map((item) => (
                  <SwiperSlide key={item.title}>
                    <div className="p-5 rounded-lg bg-indigo-500 h-full flex flex-col">
                      <div className="flex justify-between item-end">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                        <span className="text-gray-300 text-sm">
                          {item.time}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {item.company}
                        </h4>
                      </div>
                      <div className="">
                        <p className="text-white line-clamp-5	">
                          {item.responsibility}
                        </p>
                      </div>

                      <div className="flex flex-wrap mt-2">
                        {item.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="block mb-1 text-black text-sm bg-violet-300 rounded-full px-2 py-1 mr-2"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
