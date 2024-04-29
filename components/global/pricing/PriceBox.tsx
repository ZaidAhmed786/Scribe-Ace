import Image from "next/image";
import tick from "../../../public/assets/images/checkmark.svg";


const PriceBox = ({name, save, price, monthly, packageList, number, start}:any) => {
    return (
      <div className="testimonials-bg pricing_sec rounded-[30px] sm:w-[31%] w-[94%] mx-auto mb-8 sm:mb-0">
        <h6 className="text-center text-color-seventh font-semibold text-2xl pt-7 pb-11 package-heading">{name}</h6>
        <div className="bg-color-third text-center flex justify-center mx-auto flex-col w-[160px] h-[160px] rounded-[50%] price_Col">
          <p className="text-color-secondary text-sm font-medium">{save}</p>
          <h5 className="text-color-secondary text-[32px] font-semibold">{price}</h5>
          <p className="text-color-secondary font-medium">{monthly}</p>
        </div>
        <ul className="pb-7 mt-7">
            {packageList.map((data:any)=>{
              return(
              <li className="flex text-[12px] font-medium py-2 px-3">
               <Image src={tick} alt="" className="mr-2" />
                {data.list}
                </li> 
              )
            })}
          </ul>
          <div className="my-5">
          <a href="/" className="bg block text-center text-color-fourth font-semibold md:text-[16px] sm:text-xl text-lg rounded-[23px] w-5/6 mx-auto mb-3 py-2">{number}</a>
          <a href="/" className="bg block text-center text-color-fourth font-semibold md:text-[16px] sm:text-xl text-lg rounded-[23px] w-5/6 mx-auto py-2">{start}</a>
          </div>
      </div>
    )
  }
  
  export default PriceBox