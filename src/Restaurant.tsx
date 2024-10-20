// implement a Restaurant component that renders a restaurant
export type RestaurantData = {
    name: string
    description: string
    rating: number
    reviews: string[]
}

function Restaurant(props: RestaurantData) {
    const name = props.name
    const desc = props.description
    const rating = props.rating

    const reviews = props.reviews.map(review => {
        return (
            <p>{review}</p>
        )
    })

    return (
        <>
            <h1>Restaurant Name: {name}</h1>
            <p>Restaurant Description: {desc}</p>
            <p>Restaurant Rating: {rating}</p>
            {reviews}
        </>
    )
}

export default Restaurant