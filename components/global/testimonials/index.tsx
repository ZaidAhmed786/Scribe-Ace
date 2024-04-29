import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react"; 
import Image from "next/image";
import { useRef } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useDimensions from "@/hooks/use-dimensions"; 
type Prop = {
  testimonials: {
    name:string,
    url:string,
    role:string,
    details:string
  }[]
}
const Testimonials = (props: Prop) => {
  const { width } = useDimensions();

  return (
    <section className="container max-w-[90%] mx-auto mt-2 sm:pb-10 pb-8  relative">
      <h5 className="md:text-3xl text-color-third text-2xl font-bold mb-2 lg:text-4xl text-center">
        See What Our Clients Say About Us
      </h5>
      <Slides testimonials = {props.testimonials}/>
    </section>
  );
};

export default Testimonials;

const Slides = (props: Prop) => {
  const { width } = useDimensions();
  const swiperRef = useRef<any>(null);
  return (
    <>
      <Swiper
        slidesPerView={width < 600 ? 1 : 1} 
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        modules={[Navigation]}
        scrollbar={{ draggable: true }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper"
      >

        {
          props.testimonials.map((user:any, key:number) =>{
            return  <SwiperSlide key = {key.toString()}>
            <div className="carousel-item float-left w-full pt-8 ">
              <div className="flex flex-wrap justify-center">
                <div className=" w-full lg:w-8/12 px-0">
                  <div className="shadow-xl p-2 swiper-head testimonials-bg text-center rounded-3xl py-4 mt-12 relative">
                    <img src = {user.url} className = "mx-auto testimonial-img -mt-[90px] rounded-full w-36 h-36 object-cover" alt = ""/>
                    <h3 className="text-[#05396B] leading-6 text-xl py-6 font-bold">{user.name}</h3>
                    <h5 className="text-[#3D3D3D] leading-5 text-lg">{user.role}</h5>
                    <p className="text-[#1d1a1a] md:text-xl md:p-4 mt-4 w-[85%]  text-md leading-6  tracking-tight md:tracking-normal text-center italic mx-auto shadow-uyjh67\1741xl font-medium md:leading-7 mb-16">
                     {user.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          })
        }
      </Swiper>
      <div>
        <button
          className="prev-btn absolute z-10 m-auto"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <img
            src="/chevronprev.png"
            alt="solidery" 
          />
        </button>
        <button
          className="next-btn absolute z-10 m-auto"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img
            src="/chevronnext.png"
            alt="solidery" 
          />
        </button>
      </div>
    </>
  );
};
