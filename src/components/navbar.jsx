import { Link } from "react-router-dom"
import { logo } from "../assets"
import E from "../constants"



const Navbar = () => {
    return (
        <div>
            <img className="w-48" src={logo} alt="logo" />
            <div>
                {
                    E.NAVLINKS.map(
                        (item, index) => {
                            return <Link key={index} to={item.path}>{item.name}</Link>
                        }
                    )
                }


            </div>


        </div>
    )
}

export default Navbar