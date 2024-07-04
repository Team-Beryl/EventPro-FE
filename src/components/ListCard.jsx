

import React from 'react'

const ListCard = (image, name, price,  location,date,time,discription) => {
    return (
        <div>

            <img className='w-full' src={image} alt={name} />
            <p>{name}</p>
            <h3>{price}</h3>
            <p>{location}</p>
            <p>{date}</p>
            <p>{time}</p>
            <p>{discription}</p>


        </div>
    )
}

export default ListCard