import Navbar from "./Navbar";
import hero_img from "../assets/frontend_assets/hero_img.png"
import { assets , products} from "../assets/frontend_assets/assets";
import { useState } from "react";
import { Link } from "react-router";
import Footer from "./Footer";

function Home() {
      const [product_imp, setproduct_imp] = useState(products);
      const [assets_imp, setassets_imp] = useState(assets);
  return (
    <div className="grid justify-center">
     <Navbar />
      <div className=" w-full ">
        
        {/* Home banner section */}
         <div className=" w-full flex  mt-3 border-1 m-auto border-neutral-400">
               <div className=" grid h-100 w-[50%]  justify-center">
                  
                  <div className="flex mt-30">
                      <p className="font-bold text-3xl -mt-5 mr-2 text-neutral-700">____</p>
                      <p className="font-semibold text-6 text-neutral-700">OUR BESTSELLERS</p>
                  </div>
                  <div className="">
                    <h1 className="text-6xl text-neutral-700 font-serif">Latest Arrivals</h1>
                  </div>
                  <div className="flex mb-30">
                    <p className="font-bold text-neutral-700">SHOP NOW</p>
                    <p className=" font-extrabold text-3xl -mt-5 ml-2 text-neutral-700">____</p>
                  </div>
               </div>
               <div className=" h-100 w-[50%]">
                  <img src={hero_img} className="h-[99.5%] w-[100%]"/>
               </div>
         </div>

         {/* TITLE Latest collections*/}
         <div className="grid justify-center ">
             <div className="flex mt-15 ml-[30%]">
                 <p className="text-neutral-700 text-3xl font-sans mr-2">LATEST</p>
                 <p className="text-gray-800 text-3xl font-semibold">COLLECTIONS</p>
                 <p className=" font-extrabold text-3xl -mt-4 ml-2 text-neutral-700">____</p>
             </div>
             <p className="font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
         </div>

         {/* Letest product section */}
         <div className=" flex flex-wrap w-270 max-w-[110%]  m-auto mt-5">
      
             {Array.from({length: 10}).map((element,index)=>(
              <div className="size-[17%]  m-4" key={index}>
                <Link to={`product/${product_imp[index]._id}`}>
                <img src={product_imp[index].image[0]} key={index} className=" cursor-pointer  transform transition  ease-in-out hover:scale-110 hover:rounded-sm"/>
                </Link>
                <p className=" text-neutral-700 mt-2 font-semibold">{product_imp[index].name}</p>
                <p className="font-bold font-serif text-neutral-700">${product_imp[index].price}</p>
              
              </div>                
             ))}
             
         </div>

         {/* 2 TITLE */}
         <div className="grid justify-center m-auto">
             <div className="flex mt-15 ml-[30%]">
                 
                 <p className="text-gray-700 text-3xl font-semibold">BEST SELLERS</p>
                 <p className=" font-extrabold text-3xl -mt-4 ml-2 text-neutral-700">____</p>
             </div>
             <p className="font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
         </div>

         {/* Best seller products*/}
         <div className=" flex flex-wrap w-270 max-w-[110%] m-auto  mt-5">
      
             {product_imp.filter(element => element.bestseller).map((element, index)=>(
              <div className="size-[17%]  m-4" key={index}>
              <Link to={`product/${element._id}`}> 
              <img src={element.image} key={index} className=" cursor-pointer  transform transition hover:scale-110  ease-in-out hover:rounded-sm"/>
              </Link> 
              <p className=" text-neutral-700 mt-2 font-semibold">{element.name}</p>
              <p className="font-bold font-serif text-neutral-700">${element.price}</p>
              {/* hover:rounded-sm hover:border-neutral-700 */}
            </div>    
             ))}
             
         </div>

         {/* exchange policy, 7 days return policy */}
         <div className=" w-[90%] m-auto h-40 mt-25 flex justify-between">
              <div className="text-center">
                   <img src={assets_imp.exchange_icon}  className="m-auto size-13"/>
                   <p className="mt-5 font-bold text-neutral-700">Easy Exchange Policy</p>
                   <p className="font-semibold text-neutral-400">We offer hassle free exchange policy</p>
              </div>
             <div className="text-center">
                  <img src={assets_imp.quality_icon} className="m-auto size-13"/>
                  <p className="mt-5 font-bold text-neutral-700">7 Days Return Policy</p>
                  <p className="font-semibold text-neutral-400">We provide 7 days free return policy</p>
             </div>
            <div className="text-center">
                  <img src={assets_imp.support_img} className="m-auto size-13"/>  
                  <p className="mt-5 font-bold text-neutral-700">Best customer support</p> 
                  <p className="font-semibold text-neutral-400">we provide 24/7 customer support</p>   
            </div>
         </div>

         
         {/* Email Footer */}
         <footer>
             <div className="w-full  mt-5 grid">
                <p className="text-center text-2xl font-semibold text-neutral-800">Subscribe now & get 20% off</p>
                <p className="text-center mt-3 font-semibold text-neutral-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <span className="flex mt-5 justify-center">
                    <input type="email" className=" border-1 w-100 font-semibold pl-5 placeholder:text-gray-500" placeholder="Enter your email"/>
                    <button className=" bg-black w-40 h-11 text-white">SUBSCRIBE</button>
                </span>
             </div>
         </footer>
        
        

      <Footer assets_imp={assets_imp}/>

      </div>
    </div>
  );
}

export default Home;
