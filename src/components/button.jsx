import { Link } from "react-router-dom"
import E from "../constants"


const Button = ({ text, onClick }) => {
  return (


    <>
    <button className="rounded-full bg-black px-10 w-fit h-10 text-white hover:bg-white hover:text-black" onClick={onClick}>
      {text}</button>

    
    
    </>
      


  

  )
}

export default Button