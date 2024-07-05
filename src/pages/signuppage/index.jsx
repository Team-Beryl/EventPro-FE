import { fimg4 } from "../../assets"

const SignUp = () => {
  return (
    <div className=" flex justify-evenly gap-4 place-content-center pt-[160px]  bg-[#ECEFF7] w-full h-[100vh]">

      <div className="flex flex-col gap-6">
        <h1 className="text-[32px] font-semibold">Create an account</h1>

        <div className="flex gap-8">
          <label class="relative block ">
            <span class="sr-only">Firstame</span>
            <input class="placeholder:italic w-32 placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-sm py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " placeholder="First name" type="text" name="email" />
          </label>

          <label class="relative block ">
            <span class="sr-only">Lastname</span>
            <input class="placeholder:italic w-32 placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-sm py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " placeholder="Lastname" type="text" name="email" />
          </label>
        </div>

        <label class="relative block ">
          <span class="sr-only">Email</span>
          <input class="placeholder:italic w-72 placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-sm py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " placeholder="Email Address" type="text" name="email" />
        </label>

        <label class="relative block ">
          <span class="sr-only">confirm email</span>
          <input class="placeholder:italic w-72 placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-sm py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " placeholder="Confirm email address" type="text" name="email" />
        </label>



        <label class="relative block  ">
          <span class="sr-only">Date of birth</span>
          <input id="date of birth" type="date" className=" bg-white w-72 border border-slate-300 rounded-sm py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm " />
        </label>

        <label class="relative block ">
          <span class="sr-only">Password</span>
          <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-72 border border-slate-300 rounded-sm py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Password" type="text" name="password" />
        </label>

        <button className="w-72 border border-slate-300 rounded-md h-10 shadow-sm bg-[#5F181E] text-center text-white text-[15px]">Create account</button>
      </div>
      <img className="h-[70vh] pb-6" src={fimg4} alt="" />
    </div>
  )
}

export default SignUp