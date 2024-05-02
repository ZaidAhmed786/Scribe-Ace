import Picture from "./Picture";
import { Prop } from '.'
const Content = (props: Prop) => {
  return (
    <section className="bg-color-eight body-font mt-8">
      <div className=" flex lg:flex-row flex-col">
       
        <div className="md:pl-16 flex flex-col md:items-start md:text-left  xl:mb-0 text-center">

          <h1 className="px-8 text-left title-font xl:text-4xl md:text-3xl sm:pr-8 sm:font-bold text-xl mb-4 font-semibold text-color-third md:max-w-3xl">{props.data.heading}
          </h1>

          <p className="px-8 text-left mb-8 leading-7 md:pr-12 text-color-fifth opacity-70 xl:text-xl sm:font-normal lg:text-xl">
            {props.data.authors}
          </p>

        </div>

         <div className="md:pl-16 lg:pl-0 lg:pr-8 flex flex-col md:items-start md:text-left  xl:mb-0 text-left">

          <h1 className="px-8 lg:px-0 title-font sm:pr-8 mb-4 md:max-w-3xl xl:text-3xl md:text-2xl sm:font-bold text-color-third text-xl font-semibold">{props.data.protect}
          </h1>

          <p className="mb-8 leading-5 mx-8 lg:mx-0 text-left md:pr-10  text-color-fifth opacity-70 xl:text-xl sm:text-sm sm:text-left sm:pr-8 text-sm font-normal md:leading-7">{props.data.handpick}
          </p>
        </div> 
      </div>


      <div className="lg:flex-row lg:flex items-center lg:justify-between ">
      
        <div className="flex flex-col lg:w-[40%] ">

        <div className=" md:pl-16 flex  flex-col md:items-start md:text-left ">
          <h1 className="text-left px-8 title-font lg:w-[71%]  xl:text-3xl mb-4 sm:font-bold md:text-2xl text-color-third text-xl font-semibold " >{props.data.riding}
          </h1>
          <p className="px-8 mb-8 leading-5 text-color-fifth opacity-70 xl:text-xl md:text-md  
              font-normal text-sm md:leading-7">
              {props.data.understand}
          </p>
        </div>

        <div className="md:pl-16 flex  flex-col md:items-start md:text-left">

          <h1 className="px-8 title-font xl:text-3xl mb-4 sm:font-bold md:text-2xl text-color-third text-xl font-semibold ">{props.data.variety}
          </h1>

          <p className="px-8 mb-8 leading-5 text-color-fifth opacity-70 xl:text-xl md:text-md  
              font-normal text-sm md:leading-7">
            {props.data.stream}
          </p>
        </div>
        </div>
        <Picture url={props.data.url} />
      </div>
    </section>
  );
};

export default Content;
