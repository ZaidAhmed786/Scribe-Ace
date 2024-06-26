import Head from "next/head"; 
import Header from "@/components/global/header";
import Hero from "@/components/global/hero";
import Steps from "@/components/global/steps";
import Testimonials from "@/components/global/testimonials";
import Cta from "@/components/global/cta";
import Services from "@/components/global/services"; 
import Blogs from "@/components/global/writing-blogs"; 
import Pricing from "@/components/global/pricing";
import Footer from "@/components/global/footer";
import props from "./props.json"
export default function ScriptWriting() {
  return (
    <>
      <Head>
        <title>Script Writing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.png" />
      </Head>
      <main>
      <Header />
      <Hero
        heading={props.hero_home.heading}
        description={props.hero_home.description}
        listing={props.hero_home.listing}
        data = {props.statistics_home}
      />
      <Services data = {props.service_data}/>
      <Cta title = {props.cta_title} details = {props.cta_details}/>
      <Steps steps = {props.steps_home}/> 
      <Blogs data={props.blogs_home} /> 
      <Pricing prices = {props.pricing_home}/>
      <Testimonials testimonials = {props.testimonials_home}/>
      <Footer />
      </main>
    </>
  );
}