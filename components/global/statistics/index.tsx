 
 type Stat = {
  statistics:{ 
    count: number;
    title: string;
  }[]
}
const Statistics = (props: Stat) => {
  return <section className="text-color-fourth text-3xl mb-0 mt-24 backdrop-blur-2xl statistics-bg">
  <div className="container  py-8 sm:py-1 mx-auto w-2/3">
    <div className="flex  flex-wrap -m-4 text-center">
      {
        props.statistics?.map((data:any, i:number) =>(
          <div className="p-4 py-4 md:w-1/4 sm:w-1/2 sm:py-8 w-full" key = {i.toString()}>
            <h2 className="title-font font-medium sm:text-3xl text-2xl">{data.count}</h2>
            <span className="leading-relaxed text-md block">{data.title}</span>
          </div>
        ))
      }
    </div>
  </div>
  </section>;
};

export default Statistics;