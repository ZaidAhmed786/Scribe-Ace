import Image from "next/image";
import icon from "../../../public/assets/images/icon.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const StepsBox = ({heading, text, num,style }: any) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <div className="step_box bg2 relative" data-aos={style} data-aos-offset="300"
     data-aos-easing="ease-in-sine" data-aos-once="true" data-aos-duration="500">
        <h6 className="text-xl text-color-fourth font-medium">{heading}</h6>
        <p className="lg:text-lg md:text-[16px] text-[16px]">{text}</p>
      </div>
      <div className="flex items-center number_row absolute right-0 left-0 m-auto w-fit z-10 top-6"
        data-aos="fade-in-out"   
        data-aos-delay="300"
        data-aos-offset="300"
        data-aos-once="true"  
      >
        <Image src={icon} alt="" 
        />
        <h6 className="text-color-primary text-4xl font-semibold">{num}</h6>
      </div>
    </>
  );
};

export default StepsBox;
