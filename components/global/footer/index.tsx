import Link from "next/link";

 
const Footer = () => {
  return (
    <footer className="w-full bg-cover testimonials-bg">
      <div className=" flex lg:m-auto m-auto flex-col lg:flex-row ml-5 mr-8 footer_sec">
        <div className="  sm:justify-center">
          <h2 className="text-color-secondary font-semibold text-xl">Logo</h2>
          <p className="text-color-fifth lg:font-medium font-normal lg:text-sm lg:max-w-sm mt-4 leading-7">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div>
          <h3 className="text-color-secondary font-bold text-md lg:ml-20 sm:ml-7 mt-6 sm:mt-0 md:ml-0">
            Services
          </h3>
          <div className="flex flex-col sm:flex-row md:flex-row  lg:flex-row">
            <div className=" sm:flex-col md:flex-row lg:ml-20 sm:ml-7 mt-1 sm:mt-0">
              <ul className="">
                <li className="font-medium lg:text-sm text-black opacity-40 my-3 ">
                <Link href="/">Book Publishing</Link>
                </li>
                <li className="font-medium lg:text-sm text-black opacity-40 my-3">
                  <Link href="/">Book Editing</Link>
                </li>
                <li className="font-medium lg:text-sm text-black opacity-40 mt-3 mb-0 sm:my-3">
                  <Link href="/">Book Marketing</Link>
                </li>
              </ul>
            </div>
            <div className=" sm:flex-col md:flex-row lg:ml-20 sm:ml-7 mt-1 sm:mt-0 sm:pt-6 md:pt-0">
              <ul className="">
                <li className="font-medium lg:text-sm text-black opacity-40 my-3 ">
                  <Link href="/">Ghost Writing</Link>
                </li>
                <li className="font-medium lg:text-sm text-black opacity-40 my-3">
                  <Link href="/">Illustration Designs</Link>
                </li>
                <li className="font-medium lg:text-sm text-black opacity-40 mt-3 mb-0 sm:my-3">
                  <Link href="/">Script Writing </Link>
                </li>
              </ul>
            </div>
            <div className=" sm:flex-col md:flex-row lg:ml-20 sm:ml-7 sm:pt-6 md:pt-0">
              <ul className="">
                <li className="font-medium lg:text-sm text-black opacity-40 my-3 ">
                  <Link href="/">Proof Reading</Link>
                </li>
                <li className="font-medium lg:text-sm text-black opacity-40 my-3">
                  <Link href="/">Book Cover Design</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pr-10 mt-3 sm:mt-0">
          <select
            id="countries"
            className="bg-color-primary  text-color-secondary text-md block mb-8 bg-transparent focus:bg-transparent focus:border-0 focus:outline-none font-bold "
          >
            <option selected className="text-color-fourth">
              Languages
            </option>
            <option value="US" className="text-color-fourth">
              United States
            </option>
            <option value="CA" className="text-color-fourth">
              Canada
            </option>
            <option value="FR" className="text-color-fourth">
              France
            </option>
            <option value="DE" className="text-color-fourth">
              Germany
            </option>
          </select>
        </div>
      </div>
      <div className="max-w-[1252px] mx-auto py-4 flex md:flex-row gap-4 md:gap-0 flex-col justify-center items-center md:justify-between ">
          <div className="flex space-x-3 ml-4 ">
            
            <span className=" bg-[/FFFFFF] rounded-[50%] h-12 w-12 flex items-center justify-center social-icon">
              <img src="iconFirst.png" alt="/" className="white"  />
            </span>

            <span className="bg-[/FFFFFF] rounded-[50%]  h-12 w-12 flex items-center justify-center social-icon">
              <img src="iconeTwo.png" alt="/" className="white" />
            </span>
            <span className="bg-[/FFFFFF] rounded-[50%]  h-12 w-12 flex items-center justify-center social-icon">
              <img src="iconThree.png" alt="/" className="white" />
            </span>
          </div>
          <img className="w-3/4 lg:w-2/6  md:mr-4 md:w-[50%]" src="payment-icon 1.png" alt="" />
        </div>
    </footer>
  );
};

export default Footer;
