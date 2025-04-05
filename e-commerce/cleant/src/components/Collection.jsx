import Navbar from "./Navbar";
import { assets, products } from "../assets/frontend_assets/assets";
import { useState } from "react";
import { Link } from "react-router";
import Footer from "./Footer";

function Collection() {
  const [product_imp, setproduct_imp] = useState(products);
  const [sort_value, setsort_value] = useState("Relevent");
  const [checkbox_imf, setcheckbox_imf] = useState({
           men: false,
           Women: false,
           Kids: false,
           Topwear: false,
           Bottomwear:false,
           Winterwear:false
  })
  
  const [checked, setchecked] = useState({men: false, women: false, kids: false})

  const [search_visiable, setsearch_visiable] = useState(false)
  const [search_value, setsearch_value] = useState("");

  function handle_search_visiable(){
         search_visiable?setsearch_visiable(false):setsearch_visiable(true);
  }

  return (
   <div className="grid justify-center">
         <Navbar handle_search_fuction={handle_search_visiable}/>  

         {search_visiable?<div className="w-[100%] h-20 bg-gray-100 border-t-1 flex justify-center items-center mt-5 mb-5 border-gray-300 border-b-1">
              <input type="text" value={search_value} onChange={(e)=>setsearch_value(e.target.value)} placeholder="Search" className="w-130 absolute text-gray-500 h-9 border-gray-500 rounded-l-2xl rounded-r-2xl border-1 px-3 font-medium"/>
              <img src={assets.search_icon} className="w-auto h-5 relative left-58"/>
         </div>:<hr className="w-[100%] mt-4 text-neutral-200 font-bold mb-10"/>}        
        
         

         <div className="flex ">
             {/* FILTERS  div*/}
              <div className="">
                  <p className="text-2xl mb-5">FILTERS</p>
                  <span className="grid justify-start border py-2 border-neutral-300 w-63">
                       <p className="font-semibold ml-5 text-gray-700 text-[14px] mb-1.5">CATEGORIES</p>
                       <span className="flex ml-5 mb-1.5">
                          <input type="checkbox" checked={checked.men} onChange={(e)=>{
                                                          if(e.target.checked) {setcheckbox_imf({men:true}); setchecked({women:false,kids:false})}
                                                          else {setcheckbox_imf({men:false});}
                          }} className=""/>
                          <p className="text-neutral-600 font-normal ml-2 ">Men</p>
                       </span>
                       <span className="flex ml-5 mb-1.5">
                          <input type="checkbox" checked={checked.women} onChange={(e)=>{
                                                      if(e.target.checked){setcheckbox_imf({Women:true}); setchecked({men:false,kids:false})}
                                                      else {setcheckbox_imf({Women:false})}
                                                      }}/>
                          <p className="text-neutral-600 font-normal ml-2">Women</p>
                       </span>
                       <span className="flex ml-5 mb-1.5">
                          <input type="checkbox" checked={checked.kids}  onChange={(e)=>{
                                                      if(e.target.checked){setcheckbox_imf({Kids:true}); setchecked({men:false,women:false})}
                                                      else {setcheckbox_imf({Kids:false})}
                                                      }}/>
                          <p className="text-neutral-600 font-normal ml-2">kids</p>
                       </span>        
                </span>
                
              </div>

              {/* TITLE */}
           <div className="grid ml-10">

           {/* All COLLECTIONS title*/}
             <div className="flex  mb-3">
                 <p className="text-neutral-700 text-center text-3xl font-sans mr-2">All</p>
                 <p className="text-gray-800 text-3xl text-center font-semibold">COLLECTIONS</p>
                 <p className=" font-extrabold text-3xl text-center -mt-4 ml-2 text-neutral-700">____</p>
              <select value={sort_value} onChange={(e)=>setsort_value(e.target.value)} className="font-semibold text-[14px] h-11 text-center border-2 ml-auto border-neutral-300">
                  <option value="Relevent" >Sort by:Relevent</option>
                  <option value="Low to High">Sort by:Low to High</option>
                  <option value="High to Low">Sort by:High to Low</option>
             </select>
             </div>

             {/* All COLLECTIONS products*/}
             <div className=" w-220  flex flex-wrap">
               
               {(()=>{
                   let data = [];

                   if (sort_value === "Relevent") data = product_imp;
                   else if (sort_value === "Low to High") data = [...product_imp].sort((a,b)=>a.price - b.price);
                   else if (sort_value === "High to Low") data = [...product_imp].sort((a,b)=>b.price - a.price);

                  if(checkbox_imf.men) {
                      data = [...data].filter(element=>element.category === "Men");
                  }else if(checkbox_imf.Women){
                      data = [...data].filter(element=>element.category === "Women");
                  }else if(checkbox_imf.Kids){
                      data = [...data].filter(element=>element.category === "Kids")
                  }

                  if (search_value) {
                   data = data.filter(item => item.name.toLowerCase().startsWith(search_value.toLowerCase()));       
                }
                

                   return data.map((element, index)=>(
                     <div className="grid w-53 mr-1 ml-1 mb-8" key={index}>
                     <Link to={`/product/${element._id}`}>
                       <img src={element.image} key={index} className=" cursor-pointer  transform transition hover:scale-95  ease-in-out hover:rounded-sm"/>
                     </Link>
                       <p className=" text-neutral-700 mt-2 font-semibold">{element.name}</p>
                       <p className="font-bold font-serif text-neutral-700">${element.price}</p>
                    </div>
                   ))
               })()}

             </div>
  
         </div> 
         </div>
         <Footer assets_imp={assets}/>
  </div> 
  )
}

export default Collection
