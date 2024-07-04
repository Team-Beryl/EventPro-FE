import { ArrowUpTrayIcon } from "@heroicons/react/24/outline"
import Button from "../../components/button"
import { Celebrity } from "../../assets"

const Createevents = () => {
  return (
    <div className="flex w-full justify-center items-center gap-40 bg-[#FCDEB0]  mt-28 ">

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-[32px] pt-12">Create an event with EVENTPRO</h2>
        <p className="text-[18px] ">Answer a few questions about your event to create an event with Us</p>

        <h3 className="text-[18px] font-semibold">What is the name of your event?</h3>
        <p>This will be your event's title.Your title will be use to help create your event's summary.</p>


        <label className="relative block">

          <span className="sr-only">Event Name</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="enter event name" type="text" name="search" />

        </label>

        <h3 className="text-[18px] font-semibold">When does it start and end?</h3>
        <div>

          <form className="space-x-6 pb-6">
            <span>
              <label htmlFor="date">Date</label>
              <input className="w-36 h-8 rounded border-black" id="date" type="date" />
            </span>
            <span>
              <label htmlFor="starttime">Start Time</label>
              <input className="w-32 h-8 rounded border-black" id="time" type="time" />
            </span>
            <span>
              <label htmlFor="endtime">End Time</label>
              <input className="w-32 h-8 rounded border-black" id="time" type="time" />
            </span>

          </form>

          <h3 className="text-[18px] font-semibold pb-6">Where will the event be?</h3>

          <label className="relative block">

            <span className="sr-only">Location</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-150 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="location" type="text" name="search pt-4" />

          </label>

          <h3 className="text-[18px] font-semibold pb-9 pt-3 ">What's the rate for the event?</h3>
          <label className="relative block">

            <span className="sr-only">Ticket Price</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-150 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="price" type="text" name="search " />

          </label>


          <form className="flex items-center space-x-6">
            <div className="flex pt-5">
              <ArrowUpTrayIcon />
              <h3>Upload Flyer</h3>
            </div>
            <label className="block">
              <span className="sr-only ">Choose profile photo</span>
              <input type="file" className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
            </label>
          </form>



        </div>

        <div className="flex flex-row gap-7 pb-14">

          <Button text="Create Event" />
        
        </div>




      </div>


      <div className="w-[300px] ">
        <img src={Celebrity} alt="image" />
      </div>

    </div>
  )
}

export default Createevents