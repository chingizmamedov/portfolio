const sitemap = require("nextjs-sitemap-generator");
const path = require("path");

sitemap({
  baseUrl: "https://chingizmammadov.com",
  pagesDirectory: path.resolve(__dirname, "./app"),
  targetDirectory: "public/",
  ignoredPaths: ["blog"],
  ignoredExtensions: ["css", "png", "jpg", "svg", "ico"],
});
