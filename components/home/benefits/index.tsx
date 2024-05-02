 
const Benifits = (props: any) => {
  return (
    <section className="text-gray-600 body-font testimonials-bg">
      <div className="container px-5 md:py-24 py-14 mx-auto">
        <h1 className="sm:text-4xl text-2xl font-bold title-font text-center text-color-secondary md:text-3xl lg:text-4xl sm:mb-14 mb-8">
          Benefits Of Our Content
        </h1>
        <div className="flex flex-wrap  sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="px-4 md:w-1/2 flex lg:text-left text-center flex-col ">
            {props.benefits1.map((item:any, i:number) => {

              return <div className="sm:flex md:mb-16 px-4 mb-10" key = {i.toString()}>
              <div className="xl:w-20 xl:h-20 md:w-14 md:h-14 w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4 flex-shrink-0">
                <img src = {item.url} alt="" />
              </div>
              <div className="flex-grow sm:pl-6">
                <h2 className="text-color-secondary text-xl title-font font-bold mb-2 sm:px-3">
                  {item.title}
                </h2>
                <p className="leading-6 max-w-xl lg:text-lg text-sm font-normal lg:font-medium text-color-fifth opacity-70 sm:px-3">
                  {item.details}
                </p>
              </div>
            </div>
            })}
          </div>
          <div className="px-4 md:w-1/2 flex lg:text-left text-center flex-col">
          {props.benefits2.map((item:any, i:number) => {

            return  <div className=" sm:flex md:mb-16 sm:mb-10 px-4 mb-10" key={i.toString()}>
            <div className="xl:w-20 xl:h-20 md:w-14 md:h-14 w-12 h-12 inline-flex items-center justify-center rounded-full  text-indigo-500 mb-4 flex-shrink-0">
              <img src="setting.png" alt="" />
            </div>
            <div className="flex-grow sm:pl-6">
              <h2 className="text-color-secondary text-xl title-font font-bold mb-2 sm:px-3">
                Professional In-house Team
              </h2>
              <p className="leading-6 text-base max-w-xl lg:text-lg text-sm font-normal lg:font-medium text-color-fifth opacity-70 sm:px-3">
                Behind all of our content is a team of 4 word masters. Our
                copy editors work closely with our team of writers to produce
                the custom content with all the specifications you want,
                whether a short and sweet brief or a detailed, in-depth one is
                provided. As a content writing services company we have helped
                more than 200 hundred different clients with their content
                writing in the last two years alone, and we want this number
                to grow.
              </p>
            </div>
          </div>
           })}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Benifits;
