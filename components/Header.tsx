import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

export default function Header() {
  return (
    <header className="shadow-md w-full z-40 sticky top-0 left-0 bg-black/75 backdrop-blur-sm">
      <nav className=" p-5">
        <Container>
          <a href="/" className="flex items-center">
            <div className="flex font-thin items-start w-8 h-8 transition-all relative">
              <Image src="/logo.png" alt="Logo" fill />
            </div>
          </a>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <Link
                  href="/blog"
                  className="block font-thin py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}
