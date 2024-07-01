import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import Footer from "../components/footer"



const Rootlayout = () => {
  return  <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  
}

export default Rootlayout