import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div id="" className="mt-7">
        <h1 className="text-center text-2xl font-bold">About Us</h1>
        <hr className="w-40 h-1 my-2 bg-teal-600 border-0 rounded  absolute px-2 -translate-x-1/2 left-1/2 dark:bg-gray-700  -z-10" />
        <div className=" px-5 flex flex-wrap ">
          <aside
            className="w-full self-end px-5 my-3 lg:w-1/2 "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="mt-9">
              <img
                src="/public/image/about.jpg"
                className="max-w-full mx-auto hidden rounded-3xl  lg:block "
                alt="foto Citra"
              />
            </div>
          </aside>
          <aside
            className="w-full self-center px-5 lg:w-1/2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h1
              className="text-4xl text-[#213644]
        font-bold lg:text-3xl md:text-4xl"
            >
              PT LigthTech
            </h1>
            <p className="font-normal text-gray-400 mb-16 text-xs text-justify md:text-base lg:text-xl lg:mt-3 sm:mt-6">
              Didirikan sejak tahun 2023, bersama-sama kami membangun perusahaan
              ini dengan semangat dan kegigihan. PT LigthTech adalah perusahaan
              yang bergerak di bidang jasa dan riset teknologi informasi.
              Perusahaan kami berusaha memberikan solusi atas permasalahan
              teknologi di Nusantara (Nusantara). Kami berkomitmen untuk
              meningkatkan Sumber Daya Manusia di bidang IT dalam skala nasional
              dan menciptakan solusi IT dengan standar global
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
}
