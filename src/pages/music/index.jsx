import E from "../../constants"


const Music = () => {
    return (
        <div>

            {
                E.LISTCARD.map(
                    (ListCard, index) => {
                        return (
                            <div>


                                <img src={ListCard.image} alt="image" />
                                <p>{ListCard.name}</p>
                                <h3>{ListCard.price}</h3>
                                <p>{ListCard.location}</p>
                                <p>{ListCard.date}</p>
                                <p>{ListCard.time}</p>
                                <p>{ListCard.discription}</p>

                            </div>
                        )
                    }
                )
            }



        </div>
    )
}

export default Music