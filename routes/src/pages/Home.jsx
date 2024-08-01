import{ useEffect, useState } from 'react'
import Card from "./Card";

export default function Home() {

  const [fuitesData, setFruitesData] = useState([]);

  // console.log('fruitsdat', fuitesData)

  useEffect(() => {

    // get request
    fetch("http://localhost:8000/vegies")
      .then((res) => res.json())  // promise res. rej
      .then((data) => {
        console.log(data)

        setFruitesData(data)

      })
      .catch((eroor) => {
        console.log("kuch to gadbad hai",eroor)
      })

  }, [])

  return (
    <div>

      <div>
        {
          fuitesData.map((item) => <Card {...item} key={item.id} />)
        }
      </div>

    </div>
  )
}
