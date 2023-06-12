"use client";

import { Button, Timeline } from "flowbite-react";
import { ReactNode } from "react";

type ExpirienceItemProps = {
  title: string;
  time: string;
  responsibility: Array<string>;
  techStack?: Array<string>;
  company?: string;
};

const ExpirienceItem = ({
  title,
  time,
  responsibility,
  company,
}: ExpirienceItemProps) => (
  <Timeline.Item>
    <Timeline.Point />
    <Timeline.Content>
      <Timeline.Time>{time}</Timeline.Time>
      <div className="flex justify-between">
        <Timeline.Title>{title}</Timeline.Title>
        <div className="text-lg font-normal text-gray-900 dark:text-gray-400">
          {company}
        </div>
      </div>
      <Timeline.Body>
        <ul className="max-w-2xl space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          {responsibility?.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Timeline.Body>
    </Timeline.Content>
  </Timeline.Item>
);

const expirienseItems = [
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

export default function Expirience() {
  return (
    <div>
      <h2 className="dark:text-gray-200 text-3xl font-bold mb-4">Expirience</h2>
      <Timeline>
        {expirienseItems.map((item) => (
          <ExpirienceItem key={item.title} {...item} />
        ))}
      </Timeline>
    </div>
  );
}
