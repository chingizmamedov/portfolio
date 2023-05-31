import SectionCard from "@components/SectionCard";
import Link from "next/link";
import { ReactNode } from "react";

const Block = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link href={href}>
    <div className="border border-gray-100 shadow-md aspect-video flex items-center justify-center rounded-md group-hover:scale-100 hover:!scale-110 transition-transform duration-500 cursor-pointer">
      {children}
    </div>
  </Link>
);

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white dark:bg-gray-950 ">
      <div>
        <h1 className="text-6xl mb-12 text-center dark:text-white">
          Chingiz Mammadov
        </h1>
        <div className="group w-9/12 mx-auto grid grid-cols-3 gap-3">
          <SectionCard href="/about" title="About" description="Uncover my creative journey. Explore my world and see how I bring visions to life." />
          <SectionCard href="/blog" title="Blog" description="Inspiring insights and tips. Join me for captivating content on art and design." />
          <SectionCard href="/projects" title="Projects" description="Where pixels tell stories. Explore my transformative designs and be inspired." />
        </div>
      </div>
    </div>
  );
}
