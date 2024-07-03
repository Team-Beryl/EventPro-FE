import { Globe, Mail, Map, Phone } from "lucide-react"
import { fimg1, fimg2, fimg3, fimg4, fimg5, fimg6, logo6 } from "../assets"
import { EnvelopeIcon, GlobeAltIcon, HeartIcon, MapIcon, PhoneIcon } from "@heroicons/react/20/solid"



const Footer = () => {
  return (
    
    <div className="bg-black text-white">
      <div className= "w-full h-64 flex items-center justify-evenly">
      <div className="gap-6 space-y-2">
       <h3 className="text-[20px] font-semibold  space-y-5 ">EventPro</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt ut labore <br />et dolore magna aliqua. Ut enim ad minim veniam,<br /> quis nostrud exercitation ullamco laboris.</p>
        
      </div>

      <div className="">
        <h3 className="text-[20px] font-semibold">Contact</h3>
        <div className="gap-y-10 text-[14px] font-[Poppins] space-y-3">
        <span className="flex gap-x-4"><MapIcon className="w-[19px]"/>184 Main Collins Street</span>
       <span className="flex gap-x-4"><PhoneIcon className="w-[19px]" /> (226) 446 9371</span> 
        <span className="flex gap-x-4"><EnvelopeIcon className="w-[19px]" /> confer@gmail.com</span>
        <span className="flex gap-x-4"><GlobeAltIcon className="w-[19px]" /> www.confer.com</span>
        </div>

      </div>

      <div className="gap-x-1">
        <h3 className="text-[20px] font-semibold ">Gallery</h3>
        <div className="grid grid-cols-3 w-[300px] h-[100px]  gap-1">
          <img className="rounded-md  hover:bg-black" src={fimg1} alt="footer-image" />
          <img className="rounded-md" src={fimg2} alt="footer-image" />
          <img className="rounded-md" src={fimg3} alt="footer-image" />
          <img className="rounded-md" src={fimg4} alt="footer-image" />
          <img className="rounded-md" src={fimg5} alt="footer-image" />
          <img className="rounded-md" src={fimg6} alt="footer-image" />
        </div>
      </div>
      </div>

      <div className="border-t grid grid-cols-2 pl-[150px] pt-6">
        <div>Copyright ©2024 All rights reserved | This template is made with <HeartIcon className="w-[19px]" />by Team Beryl </div>
          <div>
            <ul className="flex gap-x-4">
              <li>Terms of Service</li>
              <li> Privacy Policy</li>
            </ul>
          </div>
      </div>
    </div>

    
  )
}

export default Footer