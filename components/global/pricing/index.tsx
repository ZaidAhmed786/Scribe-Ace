import PriceBox from "@/components/global/pricing/PriceBox";
  
const Pricing = (props: any) => {
  
  return (
    <section className="my-16">
      <div className="container m-auto px-3">
        <div className="section_title">
          <h2 className="text-color-third text-center text-4xl max-sm:text-2xl font-medium md:text-3xl lg:text-4xl">How much does it cost?</h2>
          <p className="text-color-third text-center text-2xl max-sm:text-lg font-medium md:text-xl lg:text-2xl">We guarantee that you’ll get a great website no matter what your budget is.</p>
        </div>

        <div className="flex justify-between flex-col sm:flex-row my-6">
          {props.prices.map((data: any, i: number) => (
            <PriceBox
              key={i.toString()}
              name={data.name}
              save={data.save}
              price={data.price}
              monthly={data.monthly}
              packageList ={data.packageList}
              number = {data.number}
              start = {data.start}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
