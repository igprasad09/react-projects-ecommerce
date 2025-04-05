import Navbar from "./Navbar"
import { assets } from "../assets/frontend_assets/assets"
import Footer from "./Footer"

function About() {
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
                   <p className="font-semibold text-neutral-500">Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes. 
                    Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                   <p className="font-black mt-5 text-neutral-700">Our Mission</p>
                   <p className="font-semibold mt-5 text-neutral-500">Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                </span>
             </div>

             <div className="flex mt-10">
                 <p className="text-neutral-500 mb-10 text-2xl font-sans mr-2">ABOUT</p>
                 <p className="text-gray-800 text-2xl font-semibold">US</p>
                 <p className=" font-extrabold text-2xl -mt-4 ml-2 text-neutral-700">____</p>
             </div>

             <div className="flex h-65 w-280 justify-between mb-10">
                   <span className=" border-1 py-15 px-20 border-gray-300">
                         <p className="font-bold mb-5 text-[14px] ">Quality Assurance:</p>
                         <p className="font-semibold text-[14px] text-neutral-500">We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                   </span>
                   <span className=" border-1 py-15 px-20 border-gray-300">
                         <p className="font-bold mb-5 text-[14px]">Convenience:</p>
                         <p className="font-semibold text-[14px] text-neutral-500">With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                   </span>
                   <span className=" border-1 py-15 px-20 border-gray-300">
                         <p className="font-bold mb-5 text-[14px]">Exceptional Customer Service:</p>
                         <p className="font-semibold text-[14px] text-neutral-500">Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
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

export default About
