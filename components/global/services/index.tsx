import Content from "./Content";
import Picture from "./Picture";

export type Prop = {
  data:{
    heading: string,
    authors: string,
    protect: string,
    handpick: string,
    riding: string,
    understand: string,
    variety: string,
    stream: string,
    url: string
  }
}
const Services = (props: Prop) => {
 
  return (
    <section>

      <div className="">
          <Content data = {props.data}/>
        </div>

    </section>
  );
};

export default Services;
