
import { woman } from "../../assets"

const Login = () => {
  return (
    <div className=" flex justify-evenly gap-4 place-content-center pt-[120px] bg-[#ECEFF7] w-full h-[80vh]">
      

      <div className="flex flex-col gap-6">
      <h1 className="text-[32px] font-semibold">Login</h1>
        <label class="relative block ">
          <span class="sr-only">Email</span>
          <input class="placeholder:italic w-72 placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-sm py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " placeholder="Email Address" type="text" name="email" />
        </label>


        <label class="relative block">
          <span class="sr-only">Password</span>
          <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-72 border border-slate-300 rounded-sm py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Password" type="text" name="password" />
        </label>

        <button className="w-72 border border-slate-300 rounded-md h-10 shadow-sm bg-[#5F181E] text-center text-white text-[15px]">Log in</button>
      
        <div className=" relative border-t-2 w-72 mt-5 gap-2 ">
          <h3 className="absolute border rounded-full w-10 h-7  border-white text-center top-[-20px] right-[50%]">or</h3>
        </div>
      </div>
      
      <div>
      <img className="h-[60vh] pb-6 " src={woman} alt="image" />
      </div>
    </div>


  )
}

export default Login