import React, { useEffect, useState } from "react";
import { cartProducts, assets } from "../assets/frontend_assets/assets";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Cart() {
     const [data, setdata]= useState(cartProducts);
     function handel_deleteProduct(element){
         const result = data.filter(product => product._id !== element._id)
         setdata(result)
     }
     
     const [sum, setsum] = useState()
     useEffect(()=>{
            setsum(data.reduce((accumulator, currentValue)=> accumulator + currentValue.price, 0)); 
     },[data])
     console.log(sum)

  return (
    <div className="grid justify-center ">
      <Navbar />
      <hr className="w-[100%] mt-4 text-neutral-200 font-bold mb-5" />

      <div className="flex  ">
        <p className="text-neutral-500 mb-5 text-2xl font-sans mr-2">YOUR</p>
        <p className="text-gray-800 text-2xl font-semibold">Cart</p>
        <p className=" font-extrabold text-3xl -mt-4 ml-2 text-neutral-700">
          ____
        </p>
      </div>

      {/* Products */}
      {data.map((element, index) => (
        <div className="mb-5" key={index}>
          <hr className="w-[100%] text-neutral-200 font-bold mb-4" />
          <span className=" flex justify-between items-center">
            <img src={element.image} className="w-20 " />
            <span className="grid -ml-59">
              <p className="font-semibold font-serif text-[18px] mb-3 text-neutral-600">
                {element.name}
              </p>
              <p className="font-serif text-[20px]">
                ${element.price}{" "}
                <button className="cursor-pointer border text-neutral-600 border-neutral-300 ml-3 w-10 h-9">
                  M
                </button>
              </p>
            </span>
            <input type="number" min="1" max="100" value="1" className="border px-2 h-8 w-17 border-neutral-400"/>
            <img src={assets.bin_icon} className="w-6 cursor-pointer" onClick={()=>handel_deleteProduct(element)}/>
          </span>
        </div>
      ))}

     <hr className="w-[100%] text-neutral-200 font-bold mb-9" />
     

            <div className="grid justify-end">
                 <span className="flex mr-50">
                 <p className="text-neutral-500 mb-10 text-2xl font-sans mr-2">CART</p>
                 <p className="text-gray-800 text-2xl font-semibold">TOTALS</p>
                 <p className=" font-extrabold text-3xl -mt-4 ml-2 text-neutral-700">____</p>
                 </span>
                 <span className="grid -mt-6">
                     <span className="flex justify-between w-100 border-b font-normal border-neutral-300">
                        <p className="">Subtotal</p>
                        <p className="">$ {sum}</p>
                     </span>
                     <span className="flex mt-2 justify-between w-100 border-b font-normal border-neutral-300">
                        <p className="">Shipping Fee</p>
                        <p className="">$ {sum===0?0:10.00}</p>
                     </span>
                     <span className="flex mt-2 justify-between w-100  font-bold border-neutral-300">
                        <p className="">Total</p>
                        <p className="">$ {sum===0?0:sum+10}</p>
                     </span>
                 </span>
                 <button className="mt-5 border py-3 px-5 font-semibold hover:bg-black hover:text-white transition ease-in-out duration-600">
                     PROCEED TO CHECKOUT
                </button>
             </div>

         <Footer assets_imp={assets}/>
    </div>


  );
}

export default Cart;
