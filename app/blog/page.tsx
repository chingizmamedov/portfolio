"use client";
import Container from "@components/Container";
import { useState } from "react";
import { FilterBadge, Variant } from "@components/FilterBadge";
import { PostItem } from "@components/PostItem";
import MostLikedPosts from "@components/MostLikedPosts";

const Tag = ({ text, variant }: { text: string; variant: Variant }) => (
  <div className="rounded-xl flex items-center justify-center p-1 px-2 h-8 text-sm bg-cyan-600 dark:bg-gray-500 cursor-pointer">
    <span>{text}</span>
  </div>
);

const tags = [
  {
    text: "JavaScript",
    variant: Variant.Orange,
  },
  {
    text: "ReactJS",
    variant: Variant.Blue,
  },
  {
    text: "NextJS",
    variant: Variant.Zinc,
  },
  {
    text: "TypeScript",
    variant: Variant.Blue,
  },
];

export default function BlogPage() {
  const [selectedFilter, setSelectedFilter] = useState<Variant>(Variant.Orange);

  const handleFilterClick = (variant: Variant) => {
    setSelectedFilter(variant);
  };

  const filters = [
    {
      text: "JavaScript",
      variant: Variant.Orange,
    },
    {
      text: "ReactJS",
      variant: Variant.Blue,
    },
    {
      text: "NextJS",
      variant: Variant.Zinc,
    },
    {
      text: "TypeScript",
      variant: Variant.Blue,
    },
  ];

  return (
    <div className="px-4">
      <Container>
        <div className="mb-3 flex flex-col">
          <div className="flex gap-2">
            {filters.map((filter) => (
              <FilterBadge
                key={filter.text}
                text={filter.text}
                variant={filter.variant}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-3">
          <div className="col-span-3">
            <PostItem
              title="How custom hooks work under the hood"
              description="I know how to use a lot of different technologies, but I'm most comfortable with React, TypeScript, and Node.js. I'm also familiar with Python, Java, and C. I'm always looking to learn new things, and I'm currently learning Rust and Go."
              date="2021-05-01"
              slug="about"
            />
          </div>
          <div className="col-span-1 order-first lg:order-2">
            <div className="sticky top-0 w-full">
              {/* <div className="w-full">
                <MostLikedPosts />
              </div> */}
              <div className="hidden lg:block">
                <h4 className="text-2xl text-zinc-950 dark:text-gray-200 mb-3">
                  Popular tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Tag key={tag.text} text={tag.text} variant={tag.variant} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
