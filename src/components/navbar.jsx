import { Link } from "react-router-dom"
import { logo6 } from "../assets"
import E from "../constants"
import { MagnifyingGlassCircleIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"




const Navbar = () => {
    return (
        <div className="flex justify-between py-5 px-32 items-center fixed w-full left-0 top-0  z-50 bg-[#5F181E]">
            <img className="w-20" src={logo6} alt="logo" />

            <div className="flex items-center gap-x-4 bg-white border-none rounded-[10px] border-[2px]" >
                
                    
                        <MagnifyingGlassIcon className="w-[19px] h-[19px] mt-5 ml-6 mb-5 " />
                    
                    <input type="text" className="h-[50px] px-[25px] py-[5px] w-96 bg-transparent outline-none "  placeholder="search for events" />
                

            </div>

            <div className="flex gap-x-12 text-[18px] text-white  " >
                {
                    E.NAVLINKS.map(
                        (item, index) => {
                            return <Link key={index} to={item.path}>{item.name}</Link>
                        }
                    )}
            </div>
        </div>
    )
}

export default Navbar
