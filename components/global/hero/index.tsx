import Form from "@/components/global/hero/Form";
import Content from "@/components/global/hero/Content"; 
import Statistics from "../statistics";

  type Prop = {
    heading: string;
    description: string;
    listing?: string[]; 
    data: {title:string, count:number}[]
  };
 
const Hero = (props: Prop ) => {
  console.log(props)
  return (
    <section className="relative hero-bg bg-center bg-cover">
        <div className="flex flex-wrap">
          
          <div className="container w-4/5 mx-auto">
            <div className="flex flex-wrap items-center">
              <Content heading = {props.heading} description= {props.description} listing={props.listing&&props.listing}/>
              <Form />
            </div>
          </div>
        </div>
        <Statistics statistics={props.data} />
    </section>
  );
};

export default Hero;