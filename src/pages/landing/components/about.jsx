import React from 'react'
import { aboutimg } from '../../../assets'

const About = () => {
  return (
    <div className='flex pt-[30px] bg-[#002b53]'>
      <div className='pl-[80px] pt-24 text-justify'>

        {/* <span className='text-[#830900c9] mt-16 font-bold  text-xl'>About EventPro</span> */}

        <h3 className='text-3xl text-white pt-8 font-bold'>WELCOME TO EVENTPRO</h3>

        <h3 className='text-white pt-10'>Explore a variety of events, from music concerts and festivals to workshops. <br />Easily find and book tickets to an exciting event happening around you.</h3>

        <h3 className='text-white pt-6'>And to our Event Organizers, list your events on EventPro and reach a wider audience. <br />Our platform offers seamless tools for event management, promotion and ticket sales. <br />Join our community o organizers and make your next event a success</h3>

        <div className='p-16 pr-10'>
          <button className=' bg-[#830900] py-2 px-4 rounded-full hover:bg-white'>Find Next Event</button>
        </div>
      </div>

      <div>
        <img src={aboutimg} alt="image" />
      </div>


    </div>
  )
}

export default About