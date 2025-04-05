import React from 'react'

function Footer(props) {
  return (
    <>
       {/* Last Footer */}
       <footer>
              <div className="w-[100%] m-auto flex justify-between  mt-37">
              <span className="">
                        <img src={props.assets_imp.logo} className="size-[30%]"/>
                        <p className="font-medium text-neutral-500">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                        <p className="font-medium text-neutral-500">industry. Lorem Ipsum has been the industry's standard dummy</p>
                        <p className="font-medium text-neutral-500">text ever since the 1500s, when an unknown printer took a galley</p>
                        <p className="font-medium text-neutral-500">of type and scrambled it to make a type specimen book.</p>
                    </span>
                    <span className="grid">
                         <p className="font-medium text-neutral-700 text-2xl">COMPANY</p>
                         <p className="font-medium text-neutral-500">Home</p>
                         <p className="font-medium text-neutral-500">About us</p>
                         <p className="font-medium text-neutral-500">Delivery</p>
                         <p className="font-medium text-neutral-500">Privacy policy</p>                      
                    </span>
                    <span className="">
                          <p className="font-medium text-neutral-700 text-2xl">GET IN TOUCH</p>
                          <p className="font-medium text-neutral-500">+1-000-000-0000</p>
                          <p className="font-medium text-neutral-500">greatstackdev@gmail.com</p>
                          <p className="font-medium text-neutral-500">Instagram</p>
                    </span>
              </div>
       </footer>

       <br />
       <hr  className=" text-neutral-300"/>
       <br />
         <p className="text-neutral-500 text-center">Copyright 2024@ greatstack.dev - All Right Reserved.</p>
    </>
  )
}

export default Footer
