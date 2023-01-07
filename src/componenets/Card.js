function card(props) {
    return (
        <>
            <div className="card" >
                <img src={props.product.image} />
                <h2> {props.product.title} </h2>
                <p>{props.product.price} </p>
            </div>
        </>
    )
}

export default card
