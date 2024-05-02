import Link from "next/link";
import React from "react";
import data from "./data.json";

function Services() {
  return (
    <section className="bg-[#04099212] pt-16 pb-10">
      <div className="text-gray-950 xl:w-[90%] lg:w-[100%] md:w-[90%] w-[95%] mx-auto">
        <h1 className="font-extrabold text-4xl text-center max-sm:text-2xl text-[#389583] md:text-3xl lg:text-4xl ">
          How does a top website design company operate in the USA?
        </h1>
        <p className="text-lg mt-4 mb-16 text-center text-black max-sm:text-xs max-w-[72%] mx-auto">
          Web Developers INC focuses on delivering highly competitive web
          designing services for different businesses around the country.
          Whether it is an emerging fashion brand or a construction company, our
          approach generates impressive results. Want to know the best part? We
          offer other services as well
        </p>
        <div className="flex flex-wrap md:flex-wrap justify-center md:ml-8 ml-8">
          {data.item.map((item: any, i: number) => {
            return (
              <div
                className="p-2 py-4 bg2 pt-16 max-sm:pt-6 lg:w-[27%] xl:max-w-[32%] mr-6 border-4 border-color-primary hover-class hover:border-gray-300
           w-full sm:w-[40%] md:w-[33%] mb-8 shadow-xl rounded-[50px] work_col"
                key={i.toString()}
              >
                <div className="w-20 h-16 mb-16 inline-flex items-center ">
                  <img className="ml-6" src={item.url} alt="" />
                </div>
                <div className="flex-grow text-hover pl-6">
                  <h2 className="text-[#05396B] text-lg title-font font-bold mb-2 pt-4">
                    {item.title}
                  </h2>
                  <p className="leading-loose text-[#202020c4] ">
                    {item.details}
                  </p>
                </div>
                <Link
                  href="/"
                  className=" ml-32 text-[#05396B] font-bold text-[14px] read_more_link
           inline-flex items-center "
                >
                  See More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
