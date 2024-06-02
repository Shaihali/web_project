import { Swiper, SwiperSlide } from "swiper/react";
import { LargeCardComponent } from "../Cards";

// import { useQuery } from "@tanstack/react-query";
import { ICardData } from "@/types";
import "swiper/css";
import "./Carousel.css";

interface IData {
  // временно

  info: ICardData[];
}
import db from "../../db/info.json"; // временно
const URL = process.env.NEXT_PUBLIC_URL;
export const CarouselComponent = () => {
  // const { data, isLoading, isSuccess } = useQuery({
  //   queryFn: async () => {
  //     const res = await fetch(`${URL}api/info`);

  //     return await res.json();
  //   },
  //   queryKey: ["info"],
  // });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }
  const data: IData = { info: db }; // временно
  const isSuccess = true; // временно
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      className="mySwiper"
      breakpoints={{
        1366: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        // when window width is >= 1146px
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // when window width is >= 640px
        540: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        // when window width is >= 540px
        376: {
          slidesPerView: 1,
          spaceBetween: 10,
          width: 358,
        },
        // when window width is >= 376px
      }}
    >
      {isSuccess
        ? data.info.map((item: ICardData) => (
            <SwiperSlide key={item.id}>
              <LargeCardComponent data={item} />
            </SwiperSlide>
          ))
        : null}
    </Swiper>
  );
};
