import FindEventCard from "../../components/FindEventCard"
import marriage from "../../assets/img/marriage.jpg"
import tech from "../../assets/img/tech.jpg"
import { fimg1 } from "../../assets"
import meeting from "../../assets/img/meeting.jpg"
import { useNavigate } from "react-router-dom"


const Findevents = () => {
  const navigate = useNavigate()

  return (
    <div className="mt-40 px-40 flex flex-col gap-20 pb-20">

      <h1 className="font-bold text-3xl text-[#5F181E] text-center">BROWSE EVENTS</h1>

      <div className=" grid grid-cols-2 justify-center items-center gap-11 ">
        <FindEventCard
          image={fimg1}
          name="Music Events" 
          onClick={() => navigate("/muse")}
        

        />
        <FindEventCard
          image={marriage}
          name="Wedding Events"
          onClick={() => navigate("/marriage")}

        />
        <FindEventCard
          image={tech}
          name="Tech Events"
          onClick={() => navigate("/tec")}

        />
        <FindEventCard
          image={meeting}
          name="Conference Events"
          onClick={() => navigate("/conf")}

        />


      </div>


    </div>
  )
}

export default Findevents