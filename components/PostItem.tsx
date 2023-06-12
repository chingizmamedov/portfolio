import Link from "next/link";

type PostProps = {
  title: string;
  description: string;
  date: string;
  slug?: string;
};

export const PostItem = ({ title, description, date, slug }: PostProps) => {
  return (
    <div className="flex flex-col justify-center items-start mb-6 p-3 bg-slate-300 dark:bg-zinc-800/40 rounded-xl backdrop-blur-lg">
      <div className="flex flex-col">
        <Link href="/blog/13123">
          <h3 className="text-md md:text-xl tracking-tight mb-4 text-black  dark:text-white">
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
