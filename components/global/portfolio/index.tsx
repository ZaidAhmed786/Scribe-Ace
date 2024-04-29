import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import useDimensions from "@/hooks/use-dimensions";

const Portfolio = () => {
  const {width} = useDimensions()
  const data = [
    {
      img: "/poster.png",
    },
    {
      img: "/Poster(1).png",
    },
    {
      img: "/poster(2).png",
    },
    {
      img: "/poster(3).png",
    },
    {
      img: "/poster(4).png",
    },
    {
      img: "/poster(5).png",
    },
    {
      img: "/poster(6).png",
    },
    {
      img: "/poster(3).png",
    },
    {
      img: "/poster.png",
    },
    {
      img: "/poster(2).png",
    },
    {
      img: "/poster.png",
    },
    {
      img: "/Poster(1).png",
    },
    {
      img: "/poster(2).png",
    },
    {
      img: "/poster(3).png",
    },
    {
      img: "/poster(4).png",
    },
    {
      img: "/poster(5).png",
    },
    {
      img: "/poster(6).png",
    },
    {
      img: "/poster(3).png",
    },
    {
      img: "/poster.png",
    },
    {
      img: "/poster(2).png",
    },
  ];
  return (
    <section className="text-gray-600 body-font testimonials-bg w-full pb-10">
      <div className=" mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="xl:text-4xl font-medium lg:text-3xl md:text-3xl lg:font-bold text-2xl title-font mb-4 text-color-secondary mt-16 px-4">
            Books We have Published
          </h1>
          <p className=" mx-auto leading-6 text-base xl:text-xl lg:text-lg  text-md px-3 font-normal text-color-fifth">
            To determine which content writing service will suit your needs,
            explore what we offer at our content writing services company.
          </p>
        </div>
        <Swiper
          slidesPerView={(width < 600 ) ? 3 : (width < 800 ) ? 5 : 8}
          spaceBetween={0}
            
          pagination={false}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          modules={[Autoplay]}
        >
          {data.map((data:any, i:number) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex w-full md:py-5">
                  <img alt="gallery" src={data.img} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
