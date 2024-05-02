import Link from "next/link";

type Prop = {
  title: string;
  details: string;
};
const Cta = (props: Prop) => {
  return (
    <section className="body-font testimonials-bg2 w-full px-6">
      <div className=" mx-auto">
        <div className="flex flex-col text-center  sm:mb-14 mb-8">
          <p className="xl:text-4xl  lg:font-medium text-xl font-medium title-font md:mb-4 mb-7 text-color-secondary sm:mt-20 mt-14 px-4 leading-8 md:text-3xl lg:text-4xl">
            Search Engine Marketing with PPC
          </p>
          <p className="mx-auto leading-8 text-secondary text-justify xl:text-xl md:mt-3 xl:font-normal md:text-md md:px-4 px-2 font-normal ">
            Search Engine Marketing (SEM) with Pay-Per-Click (PPC) is a powerful
            digital marketing strategy focused on enhancing brand visibility in
            Search Engine Results Pages (SERPs) like Bing, Yahoo, and Google. By
            targeting niche keywords, SEM aims to drive traffic and increase
            conversions through optimized ads. Unlike in the past, SEM now
            exclusively refers to paid search advertising, offering advertisers
            precise control and measurable results. SEM operates by leveraging
            search engine algorithms to deliver relevant search results based on
            user data such as location and browsing history. Sponsored ads are
            strategically placed at the top of SERPs or alongside organic search
            results. Keywords are fundamental to PPC search engine marketing;
            identifying and utilizing brand-related keywords ensures visibility
            to the right audience. Our PPC firm specializes in SEM, utilizing
            platforms like Google AdWords, Bing Ads, and Yahoo Search Ads to
            position your brand prominently in SERPs. By targeting high-intent
            searchers, we drive quality traffic and maximize conversions for
            your business.
          </p>
        </div>
        <div className="flex sm:justify-center justify-center">
          <Link
            className="sm:mb-24 mb-16 lg:px-20 lg:py-4 md:px-10 md:py-3  px-9 py-2  rounded-[59px] text-color-fourth bg-cover lg:text-xl lg:font-bold md:text-md text-md font-medium"
            href="tel:+1 863 624 6770"
            style={{ backgroundImage: 'url("Button (2).png")' }}
          >
            Consult Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
