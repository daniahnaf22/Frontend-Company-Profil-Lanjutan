import React from "react";
import { Link } from "react-router-dom";
import Typical from "react-typical";

export default function Home(props) {
  return (
    <div>
      <div id="">
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="/public/image/carousel1.jpg"
              className="w-full h-[600px] bg-black opacity-60  object-cover "
            />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>

            <h1
              className="text-black text-2xl text-center font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-5xl"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Selamat Datang di LigthTech
            </h1>
            <p
              className="text-white text-sm  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[55px] text-center lg:text-xl lg:mt-8"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Ini adalah platform teknologi terkini untuk kehidupan yang lebih
              cerah.
            </p>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="/public/image/carousel1.jpg"
              className="w-full h-[600px] bg-black opacity-60  object-cover "
            />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>

            <h1
              className="text-black text-2xl text-center font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-5xl"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Selamat Datang di LigthTech
            </h1>
            <p
              className="text-white text-sm  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[55px] text-center lg:text-xl lg:mt-8"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Ini adalah platform teknologi terkini untuk kehidupan yang lebih
              cerah.
            </p>
          </div>

          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="/public/image/carousel1.jpg"
              className="w-full h-[600px] bg-black opacity-60  object-cover "
            />

            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>

            <h1
              className="text-black text-2xl text-center font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-5xl"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Selamat Datang di LigthTech
            </h1>
            <p
              className="text-white text-sm  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-[55px] text-center lg:text-xl lg:mt-8"
              style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              Ini adalah platform teknologi terkini untuk kehidupan yang lebih
              cerah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
