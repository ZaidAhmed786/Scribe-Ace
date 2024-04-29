type Prop = {
  url:string
}

const Picture = (props:Prop) => {
  return <>
    <div className="lg:w-1/2 w-5/6 md:w-3/5 sm:mx-auto mx-auto "> 
      <img className="object-cover  w-full rounded-tl-3xl " alt="hero" src={props.url} />
    </div>
  </>;
};

export default Picture;
