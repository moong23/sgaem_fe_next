"use client";

import MainImage from "@/assets/Images/main_banner_1_final.png";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";
import LeftChevron from "@/assets/Icons/LeftChevron";
import RightChevron from "@/assets/Icons/RightChevron";

const MainPageCarousel = () => {
  return (
    <div className="flex w-full h-60 pc:w-full pc:h-[40rem]">
      {/* Seperative Cell */}
      <div className="relative w-full h-full flex items-center flex-col">
        <Carousel
          width="100%"
          height="100%"
          length={3}
        >
          <Carousel.Wrapper>
            <Carousel.Item index={0}>
              <Image
                priority
                src={MainImage}
                fill
                className="object-cover"
                alt="MainImage"
              />
            </Carousel.Item>
            <Carousel.Item index={1}>
              <div className="w-full h-full bg-pink-200" />
            </Carousel.Item>
            <Carousel.Item index={2}>
              <div className="w-full h-full bg-sky-200" />
            </Carousel.Item>
          </Carousel.Wrapper>
          <Carousel.Dots
            imageLength={3}
            selectedColor="#fff"
            unSelectedColor="#000"
          />
          <Carousel.Move
            className="absolute left-0 h-full px-4 hover:bg-slate-200 hover:bg-opacity-20"
            direction="prev"
          >
            <LeftChevron
              width={24}
              fill="#ffffff"
            />
          </Carousel.Move>
          <Carousel.Move
            className="absolute right-0 h-full px-4 hover:bg-slate-200 hover:bg-opacity-20"
            direction="next"
          >
            <RightChevron
              width={24}
              fill="#ffffff"
            />
          </Carousel.Move>
        </Carousel>
      </div>
    </div>
  );
};

export default MainPageCarousel;
