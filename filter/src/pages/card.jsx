/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function Card({ productCategory, name, featuredImage,brand,description,basePrice,inStock,storageOptions }) {
    return (
        <div>
            <img width="400px" src={featuredImage} alt="" />
            <h2>{productCategory}</h2>
            <p>{name}</p>
            <p>{brand}</p>
            <p>{description}</p>
            <p>{basePrice}</p>
            <p>{inStock}</p>
            <p>{storageOptions}</p>
        </div>
    )
}   
