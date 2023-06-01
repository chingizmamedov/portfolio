"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

export default function MostLikedPosts() {
  return (
    <div className="w-full">
      <h4 className="text-2xl font-bold text-zinc-950 dark:text-gray-200 mb-3">
        Most liked
      </h4>
      <div className="w-full">
        <Swiper slidesPerView={1} className="mySwiper"  modules={[Pagination]} pagination={true}>
          <SwiperSlide>
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
                  <a className="text-blue-300" href="https://www.heyorca.com/">
                    HeyOrca
                  </a>{" "}
                  in St. John&apos;s, Newfoundland. I&apos;m also a student at
                  Memorial University of Newfoundland, where I&apos;m pursuing a
                  Bachelor of Science in Computer Science.
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
                  <span className="text-xs text-gray-200">2021-05-01</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
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
                  <a className="text-blue-300" href="https://www.heyorca.com/">
                    HeyOrca
                  </a>{" "}
                  in St. John&apos;s, Newfoundland. I&apos;m also a student at
                  Memorial University of Newfoundland, where I&apos;m pursuing a
                  Bachelor of Science in Computer Science.
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
                  <span className="text-xs text-gray-200">2021-05-01</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
