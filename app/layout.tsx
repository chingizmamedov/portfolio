import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chingiz Mammadov",
  description: `Chingiz Mammadov's personal website. I&apos;m a full-stack developer with more than 6 years of
  experience in developing and designing web applications.
  Participated in several large projects for banks and the
  government, such as e-commerce websites, queue systems, analytic
  dashboards, systems with a large database, and the ability for
  signing documents. Created interactive and real-time UI with deep
  difficulty logic. Made more optimizations for SEO and speed of
  sites (web applications). Learned to choose suitable libraries and
  technology for specific projects.`,
  image: "/me.jpg",
  keywords: [
    "chingiz",
    "mammadov",
    "chingizm",
    "chingizmammadov",
    "chingizmammadov.com",
    "chingizmammadov.me",
    "chingizmammadov.dev",
    "chingizmammadov.az",
    "developer",
    "full-stack",
    "fullstack",
    "full stack",
    "full-stack developer",
    "fullstack developer",
    "full stack developer",
    "front-end",
    "frontend",
    "front end",
    "front-end developer",
    "frontend developer",
    "front end developer",
  ],
  colorScheme: "dark",
  siteUrl: "https://chingizmammadov.com",
  siteName: "Chingiz Mammadov",
  themeColor: "#D64682",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chingizmammadov.com",
    title: "Chingiz Mammadov",
    description: `Chingiz Mammadov's personal website. I&apos;m a full-stack developer with more than 6 years of
    experience in developing and designing web applications.
    Participated in several large projects for banks and the
    government, such as e-commerce websites, queue systems, analytic
    dashboards, systems with a large database, and the ability for
    signing documents. Created interactive and real-time UI with deep
    difficulty logic. Made more optimizations for SEO and speed of
    sites (web applications). Learned to choose suitable libraries and
    technology for specific projects.`,
    image: "/me.jpg",
    site_name: "Chingiz Mammadov",
    keywords: [
      "chingiz",
      "mammadov",
      "chingizm",
      "chingizmammadov",
      "chingizmammadov.com",
      "chingizmammadov.me",
      "chingizmammadov.dev",
      "chingizmammadov.az",
      "developer",
      "full-stack",
      "fullstack",
      "full stack",
      "full-stack developer",
      "fullstack developer",
      "full stack developer",
      "front-end",
      "frontend",
      "front end",
      "front-end developer",
      "frontend developer",
      "front end developer",
    ],
  },
  twitterCard: {
    cardType: "summary_large_image",
    site: "@Chingiz92MI",
    title: "Chingiz Mammadov",
    description: `Chingiz Mammadov's personal website. I&apos;m a full-stack developer with more than 6 years of
    experience in developing and designing web applications.
    Participated in several large projects for banks and the
    government, such as e-commerce websites, queue systems, analytic
    dashboards, systems with a large database, and the ability for
    signing documents. Created interactive and real-time UI with deep
    difficulty logic. Made more optimizations for SEO and speed of
    sites (web applications). Learned to choose suitable libraries and
    technology for specific projects.`,
    image: "/me.jpg",
    keywords: [
      "chingiz",
      "mammadov",
      "chingizm",
      "chingizmammadov",
      "chingizmammadov.com",
      "chingizmammadov.me",
      "chingizmammadov.dev",
      "chingizmammadov.az",
      "developer",
      "full-stack",
      "fullstack",
      "full stack",
      "full-stack developer",
      "fullstack developer",
      "full stack developer",
      "front-end",
      "frontend",
      "front end",
      "front-end developer",
      "frontend developer",
      "front end developer",
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body className={`${inter.className} bg-white dark:bg-black`}>
        {children}
      </body>
    </html>
  );
}
