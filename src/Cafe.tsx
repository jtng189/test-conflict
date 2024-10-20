export type CafeData = {
    name: string
    description: string | undefined
    rating: number
    reviews: string[]
    latitude: number
    longitude: number
}

export type CafeProps = {
    visible: boolean
    data: CafeData
}

function Cafe(props: CafeProps) {
    const data: CafeData = props.data
    const name: string = data.name
    const desc: string | undefined = data.description
    const rating: number = data.rating

    // useState useEffect useLayout

    // render something
    if (!props.visible) {
        return undefined
    }

    return (
        <>
            <h1>Cafe Name: {name}</h1>
            <p>Cafe Description: {desc}</p>
            <p>Rating: {rating}</p>
        </>
    )
}

export default Cafe