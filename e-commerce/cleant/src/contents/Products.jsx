import { useParams, Link } from "react-router";
import { products, assets , cartProducts} from "../assets/frontend_assets/assets";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

function Products() {
    //params
    const {id} = useParams();
    //useStates
    const [product_imp, setproduct_imp] = useState(products); 
    const [assets_data, setAsset_data] = useState(assets);
    const [related_products, setRelated_products] = useState([])
   
    
    
    //product find and filter
    const [product,setproduct]= useState(product_imp.find((element)=> element._id == id));
    const data = product_imp.filter(element => element.name == product.name && element._id != id)
    
    //useEffects
    useEffect(() => {
      window.scrollTo(0, 0)
      setRelated_products(data)
    }, [id])

    function handleImagechange(element){
         window.scrollTo({top:0, behavior: "smooth"})
         setproduct(element);
    }

    function handle_cartproduct(){
      cartProducts.push(product);
    }

  return (
    <div className="grid justify-center">
        <Navbar/>
        <hr className="w-[100%] mt-4 text-neutral-200 font-bold mb-10"/>
        <div className="flex">
             <img src={product.image} className=" w-auto h-30 mr-3"/>
             <img src={product.image} className=""/>
             <div className="grid ml-10">
                 <p className="font-bold text-2xl " id="style">{product.name}</p>
                 <span className="flex gap-1 size-3">
                    <img src={assets_data.star_icon}/>
                    <img src={assets_data.star_icon}/>
                    <img src={assets_data.star_icon}/>
                    <img src={assets_data.star_icon}/>
                    <img src={assets_data.star_dull_icon}/>
                    <p className="">(122)</p>
                 </span>
                 <h1 className="font-black font-serif text-3xl">${product.price}</h1>
                 <div className="w-110">
                     <p className="font-semibold text-[15px] text-neutral-700">{product.description}</p>
                 </div>
                 <p className="">Select Size</p>
                 <span className="flex ">
                      <button className="border py-2 px-4 hover:cursor-pointer bg-gray-100 mr-2 h-10 border-gray-200">S</button>
                      <button className="border py-2 px-4 hover:cursor-pointer bg-gray-100 mr-2 h-10 border-gray-200">M</button>
                      <button className="border py-2 px-4 hover:cursor-pointer bg-gray-100 mr-2 h-10 border-gray-200">L</button>
                      <button className="border py-2 px-4 hover:cursor-pointer bg-gray-100 mr-2 h-10 border-gray-200">XL</button>
                      <button className="border py-2 px-4 hover:cursor-pointer bg-gray-100 mr-2 h-10 border-gray-200">XXL</button>
                 </span>
                 <button className="bg-black text-white font-semibold h-11 w-37 text-[14px]" onClick={handle_cartproduct}>ADD TO CART</button>
                 <hr className=" text-gray-300"/>
                 <span className="">
                   <p className="font-semibold text-[14px] text-neutral-500">100% Original product.</p>
                   <p className="font-semibold text-[14px] text-neutral-500">Cash on delivery is available on this product.</p>
                   <p className="font-semibold text-[14px] text-neutral-500">Easy return and exchange policy within 7 days.</p>
                 </span>
             </div>

        </div>


        {/* description  */}
        <div className="flex mt-18">
              <b className=" border border-gray-300 px-3 py-2">Description</b>
              <p className="border border-gray-300 px-3 py-2">Reviews (122)</p>
        </div>
        <span className="w-250">
            <p className="font-medium text-[14px] text-neutral-500 border py-5 px-5 border-gray-300">An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer. E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
        </span> 
        
        {/* TITLE */}
        <div className="grid justify-center ">
             <div className="flex mt-15 ">
                 <p className="text-neutral-700 text-center text-3xl font-sans mr-2">RELATED</p>
                 <p className="text-gray-800 text-3xl text-center font-semibold">PRODUCTS</p>
                 <p className=" font-extrabold text-3xl text-center -mt-4 ml-2 text-neutral-700">____</p>
             </div>
         </div>  

         {/* Best seller products*/}
         <div className=" flex flex-wrap w-270 max-w-[110%] m-auto  mt-5">
      
         {related_products.map((element, index)=>(
            <div className="size-[17%]  m-4" key={index}>
            <img src={element.image} key={index} onClick={()=>handleImagechange(element)} className=" cursor-pointer  transform transition hover:scale-110  ease-in-out hover:rounded-sm"/>
            <p className=" text-neutral-700 mt-2 font-semibold">{element.name}</p>
            <p className="font-bold font-serif text-neutral-700">${element.price}</p>
          </div>   
         ))}
             
         </div>

        <Footer assets_imp={assets_data}/>
    </div>
  )
}

export default Products
