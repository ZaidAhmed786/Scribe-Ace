import PriceBox from "@/components/global/pricing/PriceBox";
type Price = {
  prices: {
    name: string,
    save: string,
    price: string,
    monthly: string,
    packageList: string,
    number: string,
    start: string
  }[]
}
const Pricing = (props: Price) => {
  
  return (
    <section className="my-16">
      <div className="container m-auto px-3">
        <div className="section_title">
          <h2 className="text-color-third text-center text-4xl max-sm:text-2xl font-medium md:text-3xl lg:text-4xl">How much does the leading Writing company in USA cost?</h2>
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
