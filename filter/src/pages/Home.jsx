import { useEffect, useState } from 'react'


import Card from './card';


export default function Home() {


    const [productData, setProductData] = useState([]);
    const [inputCategory, setInputCategory] = useState("");
    console.log(inputCategory)


    useEffect(() => {
        fetch("https://dummyapi.online/api/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setProductData(data)
            })
    }, [])


    // filter by category


    let filteredData = productData.filter((item) => item.category === inputCategory)


    // eslint-disable-next-line no-self-assign
    inputCategory == "" ? filteredData = productData : filteredData = filteredData ;


    return (
        <div>


            <div>
                {/*filter by category*/}


                <div>


                    <select onChange={(e) => setInputCategory(e.target.value)} >


                        <option value="">Categories</option>


                        <option value="men's clothing">men`s clothing</option>


                        <option value="jewelery">Hardik jweleres</option>


                        <option value="electronics">Gada Electronics</option>


                        <option value="women's clothing">Shrusti fashion</option>
                    </select>


                </div>
                <br /> <br /> <br />
            </div>
            {
                filteredData.map((item) => <Card key={item.id} {...item} />)
            }

        </div>
    )
}



