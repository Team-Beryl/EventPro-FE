
import { useState, useEffect } from "react"
import { wedvid } from "../../assets"
import axios from "axios"
import ListCard from "../../components/ListCard"
const BASE_URL = import.meta.env.VITE_API_URL


const Wedding = () => {

  const [events, setEvents] = useState([]);

    // Define a function to fetch events
    const getEvents = async () => {
        const response = await axios.get(`${BASE_URL}/events?filter={"category":"Wedding"}&limit=3`);
        if (response.status === 200) {
            setEvents(response.data);
        } else {
            setEvents([]);
        }
    }

    // Get events
    useEffect(() => {
        getEvents();
    }, []);
  return (
    <div className="bg-[#ECEFF7] pr-10 ">

      <div>
        <video className="w-[100vw]" autoPlay loop src={wedvid}></video>
      </div>

      <div className="grid grid-cols-3 mt-40 pl-10 text-wrap pb-24 gap-5">

      {
                    events.map(
                        (event) => {

                            return (
                                <ListCard
                                    key={event.id}
                                    event={event}
                                />
                            )
                        }
                    )
                }

      </div>





    </div>
  )
}

export default Wedding