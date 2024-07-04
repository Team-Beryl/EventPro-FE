import { Link } from "react-router-dom"
import { logo6 } from "../assets"
import E from "../constants"



const Navbar = () => {
    return (
        <div className="flex justify-between py-5 px-32 items-center fixed w-full left-0 top-0  z-50">
            <img className="w-20" src={logo6} alt="logo" />
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
                                                                                                                                                                                