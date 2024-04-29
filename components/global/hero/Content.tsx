 
const Content = ({ heading, description, listing}: any) => {
  return (
    <div className="lg:w-1/2 pr-2 mx-auto mt-8">
      <h1 className={`lg:text-4xl text-2xl text-heading md:text-3xl sm:text-3xl pt-4  font-bold lg:py-4 md:py-2 letter-tight leading-10 text-left relative banner   text-color-secondary `}>
        {heading}
      </h1>
      <p className={`text-left py-6 leading-7 font-medium opacity-80   text-color-secondary `}>
        {description}
      </p>
      <ul className={`mb-6 space-y-3 lg:py-3 lg:text-left md:text-center text-white`}>
        {listing?.map((list: string, i: number) => {
          return (
            <li className="flex items-center space-x-3" key={i.toString()}>
              <svg
                className="flex-shrink-0 w-5 h-5 text-white bg-color-third rounded-full p-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-dm font-semibold leading-24 text-base opacity-70">
                {list}
              </span>
            </li>
          );
        })}
      </ul>
       
    </div>
  );
};

export default Content;