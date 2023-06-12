import Container from "@components/Container";
import Expirience from "@components/Expirience";
import Skills from "@components/Skills";
import Image from "next/image";

const CommonInfoBlog = () => {
  return (
    <div className="flex gap-4">
      <div className="flex justify-start items-start">
        <div className="h-32 w-32 rounded-full overflow-hidden shadow-lg relative">
          <Image
            src="/me.jpg"
            alt="avatar"
            className="rounded-full object-cover scale-150"
            fill
          />
        </div>
      </div>
      <div className="grow-1 grid grid-cols-3 relative">
        <blockquote className="col-span-2 text-xl italic font-thin text-gray-900 dark:text-white">
          I&apos;m a full-stack developer with more than 6 years of experience
          in developing and designing web applications. Participated in several
          large projects for banks and the government, such as e-commerce
          websites, queue systems, analytic dashboards, systems with a large
          database, and the ability for signing documents. Created interactive
          and real-time UI with deep difficulty logic. Made more optimizations
          for SEO and speed of sites (web applications). Learned to choose
          suitable libraries and technology for specific projects.
        </blockquote>
      </div>
    </div>
  );
};
export default function AboutPage() {
  return (
    <div className=" min-h-screen">
      <Container>
        <section className="mb-4">
          <h1 className="my-4 mb-10 mt-8 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            About
          </h1>
          <CommonInfoBlog />
        </section>
        <section className="">
          <Expirience />
        </section>
        {/* <LinksSection /> */}
      </Container>
    </div>
  );
}

const LinksSection = () => {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
        Do you want to discuss your project or something interesting?
      </h5>
      <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
        Do not hasitate to contact me and let&apos;s talk about your project.
      </p>
      <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a
          href="https://www.instagram.com/chingiz_dev/"
          className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="instagram"
            className="fill-white w-4 h-4 mr-2"
          >
            <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"></path>
          </svg>
          <div className="text-left">
            <div className="text-xs">My on instagram</div>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/chingiz-mamedov/"
          className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            id="linkedin"
            className="fill-white w-4 h-4 mr-2"
          >
            <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"></path>
          </svg>
          <div className="text-left">
            <div className="text-xs">Let&apos;s talk on linkedIn</div>
          </div>
        </a>
      </div>
    </div>
  );
};
