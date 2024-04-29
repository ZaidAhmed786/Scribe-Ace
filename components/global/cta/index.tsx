import Link from "next/link";

type Prop = {
  title: string;
  details: string; 
};
const Cta = (props:Prop) => { 
    return(
      <section className="body-font testimonials-bg2 w-full px-6">
      <div className=" mx-auto">
        <div className="flex flex-col text-center  sm:mb-14 mb-8">
          <p className="xl:text-4xl  lg:font-medium text-xl font-medium title-font md:mb-4 mb-7 text-color-secondary sm:mt-20 mt-14 px-4 leading-8 md:text-3xl lg:text-4xl">{props.title}
          </p>
          <p className=" mx-auto leading-5 text-base xl:text-xl md:mt-5 xl:font-normal md:text-md md:px-8 px-4 font-normal text-rgba[0,0,0,0.7] opacity-90">{props.details}</p>
        </div>
        <div className="flex sm:justify-center justify-center">
    
    <Link className="sm:mb-24 mb-16 lg:px-20 lg:py-4 md:px-10 md:py-3  px-9 py-2  rounded-[59px] text-color-fourth bg-cover lg:text-xl lg:font-bold md:text-md text-md font-medium"   href='tel:+1 863 624 6770'style={{backgroundImage:'url("Button (2).png")' }}>+1 (863) 624-6770</Link>
    </div>
      </div>
    </section>
    );
  };
  
  export default Cta;
  