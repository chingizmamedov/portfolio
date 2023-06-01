import Container from "@components/Container";
import Link from "next/link";
import React from "react";

type PostProps = {
  title: string;
  description: string;
  date: string;
  slug?: string;
};

const Post = ({ title, description, date, slug }: PostProps) => {
  return (
    <div className="flex flex-col justify-center items-start mb-6 p-3 bg-slate-300 dark:bg-zinc-800/40 rounded-xl backdrop-blur-lg">
      <div className="flex flex-col">
        <Link href="/blog/13123">
          <h3 className="font-bold text-md md:text-xl tracking-tight mb-4 text-black  dark:text-white">
            {title}
          </h3>
        </Link>

        <p className="text-zinc-900 dark:text-gray-300 text-sm">
          {description}
        </p>
        <div className="flex gap-2 mt-3">
          <div className="tag bg-yellow-500 inline-block rounded-md px-1">
            <span className="text-xs">JavaScript</span>
          </div>
          <div className="tag bg-blue-500 inline-block rounded-md px-1">
            <span className="text-xs">ReactJS</span>
          </div>
        </div>
        <div>
          <span className="text-xs text-zinc-950 dark:text-gray-200">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function BlogPage() {
  return (
    <div className=" bg-white dark:bg-gray-950 px-4">
      <Container>
        <div className="mb-3 flex flex-col">
          <h2 className="text-white text-2xl">Filters</h2>
          <div className="flex gap-2">
            <div className="bg-orange-300 px-2 rounded-md cursor-pointer">
              <span className="text-xs">JavaScript</span>
            </div>
            <div className="bg-blue-300 px-2 rounded-md cursor-pointer">
              <span className="text-xs">ReactJS</span>
            </div>
            <div className="bg-zinc-300 px-2 rounded-md cursor-pointer">
              <span className="text-xs">NextJS</span>
            </div>
            <div className="bg-blue-500 px-2 rounded-md cursor-pointer">
              <span className="text-xs">TypeScript</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          <div className="col-span-3">
            <Post
              title="How create-react-app works under the hood"
              description="I&apos;m a full-stack developer with a passion for building beautiful, functional, and accessible websites and applications. I&apos;m currently working as a software engineer at a startup called <a href=&apos;https://www.heyorca.com/&apos;>HeyOrca</a> in St. John&apos;s, Newfoundland. I&apos;m also a student at Memorial University of Newfoundland, where I&apos;m pursuing a Bachelor of Science in Computer Science."
              date="2021-05-01"
              slug="about"
            />
            <Post
              title="How custom hooks work under the hood"
              description="I know how to use a lot of different technologies, but I&apos;m most comfortable with React, TypeScript, and Node.js. I&apos;m also familiar with Python, Java, and C. I&apos;m always looking to learn new things, and I&apos;m currently learning Rust and Go."
              date="2021-05-01"
              slug="about"
            />
            <Post
              title="How create-react-app works under the hood"
              description="I&apos;m a full-stack developer with a passion for building beautiful, functional, and accessible websites and applications. I&apos;m currently working as a software engineer at a startup called <a href=&apos;https://www.heyorca.com/&apos;>HeyOrca</a> in St. John&apos;s, Newfoundland. I&apos;m also a student at Memorial University of Newfoundland, where I&apos;m pursuing a Bachelor of Science in Computer Science."
              date="2021-05-01"
              slug="about"
            />
            <Post
              title="How custom hooks work under the hood"
              description="I know how to use a lot of different technologies, but I&apos;m most comfortable with React, TypeScript, and Node.js. I&apos;m also familiar with Python, Java, and C. I&apos;m always looking to learn new things, and I&apos;m currently learning Rust and Go."
              date="2021-05-01"
              slug="about"
            />
            <Post
              title="How create-react-app works under the hood"
              description="I&apos;m a full-stack developer with a passion for building beautiful, functional, and accessible websites and applications. I&apos;m currently working as a software engineer at a startup called <a href=&apos;https://www.heyorca.com/&apos;>HeyOrca</a> in St. John&apos;s, Newfoundland. I&apos;m also a student at Memorial University of Newfoundland, where I&apos;m pursuing a Bachelor of Science in Computer Science."
              date="2021-05-01"
              slug="about"
            />
            <Post
              title="How custom hooks work under the hood"
              description="I know how to use a lot of different technologies, but I&apos;m most comfortable with React, TypeScript, and Node.js. I&apos;m also familiar with Python, Java, and C. I&apos;m always looking to learn new things, and I&apos;m currently learning Rust and Go."
              date="2021-05-01"
              slug="about"
            />
            <Post
              title="How create-react-app works under the hood"
              description="I&apos;m a full-stack developer with a passion for building beautiful, functional, and accessible websites and applications. I&apos;m currently working as a software engineer at a startup called <a href=&apos;https://www.heyorca.com/&apos;>HeyOrca</a> in St. John&apos;s, Newfoundland. I&apos;m also a student at Memorial University of Newfoundland, where I&apos;m pursuing a Bachelor of Science in Computer Science."
              date="2021-05-01"
              slug="about"
            />
            <Post
              title="How custom hooks work under the hood"
              description="I know how to use a lot of different technologies, but I&apos;m most comfortable with React, TypeScript, and Node.js. I&apos;m also familiar with Python, Java, and C. I&apos;m always looking to learn new things, and I&apos;m currently learning Rust and Go."
              date="2021-05-01"
              slug="about"
            />
          </div>
          <div className="col-span-1">
            <div className="sticky top-0">
              <div>
                <h4 className="text-2xl font-bold text-zinc-950 dark:text-gray-200 mb-3">
                  Most liked
                </h4>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col justify-center items-start mb-6 p-3 bg-zinc-800/40 rounded-xl backdrop-blur-lg">
                    <div className="flex flex-col">
                      <h3 className="font-bold text-md md:text-xl tracking-tight mb-4 text-black dark:text-white">
                        How create-react-app works under the hood
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-3">
                        I&apos;m a full-stack developer with a passion for building
                        beautiful, functional, and accessible websites and
                        applications. I&apos;m currently working as a software
                        engineer at a startup called{" "}
                        <a
                          className="text-blue-300"
                          href="https://www.heyorca.com/"
                        >
                          HeyOrca
                        </a>{" "}
                        in St. John&apos;s, Newfoundland. I&apos;m also a student at
                        Memorial University of Newfoundland, where I&apos;m pursuing
                        a Bachelor of Science in Computer Science.
                      </p>
                      <div className="flex gap-2 mt-3">
                        <div className="tag dark:bg-yellow-500 inline-block rounded-md px-1">
                          <span className="text-xs">JavaScript</span>
                        </div>
                        <div className="tag dark:bg-blue-500 inline-block rounded-md px-1">
                          <span className="text-xs">ReactJS</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-xs text-gray-200">
                          2021-05-01
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-zinc-950 dark:text-gray-200 mb-3">
                  Popular tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  <div className="rounded-xl p-2 bg-cyan-600 dark:bg-gray-500 inline-block cursor-pointer">
                    typescript
                  </div>
                  <div className="rounded-xl p-2 bg-cyan-600 dark:bg-gray-500 inline-block cursor-pointer">
                    reactjs
                  </div>

                  <div className="rounded-xl p-2 bg-cyan-600 dark:bg-gray-500 inline-block cursor-pointer">
                    redux
                  </div>
                  <div className="rounded-xl p-2 bg-cyan-600 dark:bg-gray-500 inline-block cursor-pointer">
                    suka
                  </div>
                  <div className="rounded-xl p-2 bg-cyan-600 dark:bg-gray-500 inline-block cursor-pointer">
                    axios
                  </div>
                  <div className="rounded-xl p-2 bg-cyan-600 dark:bg-gray-500 inline-block cursor-pointer">
                    mongodb
                  </div>

                  <div className="rounded-xl p-2 bg-cyan-600 dark:bg-gray-500 inline-block cursor-pointer">
                    tailwindcss
                  </div>
                  <div className="rounded-xl p-2 bg-cyan-600 dark:bg-gray-500 inline-block cursor-pointer">
                    animated list
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
