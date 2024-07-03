import { pexels } from "../../../assets"
import Button from "../../../components/button"

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full">
      <img className=" w-full object-cover h-screen" src={pexels} alt="hero" />

      <div className="absolute top-0 items-center justify-center flex flex-col gap-y-10 w-full h-full bg-black/60 pt-40">
       
        <h1 className="text-[35px] text-white font-bold italic">Transforming Events into Experiences</h1>
         <div className="space-x-5 ">
          <button className="rounded-full bg-white w-28 h-10 hover:bg-[#830900]">Login</button>
          <Button text="Sign Up"/>
        </div>
      </div>



    </div>

  )
}

export default Hero