import { useState } from 'react'

export default function Form() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("")


    const handleFormSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:8000/fuits", {
            method: "POST",
            body: JSON.stringify({ fruits: name, Quantity: number }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((res) => console.log("data added successfully", res))
            .catch((err) => console.log("something is wrong", err))

        setName("")
        setNumber("")

    }

    return (
        <div>
            <form onSubmit={handleFormSubmit} >

                <input type="text" placeholder='Enter fruites' value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />
                <input type="number" placeholder='Enter quantity' value={number} onChange={(e) => setNumber(e.target.value)} /><br /><br />
                <button>Submit</button>

            </form>
        </div>
    )
}
