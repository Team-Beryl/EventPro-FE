import { ArrowUpTrayIcon } from "@heroicons/react/24/outline"
import Button from "../../components/button"
import { Celebrity } from "../../assets"
import axios from "axios"

const Createevents = () => {
  // post event to backend
  const postEvent = async (event) => {
    event.preventDefault();
    console.log(event.target)
    // collect all input from form
    const formData = new FormData(event.target);
    // PostData to backend
    const response = await axios.post('https://eventspro-be.onrender.com/events', formData)
    console.log(response);
  }
  return (
    <div className="flex flex-col w-full justify-center items-center gap-40 bg-[#ECEFF7] mt-24 ">

      <div className="flex flex-col gap-4">
        <div>
          <h2 className="font-bold  text-[#5F181E] text-[32px] pt-12">Create an event with EVENTPRO</h2>
          <p className="text-[18px] ">Answer a few questions about your event to create an event with Us</p>
        </div>

        <form onSubmit={postEvent} >
          <div className="pb-5" >
            <div> <h3 className="text-[18px] font-semibold">What is the name of your event?</h3>
              <h4>This will be your event's title.Your title will be use to help create your event's summary.</h4></div>
            <label className="relative block pt-5">
              <span className="sr-only">Event name</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
              </span>
              <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-96 h-11 border  border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="event name" type="text" id="name" name="name" />
            </label>
          </div>

          <div className="pb-5">
            <h3 className="text-[18px] font-semibold mb-3 ">When does it start and end?</h3>
            <div className="flex gap-6">
              <span>
                <label htmlFor="date"></label>
                <input className="w-36 h-8 rounded border-black" id="date" type="date" name="date" />
              </span>
              <span>
                <label htmlFor="starttime">Start Time</label>
                <input className="w-32 h-8 rounded border-black" id="time" type="Time" name="startTime " />
              </span>
              <span>
                <label htmlFor="endtime">End Time</label>
                <input className="w-32 h-8 rounded border-black" id="time" type="Time" name="endTime" />
              </span>
            </div>
          </div>



          <h3 className="text-[18px] font-semibold pb-2 ">Where will the event be?</h3>
          <label className="relative block">
            <span className="sr-only">Location</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
            </span>
            <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-96 h-11 border  border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="location" type="text" id="location" name="location" />
          </label>



          <div className="pt-6">
            <h3 className="text-[18px] font-semibold pb-2 pt-3 ">What's the rate for the event?</h3>
            <label className="relative block">
              <span className="sr-only">Price</span>
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
              </span>
              <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-96 h-11 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="price" type="text" id="price" name="price " />
            </label>
          </div>



          <div className="pt-6">

            <label for="categories" className="font-semibold text-[18px]">What category is your event?</label>

            <select className="placeholder:italic placeholder:text-slate-400 block bg-white w-96 h-11  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="event category" type="text" id="category" name="category" >
            <option ></option>
            <option >Music</option>
            <option >Wedding</option>
            <option >Tech</option>
            <option>Conference</option>
          </select>
          


      </div>



      <div className="pt-6">
        <h3 className="text-[18px] font-semibold pb-2 ">Give a brief description of your event ?</h3>
        <label className="relative block">
          <span className="sr-only">Location</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
          </span>
          <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-96 h-11 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="event description" type="text" id="description" name="description" />
        </label>
      </div>


      <div className="flex items-center space-x-6 pt-4">
        <div className="flex pt-5">
          <ArrowUpTrayIcon />
          <h3>Upload Flier</h3>
        </div>
        <label className="block">
          <span className="sr-only ">Choose profile photo</span>
          <input type="file" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100 " id="flier" name="flier" />
        </label>
      </div>

      <div className="flex flex-row gap-7 pb-14">
        <Button type="submit" text="Create Event" onClick={() => postEvent} />
      </div>
    </form>
      </div >
    </div >
  )
}

export default Createevents