import React from 'react'
import Button from './button'
import { useNavigate } from "react-router-dom"



const FindEventCard = ({ image, name, onClick }) => {
    const navigate = useNavigate()
    return (
        <div>
            <img className='w-full' src={image} alt={name} />
            <p>{name}</p>
         <Button text="View More" onClick={onClick}  />

         


        </div>

        


    )
}

export default FindEventCard