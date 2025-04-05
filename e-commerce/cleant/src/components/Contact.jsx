import Navbar from "./Navbar"
import { assets } from "../assets/frontend_assets/assets"
import Footer from "./Footer"

function Contact() {
  return (
    <div className="grid justify-center">
    <Navbar/>
    <hr className="w-[100%] mt-4 text-neutral-200 font-bold mb-10"/>

    {/* TITLE Latest collections*/}
   
         <div className="flex justify-center ">
             <p className="text-neutral-500 mb-10 text-2xl font-sans mr-2">ABOUT</p>
             <p className="text-gray-800 text-2xl font-semibold">US</p>
             <p className=" font-extrabold text-3xl -mt-4 ml-2 text-neutral-700">____</p>
         </div>
     
         <div className="flex">
            <img src={assets.about_img} className="w-110"/>
            <span className="w-140 ml-14 mt-12">
                <p className="text-[20px] font-bold text-neutral-600">Our Store</p>
                <span className="">
                   <p className="text-[15px] font-semibold text-neutral-500 mt-5">54709 Willms Station</p>
                   <p className="text-[15px] font-semibold text-neutral-500">Suite 350, Washington, USA</p>
                </span>
                <span className="">
                   <p className="text-[15px] font-semibold text-neutral-500 mt-5">Tel: (415) 555-0132</p>
                   <p className="text-[15px] font-semibold text-neutral-500">Email: admin@forever.com</p>
                </span>
                <p className="text-[20px] font-semibold mt-5 text-neutral-600">Careers at Forever</p>
                <p className="text-[15px] font-semibold text-neutral-500 mt-5">Learn more about our teams and job openings.</p>
                <button className="mt-5 border py-3 px-5 font-semibold hover:bg-black hover:text-white transition ease-in-out duration-600">
                     Explore Jobs
                </button>
            </span>
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

     <Footer assets_imp={assets}/>

</div>
  )
}

export default Contact
