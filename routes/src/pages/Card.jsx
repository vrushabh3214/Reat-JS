// import React from 'react'

// eslint-disable-next-line react/prop-types
export default function Card({ id, fruits, Quantity} ) {
    // console.log(id, name)

    return (<div key={id}>
        <p className="font-normal text-gray-700 dark:text-gray-400">{id}</p>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Name: {fruits}</h5>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Quantity : {Quantity}</h5>

    </div>

    )
}


