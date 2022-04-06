import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function Banner() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-screen"
      >
        <SwiperSlide className="grid place-items-center ">
          <img
            className="mx-auto h-full"
            src="https://source.unsplash.com/random?technology"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="grid place-items-center ">
          <img
            className="mx-auto w-full object-cover"
            src="https://source.unsplash.com/random?setup"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="grid place-items-center ">
          <img
            className="mx-auto w-full object-cover"
            src="https://source.unsplash.com/random?phone"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="grid place-items-center ">
          <img
            className="mx-auto w-full object-cover"
            src="https://source.unsplash.com/random?mobile-phone"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="grid place-items-center ">
          <img
            className="mx-auto w-full object-cover"
            src="https://source.unsplash.com/random?apple"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
