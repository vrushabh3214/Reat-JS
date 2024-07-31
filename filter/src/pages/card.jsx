/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function Card({ movie, rating, image }) {
    return (
        <div>
            <img width="200px" src={image} alt="" />
            <h2>{movie}</h2>
            <p>{rating}</p>
        </div>
    )
}   
