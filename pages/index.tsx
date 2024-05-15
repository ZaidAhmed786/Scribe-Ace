import Header from "@/components/global/header";
import Hero from "@/components/global/hero";
import Steps from "@/components/global/steps";
import Testimonials from "@/components/global/testimonials";
import Cta from "@/components/global/cta";
import Services from "@/components/home/services";
import Benifits from "@/components/home/benefits";
import Blogs from "@/components/global/writing-blogs";
import Portfolio from "@/components/global/portfolio";
import Pricing from "@/components/global/pricing";
import Footer from "@/components/global/footer";
import props from "./props.json" 
import Head from "next/head";



export default function Home() {

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/fav.png"  />
      </Head>
      <main>
      <Header />
      <Hero
        heading={props.hero_home.heading}
        description={props.hero_home.description}
        listing={props.hero_home.listing}
        data = {props.statistics_home}
      />
      <Services />
      <Cta title = {props.cta_title} details = {props.cta_details}/>
      <Steps steps = {props.steps_home}/> 
      <Benifits benefits1 = {props.benefits1} benefits2={props.benefits2}/>
      <Blogs data={props.blogs_home} />
      {/* <Portfolio /> */}
      <Pricing prices = {props.pricing_home}/>
      <Testimonials testimonials = {props.testimonials_home}/>
      <Footer />
      </main>
    </>
  );
}
