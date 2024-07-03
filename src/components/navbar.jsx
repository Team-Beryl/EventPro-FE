import { Link } from "react-router-dom"
import { logo6 } from "../assets"
import E from "../constants"



const Navbar = () => {
    return (
        <div className="flex justify-between px-32 py-10 fixed w-full left-0 top-0  z-50">
            <img className="w-48 mb-10" src={logo6} alt="logo" />
            <div className="flex gap-x-12 text-[18px] text-white pt-10 " >
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
