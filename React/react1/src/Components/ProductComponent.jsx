export function ProductComponent({props}){
    return (
        <>
            <h1>{props.name}</h1>
            <p>Price : INR {props.price}</p>
            <p>Specification : {props.specification}</p>
            <p>Warranty : {props.warranty}</p>
        </>
    )
}