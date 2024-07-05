import { marriage } from "../../../assets"
import { beach } from "../../../assets"
import { meeting } from "../../../assets"
import { band } from "../../../assets"

const Blog = () => {
  return (


    <div className="flex flex-col justify-center items-center gap-10 text-4xl bg-[#e9dcdd] font-bold pb-10">

      <div className=" text-[#5F181E]">
        <h1> Our Blog</h1>
      </div>

      <div className="grid grid-cols-2 w-3/4 gap-10  ">
        <img className="" src={marriage} alt="image" />
        <img src={beach} alt="image" />
        <img src={meeting} alt="image" />
        <img src={band} alt="image" />
      </div>

    </div>
  )
}

export default Blog