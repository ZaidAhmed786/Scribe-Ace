import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 navigation">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal "
      >
        <Link
          href="/"
          className={`${
            router.pathname === "/" ? "text-color-fourth" : "text-color-primary"
          } flex items-center font-semibold text-md`}
        >
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/book-publishing"
          className={` ${
            router.pathname === "/book-publishing"
              ? "text-color-fourth"
              : "text-color-primary"
          } flex items-center   font-semibold text-md`}
        >
          Book Publishing
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/book-editing"
          className={`${
            router.pathname === "/book-editing"
              ? "text-color-fourth"
              : "text-color-primary"
          } flex items-center font-semibold text-md`}
        >
          Book Editing
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/book-marketing"
          className={`${
            router.pathname === "/book-marketing"
              ? "text-color-fourth"
              : "text-color-primary"
          } flex items-center font-semibold text-md`}
        >
          Book Marketing
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/ghost-writing"
          className={`${
            router.pathname === "/ghost-writing"
              ? "text-color-fourth"
              : "text-color-primary"
          } flex items-center font-semibold text-md`}
        >
          Ghost Writing
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/illustration"
          className={`${
            router.pathname === "/illustration"
              ? "text-color-fourth"
              : "text-color-primary"
          } flex items-center font-semibold text-md`}
        >
          Illustration Designs
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/script-writing"
          className={`${
            router.pathname === "/script-writing"
              ? "text-color-fourth"
              : "text-color-primary"
          } flex items-center font-semibold text-md`}
        >
          Script Writing
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/proof-reading"
          className={`${
            router.pathname === "/proof-reading"
              ? "text-color-fourth"
              : "text-color-primary"
          } flex items-center font-semibold text-md`}
        >
          Proof Reading
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href="/book-cover-design"
          className={`${
            router.pathname === "/book-cover-design"
              ? "text-color-fourth"
              : "text-color-primary"
          } flex items-center font-semibold text-md`}
        >
          Book Cover Design
        </Link>
      </Typography>
    </ul>
  );

  return (
    <>
      <div className="shadow-[0px_3px_6px_#80808091]">
        <div className="flex justify-between items-center pt-5 px-4 m-auto max-w-[1367px]">
          <div>
            <Link
              href="/"
              className="text-color-primary md:text-[30px] font-semibold text-[20px]"
            >
              Scribe Ace
            </Link>
          </div>
          <div>
            <Link
              href="tel:+1 863 624 6770"
              className="bg-color-secondary font-semibold text-color-fourth bg inline-block md:text-xl md:py-2 md:px-8 py-1 px-3  rounded-[28px] sm:text-lg"
            >
              +1 (863) 624-6770
            </Link>
          </div>
        </div>
        <Navbar className="home_nav mx-auto py-2 px-4 lg:px-8 lg:py-6 rounded-none border-0">
          <div className="container mx-auto flex items-center justify-center text-blue-gray-900">
            <div className="hidden lg:block">{navList}</div>

            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? <>{humberger}</> : <>{menuBtn}</>}
            </IconButton>
          </div>
          <MobileNav open={openNav}>
            <div className="container mx-auto">{navList}</div>
          </MobileNav>
        </Navbar>
      </div>
    </>
  );
}

const menuBtn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const humberger = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
