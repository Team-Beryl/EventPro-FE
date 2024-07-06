import Button from "./button"




const ListCard = (props) => {
    //    const name, price, flier, date, description} = props.event
    return (
        <div className="bg-[#ECEFF7]">

            <div>

                <img className='w-[100%] h-auto' src={`https://savefiles.org/${props.event.flier}?shareable_link=245`} alt={props.event.name} />
                <p className="font-bold">{props.event.name}</p>
                <h3>{props.event.price}</h3>
                <p>{props.event.location}</p>
                <p>{props.event.date}</p>
                <p>{props.event.description}</p>

                {props.event.flier}

            </div>

            <Button text="Delete Event"/>
        </div>

    )
}

export default ListCard