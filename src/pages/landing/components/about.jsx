import React from 'react'
import { aboutimg } from '../../../assets'
import Button from '../../../components/button'
import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate = useNavigate()
  return (
    <div className='flex py-20  '>
      <div className='flex flex-col gap-y-10 pl-[80px] pt-24 text-justify'>

        {/* <span className='text-[#830900c9] mt-16 font-bold  text-xl'>About EventPro</span> */}

        <h3 className='text-3xl  font-bold'>WELCOME TO EVENTPRO</h3>

        <h3 >Explore a variety of events, from music concerts and festivals to workshops. <br />Easily find and book tickets to an exciting event happening around you.</h3>

        <h3 >And to our Event Organizers, list your events on EventPro and reach a wider audience. <br />Our platform offers seamless tools for event management, promotion and ticket sales. <br />Join our community o organizers and make your next event a success</h3>

     
          <Button text="Find Next Event" onClick={() => navigate("/events")}/>
       
      </div>

      <div>
        <img src={aboutimg} alt="image" />
      </div>


    </div>
  )
}

export default About