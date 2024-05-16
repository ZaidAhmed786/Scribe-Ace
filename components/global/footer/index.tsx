import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-cover testimonials-bg">
      <div className=" flex lg:m-auto m-auto flex-col lg:flex-row ml-5 mr-8 footer_sec">
        <div className="  sm:justify-center">
          <h2 className="text-color-secondary font-semibold text-xl">
          <p> Beamen Tech LLC</p>
          </h2>
          <p className="text-color-fifth lg:font-medium font-normal lg:text-sm lg:max-w-sm mt-4 leading-7">
        
<p>564 4th Ave, San Bruno, CA 94066</p>
<p><a href="mailto:admin@cabledeal.live">admin@cabledeal.live</a></p>
<p><a href="tel:+1 (855)-437-9557">+1 (855) 437-9557</a></p>
          </p>
        </div>
        <div>
          <h3 className="text-color-secondary font-bold text-md lg:ml-20 sm:ml-7 mt-6 sm:mt-0 md:ml-0">
            Services
          </h3>
          <div className="flex flex-col sm:flex-row md:flex-row  lg:flex-row">
            <div className=" sm:flex-col md:flex-row lg:ml-10 sm:ml-7 mt-1 sm:mt-0">
              <ul className="">
                <li className="font-medium lg:text-sm text-black opacity-50 my-3 ">
                  <Link href="/website-development">Website Development</Link>
                </li>
                <li className="font-medium lg:text-sm text-black opacity-50 my-3">
                  <Link href="/mobile-development">Mobile Development</Link>
                </li>
                <li className="font-medium lg:text-sm text-black opacity-50 mt-3 mb-0 sm:my-3">
                  <Link href="/seo">Seo Services</Link>
                </li>
                <li className="font-medium lg:text-sm text-black opacity-50 my-3 ">
                  <Link href="/branding-services">Branding Services</Link>
                </li>
              </ul>
            </div>
            <div className=" sm:flex-col md:flex-row lg:ml-20 sm:ml-7 mt-1 sm:mt-0 sm:pt-6 md:pt-0">
              <ul className="">
                <li className="font-medium lg:text-sm text-black opacity-50 my-3 ">
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="font-medium lg:text-sm text-black opacity-50 my-3">
                  <Link href="/refund-policy">Refund Policy</Link>
                </li>
                <li className="font-medium lg:text-sm text-black opacity-50 my-3">
                  <Link href="/terms-conditions">Terms & Conditions</Link>
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

      <div className="max-w-[1252px] mx-auto py-4 flex md:flex-row gap-4 md:gap-0 flex-col justify-center items-center md:justify-center ">

        <img
          className="w-3/4 lg:w-2/6  md:mr-4 md:w-[50%]"
          src="payment-icon 1.png"
          alt=""
        />
      </div>
      <div className="container mx-auto px-4 bottom-1 pb-4 footer_border">
        <div className="flex flex-wrap justify-center items-center">
          <p className="text-white text-sm sm:text-base">
            Copyright © 2024 Beamen Tech LLC |{" "}
            <Link href="/refund-policy">Refund Policy</Link> |{" "}
            <Link href="/terms-conditions">Terms & Conditions </Link>|{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
